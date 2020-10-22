const path = require('path');

module.exports = {
  // Chosen mode tells webpack to use its built-in optimizations accordingly 选择的模式告诉webpack相应地使用其内置优化。
  mode: "production", // "production" | "development" | "none",
  // 这里应用程序开始执行 webpack开始打包
  // entry: "./app/entry", // string | object | array
  // entry: ["./app/entry1", "./app/entry2"],
  entry: {
    a: "./app/entry-a",
    b: ["./app/entry-b1", "./app/entry-b2"]
  },
  // webpack 如何输出结果的相关选项
  output: {

    // 所有输出文件的目标路径,必须是绝对路径(使用Node.js的path模块)
    path: path.resolve(__dirname, 'dist'),

    // 入口分块(entry chunk)的文件名模板()
    filename: "bundle.js", // string
    // filename: "[name].js", // 用于多个入口点(entry point)
    // filename: "[chunkhash].js", // 用于长效缓存

    // 输出解析文件的目录, url相对于HTML页面
    publicPath: "/assets/", // string

    // 导出库(exported library)的名称
    library: "MyLibrary", // string

    // 导出库(exported libary)的类型
    libraryTarget: "umd", // 通用模块定义

    // 在生成代码时,引入相关的模块|导出|请求等有帮助的路径信息
    pathinfo: true, // boolean

    // 附加分块(additional chunk)的文件名模板
    chunkFilename: "[id].js",
    chunkFilename: "[chunkhash].js", // 长效缓存(/guides/caching)

    // 用于加载分块的JSONP函数名
    jsonpFunction: "myWebpackJsonp", // string

    // source map 位置 的文件名模板
    sourceMapFilename: "[file].map", // string
    // sourceMapFilename: "sourcemaps/[file].map", // string

    // devtool中模块 的文件名模板
    devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string

    // devtool中模块 的文件名模板(用于冲突)
    devtoolFullbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]",// string

    // 在UMD库中使用命名的AMD模块
    umdNamedDefine: true, // boolean

    // 指定运行时如何发出跨域请求问题
    crossOriginLoading: "use-credentials", // 枚举
    // crossOriginLoading: "anonymous",
    // crossOriginLoading: false,

  },

  // 关于模块配置
  module: {
    // 模块配置规则
    rules: [
      // babel-loader 处理 ES6语法
      {
        // 匹配条件,接收一个正则表达式或字符串
        test: /\.jsx?$/,
        // 必须匹配选项
        include: [
          path.resolve(__dirname, "app")
        ],
        // 必不匹配选项(优于test和include)
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // 最佳实践:
        // 1.只在test和文件名匹配 中使用正则表达式
        // 2.在 include 和 exclude中使用绝对路径数组
        // 3.尽量避免exclude,更倾向于使用include

        // issuer 条件 (导入源)
        issuer: { test, include, exclude },

        // 标识应用这些规则,即使规则覆盖(高级选项)
        enforce: "pre",
        enforce: "post",

        // 应该应用的loader,它相对于上下文解析
        loader: "babel-loader",

        // loader的可选项
        options: {
          presets: ["es2015"]
        }
      },

      // html-loader 处理 HTML文件
      {
        test: /\.html$/,// 可以是正则
        //test: "\.html$",// 也可以是字符串
        use: [
          // 应用多个loader和选项
          "htmllint-loader", {
            loader: "html-loader",
            options: {}
          }
        ]
      },

      // 只使用这些嵌套规则之一
      { oneOf: [/** rules */] },
      // 使用所有的嵌套规则
      { rules: [/**条件 */] },
      // 仅当所有条件都匹配时才匹配
      { resource: { and: [/** 条件 */] } },

      //  任意条件匹配时 匹配(默认为数组)
      { resource: { or: [ /* 条件 */] } },
      { resource: [ /* 条件 */] },

      // 条件不匹配时匹配
      { resource: { not: /* 条件 */'本来这里没有' } },



    ],
    // 不解析这里的模块
    noParse: [/special-library\.js$/]
  },
  // 解析模块请求的选项(不适用于对loader解析)
  resolve: {
    // 用于查找模块的目录
    modules: ["node_modules", path.resolve(__dirname, "app")],
    // 使用的扩展名
    extensions: [".js", ".json", ".jsx", ".css"],

    // 模块别名列表
    alias: [
      {
        // 旧的请求
        name: "module",

        // 新的

        请求
        alias: "new-module",

        // 如果为true，只有"module"是别名
        // 如果为false，"module/inner/path"也是别名
        onlyModule: true
      }
    ]
  }
}

