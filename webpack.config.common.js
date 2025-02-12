const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = {
  entry: {
    main: resolve('src/index.tsx')
  },
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].[contenthash].bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], 
    alias: {
      '@components': resolve('src/components'),
      '@constants': resolve('src/constants'),
      '@http': resolve('src/http'),
      '@img': resolve('src/assets/img'),
      '@src': resolve('src'),
      '@store': resolve('src/store'),
      '@utils': resolve('src/utils')
    },
    modules: [
        path.join(__dirname, 'node_modules')
    ]
}
}