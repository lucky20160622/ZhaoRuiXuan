// 引入Express框架
const express = require('express');
// 使用框架创建web服务器
const app = express();
// 当客户端以get方式访问/路由时

app.get('/', (req, res) => {
  res.send("你好")
})

app.get('/about/:id/:name/:age', (req, res) => {
  res.send(req.params)
})


// 程序监听3000端口
app.listen(3000);
