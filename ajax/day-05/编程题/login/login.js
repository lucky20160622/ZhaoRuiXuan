// 引入框架模块
const express=require('express')
// 使用框架模块创建服务
const app=express()
// 使用express中间件
app.use(express.urlencoded())
app.post('/login',(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.password);
    if(req.body.username=='admin'&&req.body.password=='123456'){
        res.send('登录成功')
    }else{
        res.send('重新登录')
    }
})

// 监听
app.listen(80,()=>{
    console.log('http://localhost');
})
