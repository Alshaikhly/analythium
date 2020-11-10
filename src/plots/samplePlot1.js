const x = [
  {
    "gender": "Female",
    "agegr": "40-59",
    "ethn": "Non Hispanic White",
    "year": [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    "conc": [382.6868, 350.8324, 321.6295, 294.8574, 270.3138, 247.8132, 227.1855, 208.2749, 190.9383, 175.0448, 160.4743, 147.1166, 134.8708, 123.6443, 113.3523, 103.917, 95.267, 87.3371, 80.0673, 73.4026, 67.2926],
    "lower": [98.5895, 90.5149, 83.0828, 76.2435, 69.9514, 64.1639, 58.8418, 53.9488, 49.4514, 45.3186, 41.5216, 38.0342, 34.8317, 31.8916, 29.1931, 26.7169, 24.4452, 22.3617, 20.4512, 18.6998, 17.0946],
    "upper": [1485.4435, 1359.8134, 1245.0904, 1140.3051, 1044.5762, 957.1019, 877.1531, 804.0663, 737.2377, 676.1178, 620.2066, 569.0486, 522.2293, 479.3708, 440.1293, 404.1913, 371.2712, 341.1087, 313.4664, 288.128, 264.896],
    "data": {
      "individuals": {
        "year": [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004],
        "conc": [538, 226, 509, 507, 115.1, 176, 598, 277, 279, 311, 464, 94, 511, 369, 519, 347, 1010, 273, 301, 246, 319, 265, 101.8, 422, 218, 300, 196, 289, 674, 84.1, 250, 1080, 464, 517, 384, 273, 109.7, 206, 198, 96.9, 182, 800, 135.1, 581, 3060, 246, 350, 624, 166, 508, 185, 617, 257, 91.3, 130.4, 99.8, 236, 236, 403, 183, 91.9, 85.1, 281, 78.6, 261, 230, 124.8, 512, 903, 603, 923, 321, 764, 2770, 118.7, 323, 998, 598, 261, 115, 345, 1260, 259, 293, 567, 1780, 175, 642, 616, 317, 1180, 1400, 504, 173.2, 223.6, 273, 303, 144, 541, 171, 275, 679, 395, 886, 639, 297, 4310, 526, 333, 496, 160.4, 453, 274, 596, 251, 647, 158.9, 1060, 375, 292, 541, 433, 574, 544, 573, 369, 458, 156, 300, 373, 326, 516, 352, 503, 140.6, 658, 158, 729, 643, 647, 474, 481, 668, 533, 509, 972, 1030, 386, 219.8, 296, 574, 594, 295, 546, 392, 814, 663, 256, 183.6, 405, 287, 317, 1550, 414, 259, 270, 283, 77.6, 238, 183, 310, 464, 333, 331, 403, 269, 647, 111, 730, 247, 93, 117, 520, 180, 371, 231, 596, 238, 60.7, 74.2, 210, 238, 134, 182, 326, 485, 115, 424, 358, 437, 259, 155, 200, 411, 591, 219, 243, 127, 110, 585, 175, 951, 658, 321, 213, 265, 523, 640, 411, 219, 173, 295, 421, 233, 269, 192, 208, 193, 164, 235, 241, 241, 223, 272, 133, 140, 260, 146, 290, 808, 352, 652, 492, 214, 357, 70.2, 259, 279, 142, 483, 78.6, 168, 613, 170]
      },
      "pools": {
        "year": [2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010],
        "conc": [364, 209, 344, 220, 239, 403, 430, 279, 353, 231, 261, 236, 409, 183, 341, 314, 249, 199, 211, 139, 254, 169, 264, 175, 143, 195, 153, 273, 178, 202, 262.8, 207.5, 241.2, 188.7, 129.4, 216, 199.9, 133.1, 225.4, 174.8, 159.6, 185.7, 201.8, 183.1, 165.3, 236.4, 207.7]
      }
    }
  }
];

// const TESTER = document.getElementById('plot1');
// Plotly.newPlot( TESTER, [{
// x: x[0].year,
// y: x[0].conc }] );

var trace1 = {
  x: x[0].year,
  y: x[0].lower,
  line: {width: 0},
  marker: {color: "444"},
  mode: "lines",
  name: "Lower Bound",
  type: "scatter"
};

var trace2 = {
  x: x[0].year,
  y: x[0].conc,
  fill: "tonexty",
  fillcolor: "rgba(68, 68, 68, 0.3)",
  line: {color: "rgb(31, 119, 180)"},
  mode: "lines",
  name: "Concentration",
  type: "scatter"
};

var trace3 = {
  x: x[0].year,
  y: x[0].upper,
  fill: "tonexty",
  fillcolor: "rgba(68, 68, 68, 0.3)",
  line: {width: 0},
  marker: {color: "444"},
  mode: "lines",
  name: "Upper Bound",
  type: "scatter"
};

var trace4 = {
  x: x[0].data.individuals.year,
  y: x[0].data.individuals.conc,
  fillcolor: "rgba(255, 0, 0, 0.3)",
  mode: "markers",
  name: "Individuals",
  type: "scatter"
};

var trace5 = {
  x: x[0].data.pools.year,
  y: x[0].data.pools.conc,
  fillcolor: "rgba(0, 0, 255, 0.3)",
  mode: "markers",
  name: "Pools",
  type: "scatter"
};

var data = [trace1, trace2, trace3, trace4, trace5];
var layout = {
  showlegend: false,
  title: x[0].gender + ", " + x[0].agegr + " years old, " + x[0].ethn,
  yaxis: {title: "Concentration"}
};

// Plotly.newPlot('plot2', data, layout, {displaylogo: false});

export default {
  display: 'plot2',
  data: {
    data: data,
    layout: layout
  }
}