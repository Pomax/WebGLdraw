
/**
 * Set up the .dat parser for turning .dat text into JS mesh object representations
 */
var DATParser = (function () {
  "use strict";

  // matfile data cache
  var dataCache = {};

  /**
   * Get the data for a .dat file
   */
  var getDATFile = function (filename) {
    // cache file!
    if (!dataCache[filename]) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", filename, false);
      xhr.send(null);
      if (xhr.responseText.trim() === "") {
        // oh no! try it stripped!
        filename = filename.replace(/\\/g, '/');
        filename = filename.substring(filename.lastIndexOf('/') + 1);
        xhr.open("GET", "./parts/" + filename, false);
        xhr.send(null);
        if (xhr.responseText.trim() === "") {
          // oh crap oh crap oh crap
          throw "ERROR: " + filename + " was empty!";
        }
      }
      dataCache[filename] = xhr.responseText;
    }
    return dataCache[filename];
  };

  /**
   * Cast a value to a floating point number.
   */
  var castFloat = function (v) {
    return parseFloat(v);
  };

    /**
     * Build a new mesh object for building the .dat file
     */
  var uid = 1;
  var buildMesh = function () {
    return {
      // local ID
      meshId: uid++,
      // list of vertices used in this mesh
      vertices: [],
      // list of faces used in this mesh
      faces: [],
      /**
       * Add a vertex to this mesh. Vertices
       * have x/y/z values as well as a color.
       */
      addVertex: function (x, y, z, c) {
        var vertex = {x: x, y: y, z: z, color: c};
        this.vertices.push(vertex);
      },
      /**
       * Add a triangle to this mesh. [m] will contain
       * three x/y/z coordinates.
       */
      addFace: function (m, c, clockwise, inverted) {
        // record the vertices
        var v1 = this.vertices.length;
        this.addVertex(m[0], m[1], m[2], c);
        var v2 = this.vertices.length;
        this.addVertex(m[3], m[4], m[5], c);
        var v3 = this.vertices.length;
        this.addVertex(m[6], m[7], m[8], c);
        // Record the triangle as a face, corrected for
        // CW/CCW direction and face inversion.
        var normal = (clockwise && inverted) || (!clockwise && !inverted);
        this.faces.push({v1: v1, v2: (normal ? v2 : v3), v3: (normal ? v3 : v2)});
      },
      /**
       * Add a quad to this mesh. [m] will contain
       * four x/y/z coordinates.
       */
      addQuad: function (m, c,  clockwise, inverted) {
        // record the vertices
        var v1 = this.vertices.length;
        this.addVertex(m[0], m[1], m[2], c);
        var v2 = this.vertices.length;
        this.addVertex(m[3], m[4], m[5], c);
        var v3 = this.vertices.length;
        this.addVertex(m[6], m[7], m[8], c);
        var v4 = this.vertices.length;
        this.addVertex(m[9], m[10], m[11], c);
        // Record the triangle as a face, corrected for
        // CW/CCW direction and face inversion.
        var normal = (clockwise && inverted) || (!clockwise && !inverted);
        this.faces.push({v1: v1, v2: (normal ? v2 : v3), v3: (normal ? v3 : v2)});
        this.faces.push({v1: v3, v2: (normal ? v4 : v1), v3: (normal ? v1 : v4)});
      },
      /**
       * format: m=[x,y,z,a,b,c,d,e,f,g,h,i], color
       *
       * m defines the following 3D transform matrix:
       *
       *    | a d g 0 |
       *    | b e h 0 |
       *    | c f i 0 |
       *    | X Y Z 1 |
       *
       * so that every point (x, y ,z) gets transformed to (x', y', z'):
       *
       *    x' = a*x + b*y + c*z + X
       *    y' = d*x + e*y + f*z + Y
       *    z' = g*x + h*y + i*z + Z
       */
      apply: function (c, m, color) {
        this.vertices.forEach(function (v) {
          var x = m[0] * v.x + m[1] * v.y + m[2] * v.z + c[0];
          var y = m[3] * v.x + m[4] * v.y + m[5] * v.z + c[1];
          var z = m[6] * v.x + m[7] * v.y + m[8] * v.z + c[2];
          v.x = x;
          v.y = y;
          v.z = z;
          v.color = color;
        });
      }
    };
  };


  /**
   * The parser object that will be returned, capable of reading
   * in .dat data and producing a javascript mesh object, which
   * can be turned into .obj and .mtl files using the toOBJ and toMTL
   * functions providede outside of the DATParser context.
   */
  var Parser = function Parser(inverted, consolePrefix) {
    // default values
    this.invertNext = false;
    this.clockwise = false;
    // is this (sub)mesh inverted?
    this.invert = inverted;
    this.consolePrefix = consolePrefix || "";
  };

  /**
   * Most of the functions are prototype functions.
   */
  Parser.prototype = {
    /**
     * Logging wrapper
     */
    log: (function () {
      if (console && console.log) {
        return function (s) {
          console.log(this.consolePrefix + s);
        };
      }
      return function (s) {};
    }()),
    /**
     * Backface culling instructions.
     * See http://www.ldraw.org/article/415.html for details
     */
    handleBFC: function (operands, line) {
      var parser = this;
      operands.forEach(function (op) {
        if (op === "CW") {
          parser.clockwise = true;
        }
        if (op === "CCW") {
          parser.clockwise = false;
        }
        if (op === "INVERTNEXT") {
          parser.invertNext = true;
        }
      });
    },
    /**
     * We don't care about comments, but there is one type of
     * instruction that takes the form of a comment that we
     * care a lot about: the backface culling instructions.
     */
    handleComment: function (operands, line) {
      if (operands[0] === "BFC") {
        operands.splice(0, 1);
        this.handleBFC(operands, line);
      }
    },
    /**
     * import format: color,  x,y,z,  a,b,c,d,e,f,g,h,i,  "part filename"
     *
     * Fields 'a' through 'i' are 3D transform matrix values.
     * See the mesh.apply() function for more details.
     */
    handleDependency: function (operands, meshes, lineInstruction) {
      // handle the include
      var dependency = operands.splice(operands.length - 1, 1)[0];
      operands = operands.map(castFloat);
      // figure out the determinant for this include matrix:
      var det = (function (m) {
        var t1 = m[0] * (m[4] * m[8] - m[7] * m[5]);
        var t2 = m[3] * (m[1] * m[8] - m[7] * m[2]);
        var t3 = m[6] * (m[1] * m[5] - m[4] * m[2]);
        return t1 - t2 + t3;
      }(operands.slice(4, 4 + 9)));
      // Make sure to get the BFC inversion right.
      var inverted = this.invert;
      if (this.invertNext) {
        inverted = !inverted;
      }
      if (det < 0) {
        inverted = !inverted;
      }
      var dependencyParser = new Parser(inverted, this.consolePrefix);
      this.invertNext = false;
      var dependencyMeshes = dependencyParser.parseFile(dependency);
      // Also make sure to apply RT matrices when appending the meshes:
      dependencyMeshes.forEach(function (mesh) {
        mesh.apply(operands.slice(1, 1 + 3), operands.slice(4, 4 + 9), operands[0]);
        meshes.push(mesh);
      });
    },
    /**
     * triangle format: color,  x1,y1,z1,  x2,y2,z2,  x3,y3,z3
     */
    parseTriangle: function (arg, mesh) {
      arg = arg.map(castFloat);
      mesh.addFace(arg.slice(1), arg[0], this.clockwise, this.invert);
    },
    /**
     * quad format: color,  x1,y1,z1,  x2,y2,z2,  x3,y3,z3,  x4,y4,z4
     */
    parseQuad: function (arg, mesh) {
      arg = arg.map(castFloat);
      mesh.addQuad(arg.slice(1), arg[0], this.clockwise, this.invert);
    },
    /**
     * parse a .dat line instruction. This builds out the
     * javascript mesh file that was passed as [meshes]
     */
    parseInstruction: function (line, meshes) {
      var currentMesh = meshes[meshes.length - 1];
      if (line.trim() === "" && currentMesh.vertices.length > 0) {
        meshes.push(buildMesh());
        return;
      }
      var operands = line.trim().split(/\s+/);
      var operator = operands.splice(0, 1)[0];

      // there are a number of operators that we don't care about
      if (operator === "2") {  /* outline information for the .dat renderer, which we won't use */ }
      else if (operator === "5") {  /* outline-if-visible information for the .dat renderer, which we won't use */ }
      // and an operation that we might care about
      else if (operator === "0") { this.handleComment(operands, line); }
      // and a number of operators that are really important.
      else if (operator === "1") { this.handleDependency(operands, meshes, line); }
      else if (operator === "3") { this.parseTriangle(operands, currentMesh); }
      else if (operator === "4") { this.parseQuad(operands, currentMesh); }
    },
    /**
     * Parse a stretch of .dat data, generating a javascript mesh object
     */
    parse: function (filename, data) {
      this.log(" * parsing " + filename + " data");
      var lines = data.split(/\r?\n/);
      var meshes = [buildMesh()];
      var parser = this;
      lines.forEach(function (line) {
        parser.parseInstruction(line, meshes);
      });
      if (meshes[meshes.length - 1].vertices.length === 0) {
        meshes.splice(meshes.length - 1, 1);
      }
      return meshes;
    },
    /**
     * Parse a .dat file, generating a javascript mesh object
     */
    parseFile: function (filename) {
      var data = getDATFile(filename);
      return this.parse(filename, data);
    },
    /**
     * Convert the abstracted mesh data into .obj data
     */
    toOBJ: function (meshData, scale) {
      // var administration
      scale = scale || 0.05;
      var nl = "\n";
      var empty = [""];
      var obj = ["# LDraw .dat conversion for superawesomeness on the web"];
      var vertices = ["# vertices:"];
      var faces = ["# faces:"];
      var offset = 1;
      var precision = 6;
      // number formatting helper function
      var nf = (function (precision) { return function (v) {
        var p = Math.pow(10, precision);
        return ((v * p) | 0) / p;
      }; }(precision));
      // conversion function
      var convert = function (mesh) {
        if (mesh.vertices.length === 0) {
          return;
        }
        // push all vertices
        vertices = vertices.concat(["", "# mesh " + mesh.meshId]);
        mesh.vertices.forEach(function (v) {
          vertices.push("v " + nf(v.x * scale) + " " + nf(v.y * scale) + " " + nf(v.z * scale));
        });
        // construct face list
        faces.push("g mesh" + mesh.meshId);
        faces.push("usemtl color" + mesh.vertices[0].color);
        faces.push("s 1");
        faces.push("");
        mesh.faces.forEach(function (f) {
          faces.push("f " + (f.v1 + offset) + "// " + (f.v2 + offset) + "// " + (f.v3 + offset) + "//");
        });
        offset += mesh.vertices.length;
        faces.push("");
      };
      // convert all mes data.
      meshData.forEach(convert);
      // source format and return
      return obj.concat(empty).concat(vertices).concat(empty).concat(faces).join(nl);
    }
  };

  return new Parser();
}());
