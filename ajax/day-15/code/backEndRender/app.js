// 引入Express框架
const express = require('express');
const path = require('path');
// 使用框架创建web服务器
const app = express();


// app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// 设置模板引擎
// 在应用中使用art-template模板引擎 后缀是art
app.engine('html', require('express-art-template'));
// 设置模板，模板的存放目录名字叫 views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.locals.user = {
  name: "张三",
  age: 18
}
// 访问localhost的时候 我们在页面上显示 首页
app.get('/', (req, res) => {
  let str = "首页";


  // res.send("首页")
  res.render('index', {
    title: str
  });
})

// 访问localhost/about的时候 我们在页面上显示 关于
app.get('/about', (req, res) => {
  let data = {
    title: "关于我们",
    list: ["羽毛球", '乒乓球', '骑马', '射箭', '耍剑']
  }
  // res.send("关于")

  res.render('about', data);
})

// 访问localhost/list的时候 我们在页面上显示 列表
app.get('/list', (req, res) => {
  res.send("列表")
})

// 程序监听3000端口
app.listen(3000);
