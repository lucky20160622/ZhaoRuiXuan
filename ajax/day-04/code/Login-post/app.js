// // 1.引入http模块
// const http = require('http');
// const querystring = require('querystring');

// // 2.使用http模块创建服务
// let app = http.createServer();

// // 3.监听浏览器的request事件 处理请求并响应内容
// // req 代表请求对象
// // res 代表响应对象
// app.on('request', (req, res)=>{
//     // 为了解决乱码
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let postData ='';
//     // data事件-->监听数据传输事件
//     req.on('data', (chunk)=>{
//         // chunk获取到的数据 字符串的16进制表示
//         // 传输一点儿 拼接一点
//         // console.log(chunk);

//         // 在传输中 不能保证数据传输完整
//         // 一直拼接数据 
//         postData +=chunk;
//     })
//     // end事件
//     req.on('end', ()=>{
//         // console.log(postData);
//         // postdata就变成了数据
//         // 把数据变成对象
//         let finalData = querystring.parse(postData);
//         console.log(finalData);

//         // body-parser 直接获取到post请求的数据
//     })
// })


// // 4.监听指定的端口 启动服务
// app.listen(3000, ()=>{
//     // http://127.0.0.1
//     console.log("请访问: http://localhost:3000")
// })



// const http = require('http')
// const querystring = require('querystring')
// let app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'html/text;charset=utf8'
//     })
//     let postData = ''
//     req.on('data', (chunk) => {
//         console.log(chunk)
//         postData += chunk
//     })
//     req.on('end',()=>{
//         let finalData=querystring.parse(postData)
//         console.log(finalData)
//     })
// })
// app.listen(3000,()=>{
//     console.log('请访问: http://localhost:3000')
// })

// const http = require('http')
// const querystring = require('querystring')
// const app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'html/text;charset=utf8'
//     })

//     let postData = ''
//     req.on('data', (chunk) => {
//         postData += chunk
//     })
//     req.on('end', () => {
//         let finalData = querystring.parse(postData)
//         console.log(finalData)
//     })
// })
// app.listen(3000, () => {
//     console.log('请访问: http://localhost:3000')
// })


const http = require('http')
const querystring = require('querystring')
const app = http.createServer()
app.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'html/text;charset=utf8'
    })

    let postData = ''
    req.on('data', (chunk) => {
        postData += chunk
    })
    req.on('end', () => {
        let finalData = querystring.parse(postData)
        console.log(finalData)
    })
})
app.listen(3000, () => {
    console.log('请访问: http://localhost:3000')
})