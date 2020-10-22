// 依次读取 1.txt 2.txt 3.txt文件

const fs = require('fs');
// p1是不是一个普通函数
// 如何把普通函数变成异步函数？
// 在es中，我们如果想要把一个函数变成异步函数 只需要在函数前面添加async
// 在es中，异步函数默认的返回值就是 Promise对象
async function p1() {
  return 'p1';
}

// console.log(p1())

async function p2() {
  return 'p2';
}

async function p3() {
  return 'p3'
}


async function run() {
  // 如果我们的函数是异步函数 用async的时候 必须配合await 等待
  // 等待一个执行完毕 再去执行另外一个
  // 虽然看起来是同步的但是只是因为写法不同 本质还是异步的
  let r1 = await p1();
  let r2 = await p2();
  let r3 = await p3();

  console.log(r1, r2, r3);
}

run();