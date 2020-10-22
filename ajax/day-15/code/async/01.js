const path = require('path');
const fs = require('fs');
// const realPath = path.join(__dirname, 'static'); // 通过返回值的方式把结果给我们
// console.log(realPath); // E:\FullStack\day92-进阶\code\async\static

// const result = fs.readFile('./01.txt', 'utf8', (err, data) => {
//   console.log(data);
// });

// 带Sync的是同步方法 在node中 不带Sync的是异步方法
let result = fs.readFileSync('./01.txt', 'utf8');
console.log(result);

