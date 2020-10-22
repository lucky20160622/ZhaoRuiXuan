// 引入Express框架
const express = require('express');
const home = require('./routes/home')
const music = require('./routes/music')
// 使用框架创建web服务器
const app = express();
// 当客户端以get方式访问/路由时
app.use('/home', home)
app.use('/music', music);





// 程序监听3000端口
app.listen(3000);
