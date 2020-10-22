// 深拷贝拷贝多层, 每一级别的数据都会拷贝.
var obj = {
  id: 1,
  name: "andy",
  msg: {
    age: 18,
  },
  color: ["pink", "red"],
};

var obj2 = {};
// [key] 会把key当做变量
// 与obj2.key != obj2[key] 不要搞混了
function deepCopy(newobj, oldobj) {
  // 保存键给新对象
  for (const key in oldobj) {
    // 保存对象
    let item = oldobj[key];
    if (Array.isArray(oldobj[key])) {
      //判断是不是数组
      // 把老数组的值给新数组
      newobj[key] = [];
      // console.log("Array", obj[key]);
      // console.log(item);
      deepCopy(newobj[key], item);
      // console.log("Array", item);
    } else if (oldobj[key].constructor == Object) {
      //判断是不是对象
      // 把老对象的值给新对象
      newobj[key] = {};

      deepCopy(newobj[key], item);
    } else {
      newobj[key] = item;
    }
  }
  // console.log(newobj);
  return newobj;
}
// 调用
deepCopy(obj2, obj);
// 查看是否变化拷贝成功
// 修改新数组看看旧数组会不会变化
obj2.msg.age = 20;
console.log("新", obj2);
console.log("旧", obj);

// false ? "对" : "错"
console.log(obj2.color == obj.color);
console.log(obj2.msg == obj.msg);
