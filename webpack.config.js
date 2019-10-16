
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = true;
module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.s?css$/
      },
      {
        use: 'graphql-tag/loader',
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Components: path.resolve(__dirname, 'client/components'),
      Mutations: path.resolve(__dirname, 'client/mutations/'),
      Queries: path.resolve(__dirname, 'client/queries/'),
      Reducers: path.resolve(__dirname, 'client/reducers/'),
      State: path.resolve(__dirname, 'client/state/')
    }
  }
};
