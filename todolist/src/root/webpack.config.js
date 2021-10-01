var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname ,"src",'root'),
    filename: '_bundle.js'
  }
};