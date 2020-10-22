// // 1.引入http模块
// const http = require('http');

// // 2.使用http模块创建服务
// let app = http.createServer();

// // 3.监听浏览器的request事件 处理请求并响应内容
// // req 代表请求对象
// // res 代表响应对象
// app.on('request', (req, res)=>{
//     // 打印请求
//     // console.log(req);
//     // 响应给客户端一句话
//     res.end("Hello World1");
// })


// // 4.监听指定的端口 启动服务
// app.listen(80, ()=>{
//     // http://127.0.0.1
//     console.log("请访问: http://localhost")
// })



// const http = require('http')

// let app = http.createServer()

// app.on('request', (req, res) => {
//     console.log(req)
//     res.end('hello')
// })

// app.listen(80, () => {
//     console.log('请访问http://localhost')
// })



// const http = require('http')
// const app = http.createServer()

// app.on('request', (req, res) => {
//     res.end('htllo')
// })


// app.listen(80, () => {
//     console.log('请访问http://localhost')
// })