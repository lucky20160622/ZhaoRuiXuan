// 1.引入模块

// 1.1 引入http模块
const http = require('http');
// 1.2 引入url模块
const url = require('url');
// 1.3 引入path
const path = require('path');
// 1.4 引入fs模块
const fs = require('fs');
// 1.5 引入mime模块 --作用: 识别 并分析 文件的MIME类型
const mime = require('mime');
// 2.使用http模块提供的方法创建服务
const app = http.createServer();

// 3.监听客户端的request事件 处理请求并响应内容
app.on('request', (req, res)=>{
    // 需求: 浏览器地址栏 http://localhost/public/default.html?a=1&b=tom
    // 响应的是 /public/default.html
    // 如果输入错误 那么返回 找不到该文件
    // 3.1 获取地址栏中的url
    let pathname = url.parse(req.url).pathname;
    let absolutePath = path.join(__dirname,pathname);
    fs.readFile(absolutePath, (err, data) =>{
        // 如果路径错误 返回Not Found
        if (err != null) {
            res.writeHead(404, {
                'Content-Type': 'text/plain;charset=utf8'
            })
            res.end("Not Found");
            return;
        }
        let type = mime.getType(absolutePath);
        console.log(type);
        // 如果路径正确 返回内容
        res.writeHead(200, {
            'Content-Type': type
        })
        res.end(data);
    })

})

// 监听
app.listen(80, ()=>{
    console.log("请打开 http://localhost")
})

// 1.引入模块

// 1.1 引入http模块
// const http = require('http');
// // 1.2 引入url模块
// const url = require('url');
// // 1.3 引入path
// const path = require('path');
// // 1.4 引入fs模块
// const fs = require('fs');
// // 1.5 引入mime模块 --作用: 识别 并分析 文件的MIME类型
// const mime = require('mime');
// // 2.使用http模块提供的方法创建服务
// const app = http.createServer();

// // 3.监听客户端的request事件 处理请求并响应内容
// app.on('request', (req, res)=>{
//     // 需求: 浏览器地址栏 http://localhost/public/default.html?a=1&b=tom
//     // 响应的是 /public/default.html
//     // 如果输入错误 那么返回 找不到该文件
//     // 3.1 获取地址栏中的url
//     let pathname = url.parse(req.url).pathname;
//     let absolutePath = path.join(__dirname,pathname);
//     fs.readFile(absolutePath, (err, data) =>{
//         // 如果路径错误 返回Not Found
//         if (err != null) {
//             res.writeHead(404, {
//                 'Content-Type': 'text/plain;charset=utf8'
//             })
//             res.end("Not Found");
//             return;
//         }
//         let type = mime.getType(absolutePath);
//         console.log(type);
//         // 如果路径正确 返回内容
//         res.writeHead(200, {
//             'Content-Type': type
//         })
//         res.end(data);
//     })

// })

// // 监听
// app.listen(80, ()=>{
//     console.log("请打开 http://localhost")
// })


// // 1.引入模块

// // 1.1 引入http模块
// const http = require('http');
// // 1.2 引入url模块
// const url = require('url');
// // 1.3 引入path
// const path = require('path');
// // 1.4 引入fs模块
// const fs = require('fs');
// // 1.5 引入mime模块 --作用: 识别 并分析 文件的MIME类型
// const mime = require('mime');
// // 2.使用http模块提供的方法创建服务
// const app = http.createServer();

// // 3.监听客户端的request事件 处理请求并响应内容
// app.on('request', (req, res)=>{
//     // 需求: 浏览器地址栏 http://localhost/public/default.html?a=1&b=tom
//     // 响应的是 /public/default.html
//     // 如果输入错误 那么返回 找不到该文件
//     // 3.1 获取地址栏中的url
//     let pathname = url.parse(req.url).pathname;
//     let absolutePath = path.join(__dirname,pathname);
//     fs.readFile(absolutePath, (err, data) =>{
//         // 如果路径错误 返回Not Found
//         if (err != null) {
//             res.writeHead(404, {
//                 'Content-Type': 'text/plain;charset=utf8'
//             })
//             res.end("Not Found");
//             return;
//         }
//         let type = mime.getType(absolutePath);
//         console.log(type);
//         // 如果路径正确 返回内容
//         res.writeHead(200, {
//             'Content-Type': type
//         })
//         res.end(data);
//     })

// })

// // 监听
// app.listen(80, ()=>{
//     console.log("请打开 http://localhost")
// })