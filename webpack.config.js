const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Development',
      template: path.resolve(__dirname,'dist/index.html'),
    }),
  ],

  devServer: {
    static: './dist',
    port: '8080',
    hot: true,
  },

  // optimization: {
  //   runtimeChunk: 'single',
  // },
};