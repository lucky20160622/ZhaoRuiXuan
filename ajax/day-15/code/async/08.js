// 依次读取 1.txt 2.txt 3.txt文件
const fs = require('fs');
// 有没有方法可以让现有的API变成返回Promise对象的方法
const promisify = require('util').promisify;
// 传入一个遵循常见的错误优先的回调风格的函数（即以 (err, value) => ... 回调作为最后一个参数），并返回一个返回 promise 的版本。
// 把readFile这样的异步函数变成返回promise对象的方法
const readFile = promisify(fs.readFile);

async function run() {
  let r1 = await readFile('./1.txt', 'utf8');
  let r2 = await readFile('./2.txt', 'utf8');
  let r3 = await readFile('./3.txt', 'utf8');

  console.log(r1, r2, r3);
}

run();
// function p1() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./1.txt', 'utf8', (err, data) => {
//       if (err != null) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })

// }
// function p2() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./2.txt', 'utf8', (err, data) => {
//       if (err != null) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }
// function p3() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./3.txt', 'utf8', (err, data) => {
//       if (err != null) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })

// }
// console.log(p1())
// p1().then(data => {
//   console.log(data);
//   return p2();
// }).then(data => {
//   console.log(data);

//   return p3();
// }).then(data => {
//   console.log(data);
// })

