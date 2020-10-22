// // 1.引入http模块
// const http = require('http');
// const url = require('url');

// // 2.使用http模块创建服务
// let app = http.createServer();

// // 3.监听浏览器的request事件 处理请求并响应内容
// // req 代表请求对象
// // res 代表响应对象
// app.on('request', (req, res)=>{
//        // 为了解决乱码
//        res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     // console.log(req.url);
//     // 当url中掺杂参数 的时候 必须使用pathname来做
//     let pathname = url.parse(req.url).pathname;
//     console.log(pathname);
//     // 首页
//     if (pathname == '/'||pathname== '/index') {
//         res.end(`
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>首页</h1>
//     <a href="/login?username=zhansan&password=123456">登录页面</a>
// </body>
// </html>`); 
//     }
//     // 列表页
//     if (pathname == '/list') {
//         res.end("列表页"); 
//     }
//     // 文章页
//     if (pathname == '/article') {
//         res.end("文章页"); 
//     }
//     // 登录页面
//     if (pathname == '/login') {

//         console.log(url.parse(req.url,true).query)
//         res.end("登录页面"); 
//     }
// })


// // 4.监听指定的端口 启动服务
// app.listen(80, ()=>{
//     // http://127.0.0.1
//     console.log("请访问: http://localhost")
// })

// const http = require('http')
// const url = require('url')
// let app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let pathname = url.parse(req.url).pathname
//     console.log(pathname)
//     if (pathname == '/' || pathname == '/index') {
//         res.end(`<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <h1>首页</h1>
//             <a href="/login">登录页面</a>
//         </body>
//         </html>`)
//     }
//     if (pathname == '/list') {
//         res.end("列表页");
//     }
//     if (pathname == '/article') {
//         res.end("文章页");
//     }
//     if (pathname == '/login') {
//         res.end("登录页面");
//     }

// })
// app.listen(80, () => {
//     // http://127.0.0.1
//     console.log("请访问: http://localhost")
// })

// const http = require('http')
// const url = require('url')
// let app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let pathname = url.parse(req.url).pathname
//     console.log(pathname)
//     if (pathname == '/' || pathname == '/index') {
//         res.end(`<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <h1>首页</h1>
//             <a href="/login">登录页面</a>
//         </body>
//         </html>`)
//     }
//     if (pathname == '/list') {
//         res.end("列表页");
//     }
//     if (pathname == '/article') {
//         res.end("文章页");
//     }
//     if (pathname == '/login') {
//         res.end("登录页面");
//     }

// })
// app.listen(80, () => {
//     // http://127.0.0.1
//     console.log("请访问: http://localhost")
// })


const http = require('http')
const url = require('url')
let app = http.createServer()
app.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    let pathname = url.parse(req.url).pathname
    console.log(pathname)
    if (pathname == '/' || pathname == '/index') {
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>首页</h1>
            <a href="/login">登录页面</a>
        </body>
        </html>`)
    }
    if (pathname == '/list') {
        res.end("列表页");
    }
    if (pathname == '/article') {
        res.end("文章页");
    }
    if (pathname == '/login') {
        res.end("登录页面");
    }

})
app.listen(80, () => {
    // http://127.0.0.1
    console.log("请访问: http://localhost")
})



