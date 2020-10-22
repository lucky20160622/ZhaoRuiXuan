// 同步API和异步API的区别

// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(1, 2);

// console.log(3);


// function getData() {
//   setTimeout(() => {
//     return {
//       messge: "Hello"
//     }
//   }, 0)

//   // return undefined;
// }

// let result = getData();
// console.log(result);


// function getData(callback) {
//   setTimeout(() => {
//     // return {
//     //   messge: "Hello"
//     // }

//     callback({
//       message: 'hellow'
//     })
//   }, 0)

//   // return undefined;
// }
// // callback = function (){}
// getData(function (data) {
//   // console.log(data);
//   console.log(data.message);
// })


// let callback = function () { console.log(1111) };
// function fn(callback) {
//   callback();
// }


// let add = function () {
//   console.log(1111);
// }


// fn(function () {
//   console.log(1111);
// })