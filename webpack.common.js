const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
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