var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),   // 不能是“/dist”，因为“/dist”会被认为是根目录，所以报错：没有权限
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
// __dirname是node.js的一个全局变量，它指向当前执行脚本所在的目录