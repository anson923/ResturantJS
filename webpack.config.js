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
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/i,
        type: 'asset/resource',
      }
    ]
  },

  devServer: {
    static: '.dist',
    watchFiles: ["src/*.html"],
    compress: true,
    port: 8080,
    hot:true,
    open: true,
  },

  // optimization: {
  //   runtimeChunk: 'single',
  // },
};