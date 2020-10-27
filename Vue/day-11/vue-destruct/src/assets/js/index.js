// 1.变量

// let a = 5;
// let b = 6;
// let c = 7;

// export { a, b, c };

// 2.方法

let add = function ( x, y ){
  return x + y;
} 

let minus = function (x,y) {
  return x - y;
}

export {add, minus};

// 把对象{add, minus}的名字定义为default
// export default {add, minus}
// export default {c, add, minus}

// module.exports = {
//   c,
//   add,
//   minus
// }