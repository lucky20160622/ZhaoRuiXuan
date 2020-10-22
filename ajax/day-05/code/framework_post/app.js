// 1.引入框架模块
const express = require('express');
// 2.使用框架模块创建服务
const app = express();


// 使用express的中间件
app.use(express.urlencoded())

app.get('/', (req, res) =>{
    res.send("首页")
})


app.post('/login', (req, res) =>{
    console.log(req.body);
    res.send("这是表单发起的ajax请求")
})

// 
// 4.指定服务端口号 并启动服务
app.listen(80, ()=>{
    console.log("服务启动: http://localhost")
})
