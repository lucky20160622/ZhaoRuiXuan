  
// 13.将下面对象的属性取出来存储到一个数组中
// var person = {name:"one",age:12,sex:"男"};
// 声明一个对象
var person = { name: "one", age: 12, sex: "男" };
// 声明一个数组
var arr = [];
// 循环遍历对象
for (const key in person) {
    // 将对象的值添加经数组中
    arr.push(person[key]);
}

console.log(arr);