// // 1.引入http模块
// const http = require('http');
// const url = require('url');

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
//     // 打印请求地址的
//   console.log(req.url);
// // 为了拿到对象形式的前端用户写的数据
//   let params = url.parse(req.url, true);
// //   console.log(params);
//     // console.log(params.query.username, params.query.password);

//     if (params.query.username =='tom'&&  params.query.password =='123456') {
//         res.write('欢迎您'+params.query.username)
//     } else {
//         res.write("账号或密码错误,请您去注册")
//     }
//     res.end();
// })


// // 4.监听指定的端口 启动服务
// app.listen(80, ()=>{
//     // http://127.0.0.1
//     console.log("请访问: http://localhost")
// })


// const http = require('http')
// let url = require('url')
// let app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     // console.log(req.url)
//     let params=url.parse(req.url,true)
//     if(params.query.username=='vv'&&params.query.password=='123456'){
//         res.write('欢迎您'+params.query.username)
//     }else{
//         res.write('账号或密码错误，请您去注册')
//     }
//     res.end()
// })

// app.listen(80, () => {
//     console.log('请打开http://localhost')                                                
// })



// const http = require('http')
// let url = require('url')
// let app = http.createServer()
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html;charset=utf8'
//     })
//     let params = url.parse(req.url, true)
//     if (params.query.username == 'vv' && params.query.password == '123') {
//         res.write('欢迎您' + params.query.username)
//     } else {
//         res.write('账号或密码错误，请您去注册')
//     }
//     res.end()
// })

// app.listen(80, () => {
//     console.log('请访问http://localhost')
// })


const http = require('http')
const url = require('url')
let app = http.createServer()
app.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    let params = url.parse(req.url, true)
    if (params.query.username == 'vv' && params.query.password == '123') {
        res.write('您好' + params.query.username)
    } else {
        res.write('账号或密码错误，请您去注册')
    }
    res.end()
})

app.listen(80, () => {
    console.log('请打开http://localhost')
})