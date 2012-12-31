/**
 * LDraw color codes
 */
var  MATColors = (function(){
    var MATColors = {
      standard: {
      // common
      "Main Colour"             : {code:  16, value: "#7F7F7F", edge: "#333333"},
      "Edge Colour"             : {code:  24, value: "#7F7F7F", edge: "#333333"},
      // the rest
      "Black"                   : {code:  0 , value: "#05131D", edge: "#3F474C"},
      "Blue"                    : {code:  1 , value: "#0055BF", edge: "#0055C4"},
      "Green"                   : {code:  2 , value: "#237841", edge: "#238841"},
      "Dark Turquoise"          : {code:  3 , value: "#008F9B", edge: "#008FAB"},
      "Red"                     : {code:  4 , value: "#C91A09", edge: "#D51A09"},
      "Dark Pink"               : {code:  5 , value: "#C870A0", edge: "#C26293"},
      "Brown"                   : {code:  6 , value: "#583927", edge: "#412D15"},
      "Light Gray"              : {code:  7 , value: "#9BA19D", edge: "#757B7C"},
      "Dark Gray"               : {code:  8 , value: "#6D6E5C", edge: "#4D4B43"},
      "Light Blue"              : {code:  9 , value: "#B4D2E3", edge: "#B4D2F3"},
      "Bright Green"            : {code:  10, value: "#4B9F4A", edge: "#4BA94A"},
      "Light Turquoise"         : {code:  11, value: "#55A5AF", edge: "#55A5BF"},
      "Salmon"                  : {code:  12, value: "#F2705E", edge: "#F2806E"},
      "Pink"                    : {code:  13, value: "#FC97AC", edge: "#FC97AC"},
      "Yellow"                  : {code:  14, value: "#F2CD37", edge: "#E8C51F"},
      "White"                   : {code:  15, value: "#FFFFFF", edge: "#A9A5A9"},
      "Light Green"             : {code:  17, value: "#C2DAB8", edge: "#C2EAC8"},
      "Light Yellow"            : {code:  18, value: "#FBE696", edge: "#FEE9A9"},
      "Tan"                     : {code:  19, value: "#E4CD9E", edge: "#E2CBA0"},
      "Light Violet"            : {code:  20, value: "#C9CAE2", edge: "#CACAEE"},
      "Purple"                  : {code:  22, value: "#81007B", edge: "#91008B"},
      "Dark Blue Violet"        : {code:  23, value: "#2032B0", edge: "#2032C0"},
      "Orange"                  : {code:  25, value: "#FE8A18", edge: "#FF8820"},
      "Magenta"                 : {code:  26, value: "#923978", edge: "#923988"},
      "Lime"                    : {code:  27, value: "#BBE90B", edge: "#C0ED00"},
      "Dark Tan"                : {code:  28, value: "#958A73", edge: "#756A53"},
      "Bright Pink"             : {code:  29, value: "#E4ADC8", edge: "#F4ADC8"},
      "Very Light Orange"       : {code:  68, value: "#F3CF9B", edge: "#F9DFAB"},
      "Light Purple"            : {code:  69, value: "#CD6298", edge: "#DD72A8"},
      "Reddish Brown"           : {code:  70, value: "#582A12", edge: "#391A08"},
      "Light Bluish Gray"       : {code:  71, value: "#A0A5A9", edge: "#777A85"},
      "Dark Bluish Gray"        : {code:  72, value: "#6C6E68", edge: "#484A4B"},
      "Medium Blue"             : {code:  73, value: "#5A93DB", edge: "#5A95DE"},
      "Medium Green"            : {code:  74, value: "#73DCA1", edge: "#A1D390"},
      "Light Pink"              : {code:  77, value: "#FECCCF", edge: "#FFCED2"},
      "Light Flesh"             : {code:  78, value: "#F6D7B3", edge: "#F8D9B5"},
      "Medium Dark Flesh"       : {code:  84, value: "#CC702A", edge: "#CE732C"},
      "Dark Purple"             : {code:  85, value: "#3F3691", edge: "#4238A4"},
      "Dark Flesh"              : {code:  86, value: "#7C503A", edge: "#7E533C"},
      "Blue Violet"             : {code:  89, value: "#4C61DB", edge: "#4F61E6"},
      "Flesh"                   : {code:  92, value: "#D09168", edge: "#D3946A"},
      "Light Salmon"            : {code: 100, value: "#FEBABD", edge: "#FFBCBF"},
      "Violet"                  : {code: 110, value: "#4354A3", edge: "#4354B3"},
      "Medium Violet"           : {code: 112, value: "#6874CA", edge: "#6A78D4"},
      "Medium Lime"             : {code: 115, value: "#C7D23C", edge: "#C9D43E"},
      "Aqua"                    : {code: 118, value: "#B3D7D1", edge: "#B4DAD3"},
      "Light Lime"              : {code: 120, value: "#D9E4A7", edge: "#DAE9A9"},
      "Light Orange"            : {code: 125, value: "#F9BA61", edge: "#FDBF5D"},
      "Very Light Bluish Gray"  : {code: 151, value: "#E6E3E0", edge: "#E9E6E5"},
      "Bright Light Orange"     : {code: 191, value: "#F8BB3D", edge: "#F8BB3D"},
      "Bright Light Blue"       : {code: 212, value: "#9FC3E9", edge: "#A0C5F0"},
      "Rust"                    : {code: 216, value: "#B31004", edge: "#B91205"},
      "Bright Light Yellow"     : {code: 226, value: "#FFF03A", edge: "#FFF13B"},
      "Sky Blue"                : {code: 232, value: "#7DBFDD", edge: "#7DC4DD"},
      "Dark Blue"               : {code: 272, value: "#0A3463", edge: "#09326F"},
      "Dark Green"              : {code: 288, value: "#184632", edge: "#184A25"},
      "Dark Brown"              : {code: 308, value: "#352100", edge: "#3C2807"},
      "Maersk Blue"             : {code: 313, value: "#3592C3", edge: "#3592CB"},
      "Dark Red"                : {code: 320, value: "#720E0F", edge: "#790E0F"},
      "Dark Azure"              : {code: 321, value: "#078BC9", edge: "#088DCD"},
      "Light Aqua"              : {code: 323, value: "#ADC3C0", edge: "#AFC5C5"},
      "Sand Red"                : {code: 335, value: "#D67572", edge: "#DA7876"},
      "Medium Dark Pink"        : {code: 351, value: "#F785B1", edge: "#FB89B8"},
      "Earth Orange"            : {code: 366, value: "#FA9C1C", edge: "#FEA11E"},
      "Sand Purple"             : {code: 373, value: "#845E84", edge: "#8A648B"},
      "Sand Green"              : {code: 378, value: "#A0BCAC", edge: "#A0BFAC"},
      "Sand Blue"               : {code: 379, value: "#6074A1", edge: "#6076A9"},
      "Fabuland Brown"          : {code: 450, value: "#B67B50", edge: "#B77B52"},
      "Medium Orange"           : {code: 462, value: "#FFA70B", edge: "#FFAA0F"},
      "Dark Orange"             : {code: 484, value: "#A95500", edge: "#AD5906"},
      "Very Light Gray"         : {code: 503, value: "#E6E3DA", edge: "#E9E6DD"}
    },
    transparent: {
      // common
      "Trans Black IR Lens"     : {code: 32, value: "#000000", edge: "#05131D", alpha: 128},
      // the rest
      "Trans Clear"             : {code: 47, value: "#FCFCFC", edge: "#A9ABB7", alpha: 128},
      "Trans Black"             : {code: 40, value: "#635F52", edge: "#171316", alpha: 128},
      "Trans Red"               : {code: 36, value: "#C91A09", edge: "#D91A09", alpha: 128},
      "Trans Neon Orange"       : {code: 38, value: "#FF800D", edge: "#FF7D10", alpha: 128},
      "Trans Orange"            : {code: 57, value: "#F08F1C", edge: "#ED8B1A", alpha: 128},
      "Trans Neon Yellow"       : {code: 54, value: "#DAB000", edge: "#F5CD2F", alpha: 128},
      "Trans Yellow"            : {code: 46, value: "#F5CD2F", edge: "#B49819", alpha: 128},
      "Trans Neon Green"        : {code: 42, value: "#C0FF00", edge: "#84C300", alpha: 128},
      "Trans Bright Green"      : {code: 35, value: "#D9E4A7", edge: "#9DA86B", alpha: 128},
      "Trans Green"             : {code: 34, value: "#84B68D", edge: "#237841", alpha: 128},
      "Trans Dark Blue"         : {code: 33, value: "#0020A0", edge: "#000064", alpha: 128},
      "Trans Medium Blue"       : {code: 41, value: "#559AB7", edge: "#196273", alpha: 128},
      "Trans Light Blue"        : {code: 43, value: "#AEE9EF", edge: "#72B3B8", alpha: 128},
      "Trans Very Light Blue"   : {code: 39, value: "#C1DFF0", edge: "#85A3B4", alpha: 128},
      "Trans Light Purple"      : {code: 44, value: "#96709F", edge: "#5A3463", alpha: 128},
      "Trans Purple"            : {code: 52, value: "#A5A5CB", edge: "#6D6E5C", alpha: 128},
      "Trans Dark Pink"         : {code: 37, value: "#DF6695", edge: "#A32A59", alpha: 128},
      "Trans Pink"              : {code: 45, value: "#FC97AC", edge: "#B8718C", alpha: 128}
    },
    chrome: {
      "Chrome Gold"             : {code: 334, value: "#BBA53D", edge: "#C2AB44"},
      "Chrome Silver"           : {code: 383, value: "#E0E0E0", edge: "#A4A4A4"},
      "Chrome Antique Brass"    : {code:  60, value: "#645A4C", edge: "#281E10"},
      "Chrome Black"            : {code:  64, value: "#1B2A34", edge: "#000000"},
      "Chrome Blue"             : {code:  61, value: "#6C96BF", edge: "#202A68"},
      "Chrome Green"            : {code:  62, value: "#3CB371", edge: "#007735"},
      "Chrome Pink"             : {code:  63, value: "#AA4D8E", edge: "#6E1152"}
    },
    pearl: {
      "Pearl White"             : {code: 183, value: "#F2F3F2", edge: "#FFFFFF"},
      "Pearl Very Light Grey"   : {code: 150, value: "#BBBDBC", edge: "#C3C7C5"},
      "Pearl Light Gray"        : {code: 135, value: "#9CA3A8", edge: "#6C7378"},
      "Flat Silver"             : {code: 179, value: "#898788", edge: "#696768"},
      "Pearl Dark Gray"         : {code: 148, value: "#575857", edge: "#424342"},
      "Metal Blue"              : {code: 137, value: "#5677BA", edge: "#6F8ED4"},
      "Pearl Light Gold"        : {code: 142, value: "#DCBE61", edge: "#DFBF64"},
      "Pearl Gold"              : {code: 297, value: "#CC9C2B", edge: "#DDAE36"},
      "Flat Dark Gold"          : {code: 178, value: "#B4883E", edge: "#B1843A"},
      "Copper"                  : {code: 134, value: "#AB6038", edge: "#AF633A"}
    },
    metalic: {
      // "common"
      "Electric Contact Alloy"  : {code: 494, value: "#D0D0D0", edge: "#6E6E6E"},
      "Electric Contact Copper" : {code: 495, value: "#AE7A59", edge: "#723E1D"},
      // the rest
      "Metallic Silver"         : {code: 80, value: "#A5A9B4", edge: "#A6AAB8"},
      "Metallic Green"          : {code: 81, value: "#899B5F", edge: "#8EA15F"},
      "Metallic Gold"           : {code: 82, value: "#DBAC34", edge: "#EBBC44"},
      "Metallic Black"          : {code: 83, value: "#1A2831", edge: "#000000"},
      "Metallic Dark Gray"      : {code: 87, value: "#6D6E5C", edge: "#5D5B53"}
    },
    milky: {
      "Milky White"             : {code:  79, value: "#FFFFFF", edge: "#C3C3C3", alpha: 224},
      "Glow In Dark Opaque"     : {code:  21, value: "#E0FFB0", edge: "#A4C374", alpha: 250, luminance: 15},
      "Glow In Dark Trans"      : {code: 294, value: "#BDC6AD", edge: "#CFDBBF", alpha: 128, luminance: 15}
    },
    glitter: {
      "Glitter Trans Dark Pink" : {code: 114, value: "#DF6695", edge: "#9A2A66", alpha: 128, glitter: {value: "#923978", fraction: 0.17, vfraction: 0.2, size: 1}},
      "Glitter Trans Clear"     : {code: 117, value: "#FFFFFF", edge: "#C3C3C3", alpha: 128, glitter: {value: "#FFFFFF", fraction: 0.08, vfraction: 0.1, size: 1}},
      "Glitter Trans Purple"    : {code: 129, value: "#640061", edge: "#280025", alpha: 128, glitter: {value: "#8C00FF", fraction: 0.30, vfraction: 0.4, size: 1}}
    },
    speckle: {
      "Speckle Black Silver"            : {code: 132, value: "#000000", edge: "#595959", speckle: {value: "#595959", fraction: 0.4, minsize: 1, maxsize: 3}},
      "Speckle Black Gold"              : {code: 133, value: "#000000", edge: "#DBAC34", speckle: {value: "#AE7A59", fraction: 0.4, minsize: 1, maxsize: 3}},
      "Speckle Black Copper"            : {code:  75, value: "#000000", edge: "#595959", speckle: {value: "#AE7A59", fraction: 0.4, minsize: 1, maxsize: 3}},
      "Speckle Dark Bluish Gray Silver" : {code:  76, value: "#635F61", edge: "#595959", speckle: {value: "#595959", fraction: 0.4, minsize: 1, maxsize: 3}}
    },
    rubber: {
      "Rubber Yellow"           : {code:  65, value: "#F5CD2F", edge: "#B19705"},
      "Rubber Trans Yellow"     : {code:  66, value: "#CAB000", edge: "#AD9600", alpha: 128},
      "Rubber Trans Clear"      : {code:  67, value: "#FFFFFF", edge: "#C3C3C3", alpha: 128},
      "Rubber Black"            : {code: 256, value: "#212121", edge: "#595959"},
      "Rubber Blue"             : {code: 273, value: "#0033B2", edge: "#001392"},
      "Rubber Red"              : {code: 324, value: "#C40026", edge: "#8A0000"},
      "Rubber Light Gray"       : {code: 375, value: "#C1C2C1", edge: "#696969"},
      "Rubber Dark Blue"        : {code: 406, value: "#001D68", edge: "#000A48"},
      "Rubber Purple"           : {code: 449, value: "#81007B", edge: "#570052"},
      "Rubber Lime"             : {code: 490, value: "#D7F000", edge: "#639300"},
      "Rubber Light Bluish Gray": {code: 496, value: "#A3A2A4", edge: "#787878"},
      "Rubber Flat Silver"      : {code: 504, value: "#898788", edge: "#494748"},
      "Rubber White"            : {code: 511, value: "#FAFAFA", edge: "#676767"}
    }
  };

  var red = function(hexString) {
    hexString = hexString.substring(1,3);
    dec = parseInt(hexString,16) / 255;
    return ((dec*1000000)|0)/1000000;
  };
  var green = function(hexString) {
    hexString = hexString.substring(3,5);
    dec = parseInt(hexString,16) / 255;
    return ((dec*1000000)|0)/1000000;
  };
  var blue = function(hexString) {
    hexString = hexString.substring(5,7);
    dec = parseInt(hexString,16) / 255;
    return ((dec*1000000)|0)/1000000;
  };

  // fill the lookup table for color code -> color object, and the .mtl definition for use with .obj representations
  var types = ["standard", "transparent", "chrome", "pearl", "metalic", "milky", "glitter", "speckle", "rubber"];
  var color, colorName, lookup = [], mtl = [];
  types.forEach(function(type){
    var list = MATColors[type];
    for(colorName in list) {
      if(Object.hasOwnProperty(list, colorName)) continue;
      color = list[colorName];
      color.name = colorName;
      lookup[color.code] = color;

      mtl.push("newmtl color"+color.code);
      mtl.push("d 1.0");
      mtl.push("Kd "+red(color.value)+" "+green(color.value)+" "+blue(color.value));
      mtl.push("");
    }
  });
  MATColors.lookup = lookup;
  MATColors.mtl = mtl.join("\n");

  return MATColors;
}());
