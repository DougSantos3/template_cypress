const path = require('path')

module.exports = (on, config) => {
  on('file:preprocessor', require('@cypress/webpack-preprocessor'))
}

const webpackPreprocessor = require('@cypress/webpack-preprocessor')

const options = {
  webpackOptions: {
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    }
  }
}

module.exports = (on) => {
  on('file:preprocessor', webpackPreprocessor(options))
}