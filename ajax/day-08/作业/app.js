// 1.导入包
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./data/db.json')
// 2.设置包
// 2.1 使用express()方法来创建服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 2.3 设置post请求参数获取中间件
// false 可以字符串或数组 如果是true则为任何数据
app.use(express.urlencoded({ extended: false }));
// 3.接受浏览器请求并给予响应

// 3.1 添加学生信息接口
app.post('/addInfo', (req, res) => {
  // console.log(req.body);
  // 3.1.1 构造需要的数据
  let userInfo = {
    id: +new Date(),
    name: req.body.username,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
    hobbies: req.body.hobbies,
    school: req.body.school,
    date: req.body.date
  };
  // 3.1.2 判断一下数据是否全都没问题
  let userArr = [];
  if (userInfo.name && userInfo.age && userInfo.gender && userInfo.email && userInfo.hobbies && userInfo.school && userInfo.date) {
    // 3.1.3 把数据写入data.json
    userArr.push(userInfo);
  }
  // console.log(userArr);
  // 3.1.4 把数据写入到data.json
  fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(userArr), (err) => {
    if (err != null) {
      console.log(err);
      res.status(500).send("服务器端错误");
      return;
    }

    res.status(200).send({
      code: 200,
      msg: "学生数据添加成功"
    })
  })

})

// 3.2 查找学生信息接口
app.get('/findInfo', (req, res) => {
  res.status(200).send(db);
})
// 4.指定端口并启动服务
app.listen(3000, () => {
  console.log("服务器已启动 打开: http://localhost:3000");
})