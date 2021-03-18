const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: path.join(__dirname, 'dist', 'index.js'),
}