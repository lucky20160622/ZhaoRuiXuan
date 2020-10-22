// 引用框架模块
const express=require('express')
// 使用框架模块创建服务
const app=express()
// 使用中间件
app.use(express,urlencoded())
app.get('/',(req,res)=>{
    res.send('首页')
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('这是表单发起的ajax请求')
})
// 监听
app.listen(80,()=>{
    console.log('http://localhost');
})


// 引用框架模块
// const express=require('express')
// // 使用框架模块创建服务
// const app=express()
// // 使用中间件
// app.use(express,urlencoded())
// app.get('/',(req,res)=>{
//     res.send('首页')
// })
// app.post('/login',(req,res)=>{
//     console.log(req.body);
//     res.send('这是表单发起的ajax请求')
// })
// // 监听
// app.listen(80,()=>{
//     console.log('http://localhost');
// })


// // 引用框架模块
// const express=require('express')
// // 使用框架模块创建服务
// const app=express()
// // 使用中间件
// app.use(express,urlencoded())
// app.get('/',(req,res)=>{
//     res.send('首页')
// })
// app.post('/login',(req,res)=>{
//     console.log(req.body);
//     res.send('这是表单发起的ajax请求')
// })
// // 监听
// app.listen(80,()=>{
//     console.log('http://localhost');
// })