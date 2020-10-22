// 14.将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//     通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var  length = arr.length;
var  n = 6;
var  lineNum = length % n === 0 ? length / n : Math.floor( (length / n) + 1 );
var  res = [];
for (var  i = 0; i < lineNum; i++) {
  var  temp = arr.slice(i*n, i*n+n);
  res.push(temp);
}

console.log(res);