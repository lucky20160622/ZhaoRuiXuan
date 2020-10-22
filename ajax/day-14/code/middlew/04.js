// 引入Express框架
const express = require('express');
// 使用框架创建web服务器
const app = express();
const fs = require('fs');
// 当客户端以get方式访问/路由时
app.get('/index', (req, res, next) => {
  // 有一个内置对象 错误对象Error
  // 抛异常(开发时异常 尽量自己解决 运行时异常 抛)
  // throw new Error("程序发生未知错误");
  fs.readFile('./01.txt', 'utf8', (err, result) => {
    if (err != null) {
      next(err);
    } else {
      res.send(result);
    }
  })
})


// app.use就会拦截所有的请求
app.use((err, req, res, next) => {
  // console.log(err.message);
  res.status(500).send(err.message);
})





// 程序监听3000端口
app.listen(3000);
