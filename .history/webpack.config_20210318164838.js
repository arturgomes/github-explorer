const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'develpment';

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
  })],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }

}