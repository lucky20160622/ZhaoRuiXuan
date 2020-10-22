// 1.导包
const express = require('express');
const path = require('path');
const db = require('./data/db.json');
const fs = require('fs');
// 2.设置包
// 2.1 创建服务器
const app = express();
// 2.2 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置POST请求数据获取中间件
app.use(express.urlencoded({ extended: false }));
// 3.处理请求 返回响应

// 3.1 处理查找留言请求
app.get('/findGuest', (req, res) => {
  res.status(200).send(db);
})

// 3.2 处理添加留言的请求
app.post('/addGuest', (req, res) => {
  // console.log(req.body);
  // 3.2.1 把前端获取的数据处理成db.json需要的格式
  let reqData = {
    name: req.body.name,
    content: req.body.content,
    created: new Date().toLocaleString()
  }
  // console.log(reqData);
  // 3.2.2 把数据添加到db中去
  db.unshift(reqData);

  // 3.2.3 把弄好的数据写入到db.json
  fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), (err) => {
    if (err != null) {
      console.log(err);
    }

    // status 200代表的是浏览器的状态码
    res.status(200).json({
      // 返回给前端的状态数据
      code: 200,
      // 返回给前端的状态数据对应的信息
      msg: "数据添加成功"
    })
  })
  // 3.2.4 把 数据添加成功
})



// 4.指定端口 启动服务
app.listen(3000, () => {
  console.log("请打开 http://localhost:3000")
})