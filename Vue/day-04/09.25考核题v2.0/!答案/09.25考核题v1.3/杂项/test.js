// 浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用(地址).
// 深拷贝拷贝多层, 每一级别的数据都会拷贝.

// 原对象
var oldObj = {
  name: "zs",
  age: 18,
  msg: {
    code: "Hello World",
  },
};

// 新对象
var newObj = {};

const copy = Object.assign(newObj, oldObj);
copy.msg.code = 20;
console.log(copy.msg == oldObj.msg);
console.log("旧", oldObj);
console.log("新", copy);
