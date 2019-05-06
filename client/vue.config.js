const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../core/public'),
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000'
      }
    }
  }
}