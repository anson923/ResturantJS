const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.resolve(__dirname,'src/index.html'),
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist'),
    clean: true,
  },
};