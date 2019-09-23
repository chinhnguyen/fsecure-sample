const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (_, argv) => {
  return {
    entry: [
      '@babel/polyfill',
      './src/index.js'
    ],
    module: {
      rules: [
        {
          parser: {
            amd: false
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: false
              }
            }
          ]
        },
        { 
          test: /\.s?css$/,           
          loader: "style-loader!css-loader!sass-loader"
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([
        'dist'
      ]),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new FaviconsWebpackPlugin('./images/favicon.png'),
      new CopyWebpackPlugin([
        { from: 'images/', to: 'images/' },
      ]),
      new LodashModuleReplacementPlugin({
        'collections': true,
        'paths': true
      }),
      new webpack.DefinePlugin({
        
      })
    ]
  }
}
