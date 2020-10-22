const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // 编译打包的模式 development(不压缩 可以看到注释和代码) production(压缩 看不到注释和代码) none
  mode: "development",
  // 入口 entry
  entry: './src/main.js',

  // 出口 output
  output: {
    // 出口路径(编译打包的js文件输出到哪里)
    path: path.resolve(__dirname, 'dist'),
    // 输出文件的名称(文件名叫啥)
    filename: "bundle.js"
  },
  plugins: [
    // dist就是你要清理哪个文件夹
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '自动生成html111'
    })
  ]

}