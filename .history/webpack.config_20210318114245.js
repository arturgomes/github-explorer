const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugin: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }

}