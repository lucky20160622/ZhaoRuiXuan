// // 1.引入http模块
// const http = require('http');
// // 2.使用http模块创建服务
// let app = http.createServer();
// // 3.监听浏览器的request事件 处理请求并响应内容
// // req 代表请求对象
// // res 代表响应对象
// app.on('request', (req, res)=>{

// //     // req.method   // 获取请求方法
// //     console.log(req.method)
// // //    请求地址
// //     // req.url  // 请求地址
// //     console.log(req.url);
// // //    请求头
// //     console.log(req.headers);
//     // 如果单独这么写 你发送的内容浏览器不知道这个编码
//     // 响应的时候告诉浏览器 你响应的内容的编码格式

//     // res.writeHead(响应状态码, 响应头)
//     res.writeHead(304, {
//         // text/html代码服务器给浏览器发送什么类型的文件
//         'Content-Type': "text/html;charset=utf8"
//     })
//     res.end("你好");
// })

// // 4.监听指定的端口 启动服务
// app.listen(80, ()=>{
//     // http://127.0.0.1
//     console.log("请访问: http://localhost")
// })



// const http = require('http')
// let app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': "text/html;charset=utf8"
//     })
//     // console.log(req.method)
//     // console.log(req.url)
//     // console.log(req.headers)
//     res.write('就')
//     res.end()
// })
// app.listen(80, () => {
//     console.log('请访问：http://localhost')
// })



// const http=require('http')
// let app=http.createServer()
// app.on('request',(req,res)=>{
//   res.writeHead(200,{
//       'Content-Type':'text/html;charset=utf8'
//   })
//   res.end('哈哈')
// })

// app.listen(80,()=>{
//     console.log('请打开http://localhost')
// })


const http = require('http')
let app = http.createServer()
app.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    res.end('憨憨')
})

app.listen(80,()=>{
    console.log('请打开http://localhost')
})