// 引入框架模块
const express=require('express')
// 使用框架模块创建服务
const app=express()

// 想让哪个文件夹作为静态目录,那么就在第一个参数中写文件夹的名字 添加/  后面的写文件夹的名字
app.use('/index',express.static('pbulic'))
// 监听
app.listen(80,()=>{
    console.log('http://localhost');
})

// 引入框架模块
// const express=require('express')
// // 使用框架模块创建服务
// const app=express()

// // 想让哪个文件夹作为静态目录,那么就在第一个参数中写文件夹的名字 添加/  后面的写文件夹的名字
// app.use('/index',express.static('pbulic'))
// // 监听
// app.listen(80,()=>{
//     console.log('http://localhost');
// })

// // 引入框架模块
// const express=require('express')
// // 使用框架模块创建服务
// const app=express()

// // 想让哪个文件夹作为静态目录,那么就在第一个参数中写文件夹的名字 添加/  后面的写文件夹的名字
// app.use('/index',express.static('pbulic'))
// // 监听
// app.listen(80,()=>{
//     console.log('http://localhost');
// })