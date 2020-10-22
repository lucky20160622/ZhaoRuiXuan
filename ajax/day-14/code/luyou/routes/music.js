// 引入Express框架
const express = require('express');

// 创建了一个路由叫home
const music = express.Router();


music.get('/', (req, res) => {
  res.send("我是音乐首页")
})
music.get('/a', (req, res) => {
  res.send("我是音乐首页a")
})
music.get('/b', (req, res) => {
  res.send("我是音乐首页b")
})
music.get('/c', (req, res) => {
  res.send("我是音乐首页c")
})

module.exports = music;