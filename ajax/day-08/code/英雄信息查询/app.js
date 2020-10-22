// 1.导入包
const express = require('express');
const path = require('path');

// 2.包设置
const server = express();
server.use(express.static(path.join(__dirname, 'public')));




// 4.服务器启动
server.listen(3000, () => {
  console.log('请打开 http://localhost:3000')
})