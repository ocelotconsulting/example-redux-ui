const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const devConfig = require('./webpack.config')

const prodConfig = {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({sourceMap: true})
  ]
}

module.exports = Object.assign({}, devConfig, prodConfig)
