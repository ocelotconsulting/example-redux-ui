const fs = require('fs')

const defaultBabelConfig = JSON.parse(fs.readFileSync('.babelrc', {encoding: 'utf8'}))

// webpack 2 resolves es2015 imports
const presets = [
  ['env', {modules: false}]
].concat(defaultBabelConfig.presets.filter(v => v !== 'env'))

const babelConfig = Object.assign({}, defaultBabelConfig, {babelrc: false, presets})

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  mode: process.env.WEBPACK_MODE || 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelConfig
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
}
