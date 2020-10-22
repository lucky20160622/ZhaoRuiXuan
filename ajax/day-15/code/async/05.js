const fs = require('fs');

// 1.Promise是ES(js)中的一个内置对象
// resolve 是成功时的回调
// reject 是失败时的回调

// 把回调嵌套解决调
let promise = new Promise((resolve, reject) => {
  fs.readFile('./221.txt', 'utf8', (err, data) => {
    if (err != null) {
      reject(err);
    } else {
      resolve(data);
    }
  })
})

// 获取结果
promise.then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

// 




