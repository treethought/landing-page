const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'index.js'),
  globalStyle: path.join(__dirname, 'app', 'global.scss')
}

module.exports = {
  entry: './index.js',
  output: { filename: './bundle.js' },
  devServer: {
    port: 9966,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-export-extensions'],
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  }
}
