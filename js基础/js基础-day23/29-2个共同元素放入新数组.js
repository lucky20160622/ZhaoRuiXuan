
// 29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组


var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
var arr3 = [].concat(arr1 + arr2);
console.log(arr3);

