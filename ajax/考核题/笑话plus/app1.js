// 引入模块
const express=require('express')
const path=require('path')
// 使用模块创建服务
const app=express()
// 静态目录
app.use(express.static(path.join(__dirname,'public')))
// 接收响应请求
app.get('https://autumnfish.cn/api/joke/list',(req,res)=>{
  console.log('成功');
})
// 启动指定服务器端口
app.listen(80,()=>{ 
  console.log('http://localhost');
})