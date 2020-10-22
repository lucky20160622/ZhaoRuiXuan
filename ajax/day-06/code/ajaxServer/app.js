const express = require('express');
const path = require('path');
const app = express();

// 把public作为静态资源目录
// console.log(path.join(__dirname, 'public')) // E:\FullStack\day81-Ajax\code\ajaxServer\public
// app.use('/public', express.static(path.join(__dirname, 'public')))
// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))
// 中间价获取post请求的参数
app.use(express.urlencoded());
// 简单的ajax请求
app.get('/simple', (req, res) =>{
    res.send("Hello, World")
})

// 接受GET参数
app.get('/getParam', (req, res) =>{
    // console.log(req.query);
    // res.send('1111');
    res.send(req.query);
})

// 接受POST请求
app.post('/postParam', (req, res) =>{
    res.send(req.body);
})
app.listen(80, ()=>{
    console.log("请打开 http://localhost")
})