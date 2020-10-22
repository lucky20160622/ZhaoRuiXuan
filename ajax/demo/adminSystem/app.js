// 1.导入包
// 1.1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
// 1.3 引入登录页面路由
const indexRouter = require('./routes/indexRouter');
// 1.4 引入关于用户的路由
const userRouter = require('./routes/userRouter');
// 1.5 引入关于文章的路由
const articleRouter = require('./routes/articleRouter');
// 2.设置包
// 2.1 使用express方法创建Web服务
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 2.3 模板设置
// 用的模板引擎是art-template
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


// 3.处理请求(挂载路由)
app.use(indexRouter);
app.use('/user', userRouter);
app.use('/article', articleRouter);



// 4.指定端口启动服务
app.listen(3000, () => {
  console.log("服务器已启动,请打开 http://localhost:3000");
})