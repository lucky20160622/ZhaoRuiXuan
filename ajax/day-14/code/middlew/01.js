// 引入Express框架
const express = require('express');
// 使用框架创建web服务器
const app = express();
// 当客户端以get方式访问/路由时


// 中间件是匹配到了就停止匹配
app.get('/request', (req, res, next) => {
  req.name = "zhangsan";
  console.log('111');
  // 当匹配到了/request的时候，我们就让数据流向下一个中间件
  next();
})


app.get('/request', (req, res) => {
  console.log('22222');
  res.send(req.name);
})


// 程序监听3000端口
app.listen(3000);
