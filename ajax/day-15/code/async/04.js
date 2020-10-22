// 依次读取 1.txt 2.txt 3.txt文件


// 回调的嵌套
// 只是因为 回调的嵌套有两个问题: 嵌套的代码阅读麻烦 书写麻烦
const fs = require('fs');

fs.readFile('./1.txt', 'utf8', (err, data) => {
  console.log(data);
  fs.readFile('./2.txt', 'utf8', (err, data) => {
    console.log(data);
    fs.readFile('./3.txt', 'utf8', (err, data) => {
      console.log(data);
    })
  })
})

// 解决回调嵌套,也成为回调地狱的问题，可以使用promise 他是解决回调地狱的终级方案


