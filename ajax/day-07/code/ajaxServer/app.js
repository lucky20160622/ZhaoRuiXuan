const express = require('express');
const path = require('path');
const app = express();
// 把public作为静态资源目录
// console.log(path.join(__dirname, 'public')) // E:\FullStack\day81-Ajax\code\ajaxServer\public
// app.use('/public', express.static(path.join(__dirname, 'public')))
// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))


app.get('/reqGet', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})


app.listen(80, () => {
    console.log("请打开 http://localhost")
})