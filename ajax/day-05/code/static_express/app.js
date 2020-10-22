// 1.引入框架模块
const express = require('express');
// 2.使用框架模块创建服务
const app = express();

// 想让哪个文件夹作为静态目录,那么就在第一个参数中写文件夹的名字 添加/  后面的写文件夹的名字

app.use('/public', express.static('public'));

// 4.指定服务端口号 并启动服务
app.listen(80, ()=>{
    console.log("服务启动: http://localhost")
})
