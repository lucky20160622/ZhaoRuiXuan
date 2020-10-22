// 依次读取 1.txt 2.txt 3.txt文件
const fs = require('fs');
function p1() {
  return new Promise((resolve, reject) => {
    fs.readFile('./1.txt', 'utf8', (err, data) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })

}
function p2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./2.txt', 'utf8', (err, data) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}
function p3() {
  return new Promise((resolve, reject) => {
    fs.readFile('./3.txt', 'utf8', (err, data) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })

}
console.log(p1())
p1().then(data => {
  console.log(data);
  return p2();
}).then(data => {
  console.log(data);

  return p3();
}).then(data => {
  console.log(data);
})

