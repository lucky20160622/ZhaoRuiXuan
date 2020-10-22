// 需求: 使用for循环语句计算3+6+9+12+……+99的结果

// 分析: 
// 先找出1-100之间3的倍数 
// 能不能整除3 如果能整除就累加

// var sum = 0;
// for (var i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//         sum += i;
//     }
// }

// console.log(sum);


// 第二种方法：
var sum = 0;
for (var i = 3; i < 100; i += 3) {
    sum += i;
}
console.log(sum);