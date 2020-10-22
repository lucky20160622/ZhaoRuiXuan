// 将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割
var arr = ["red", "green", "blue", "pink"];
var num = "";
for (var i = 0; i < arr.length; i++) {
  num += arr[i];
  if (i < arr.length - 1) {
    num += "|";
  }
}
console.log(num);
