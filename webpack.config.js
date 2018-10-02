const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: `gargula.js`,
    library: `gargula`,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ascii/,
        use: 'raw-loader'
      }
    ]
  }
}
