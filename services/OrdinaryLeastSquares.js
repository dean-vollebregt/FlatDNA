const MLR = require('ml-regression-multivariate-linear');


const x = [[1, 2, 7], [1, 1, 5], [1, 1, 5], [0, 1, 3], [0, 4, 7], [1, 1, 4], [0, 2, 3], [0, 1, 5], [0, 1, 4], [0, 1, 3], [0, 2, 7], [1, 1 ,3]];
const y = [[159], [160], [175], [200], [160], [130], [152], [160], [100], [140], [159], [220]];

const mlr = new MLR(x, y);

console.log(mlr.weights);