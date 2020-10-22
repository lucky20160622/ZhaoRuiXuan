// 需求:.10个整数{ 9, 10, 6, 6, 1, 9, 3, 5, 6, 4 } ，保存到数组中。
//  1.去除数组中重复的内容，只保留唯一的元素。
//  2.以下列格式打印数组：[9, 10, 6, 1, 3, 5, 4]

// 分析: 我先定义一个空数组 []  开始循环 10个整数的数组 看看10个数组中的每个元素 在不在数组中
// indexOf() 如果等于-1 说明10个整数的数组元素 不在空数组中 那么就添加到空数组 否则 就不添加


// 步骤:
// 1.声明10个整数的数组
var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// 2.声明空数组
var newArr = [];
// 3.循环遍历10个整数的数组
for (var i = 0; i < arr.length; i++) {
  // 4.判断空数组中有没有遍历的那个数
  if (newArr.indexOf(arr[i]) === -1) {
    // 4.1 如果没有 就把遍历的那个数添加到空数组中
    newArr.push(arr[i]);
  }

}
// 5.打印空数组


// 方法2
// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
// var Xarr = [arr[0]]
// for (var i = 1; i < arr.length; i++) {
//     for (var j = 0; j < Xarr.length; j++) {
//         if (arr[i] === Xarr[j]) {
//             break;
//         }
//     }
//     if (j === Xarr.length) {
//         Xarr[Xarr.length] = arr[i]
//     }
// }
// console.log(Xarr);//[9, 10, 6, 1, 3, 5, 4]
// 方法三
// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
// var Xarr = [arr[0]]
// for (var i = 1; i < arr.length; i++) {
//   var kg = true;
//   for (var j = 0; j < Xarr.length; j++) {
//     if (arr[i] === Xarr[j]) {
//       kg = false
//     }
//   }
//   if (kg) {
//     Xarr[Xarr.length] = arr[i]
//   }
// }
// console.log(Xarr);//[9, 10, 6, 1, 3, 5, 4] */

// 方法四
// for (var i = 0; i < arr.length; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       arr.splice(j, 1);
//       j--;
//     }
//   }
// }
