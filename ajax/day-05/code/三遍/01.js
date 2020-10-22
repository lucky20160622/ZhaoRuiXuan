// 引入框架模块
const express=require('express')
// 使用框架模块创建服务
const app=express()
// 切换页面
app.get('/',(req,res)=>{
    res.end('这是首页')
})
app.get('/login',(req,res)=>{
    res.end('这是登录页')
})
app.get('/list',(req,res)=>{
    res.end('这是列表页')
})
// 监听
app.listen(80,()=>{
    console.log('服务启动：http://localhost');
})

// // 引入框架模块
// const express=require('express')
// // 使用框架模块创建服务
// const app=express()
// // 切换页面
// app.get('/',(req,res)=>{
//     res.end('这是首页')
// })
// app.get('/article',(req,res)=>{
//     res.end('这是文章')
// })
// app.get('/list',(req,res)=>{
//     res.end('这是登录页')
// })
// // 监听
// app.listen(80,()=>{
//     console.log('htpp://localhost');
// })



// // 引入框架模块
// const express=require('express')
// // 使用框架模块创建服务
// const app=express()
// // 切换页面
// app.get('/',(req,res)=>{
//     res.end('这是首页')
// })
// app.get('/login',(req,res)=>{
//     res.end('这是登录页')
// })
// app.get('/list',(req,res)=>{
//     res.end('这是列表页')
// })
// // 监听
// app.listen(80,()=>{
//     console.log('http://localhost');
// })