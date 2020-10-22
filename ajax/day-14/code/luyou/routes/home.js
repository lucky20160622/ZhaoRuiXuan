// 引入Express框架
const express = require('express');

// 创建了一个路由叫home
const home = express.Router();

home.get('/', (req, res) => {
  res.send("这是推荐页面首页")
})
home.get('/recommend', (req, res) => {
  res.send("这是推荐页面")
})


module.exports = home;