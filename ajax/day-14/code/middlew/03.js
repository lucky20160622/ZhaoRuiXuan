// 引入Express框架
const express = require('express');
// 使用框架创建web服务器
const app = express();
// 当客户端以get方式访问/路由时

// app.use((req, res, next) => {
//   res.send("网站正在维护中...")
// })
// 如果未登录，您还没有登陆了，不能访问
app.use('/admin', (req, res, next) => {
  // 用户登录标识
  let isLogin = false;
  if (isLogin) {
    next();
  } else {
    res.send("您还没有登录，不能访问 /admin 页面")
  }
})
// 如果用户登录了，那么您已经登录
app.get('/admin', (req, res) => {
  res.send("您已经登录，可以访问当前页面")
})


// 如果用户在地址栏中乱写了一个地址 那么应该给人返回404页面
app.use((req, res, next) => {
  res.status(404).send(`
  <img src="https://static.zcool.cn/git_z/z/images/error404.png">
  `)
})
// 程序监听3000端口
app.listen(3000);
