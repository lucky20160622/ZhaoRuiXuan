// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由

const articleRouter = express.Router();
// 3.创建路由
articleRouter.get('/', (req, res) => {
  // res.send("文章列表页面")
  res.render('article')
})

articleRouter.get('/edit', (req, res) => {
  // res.send("文章编辑");
  res.render('article-edit')
})
// 4.导出
module.exports = articleRouter;