//   步骤
// 1. 声明一个变量 保存纸的厚度
var width = 0.00008;
// 2. 声明一个变量 计次
var num = 0;

do {
  width *= 2;
  num++;
} while (width <= 8848.13);
console.log(num);
