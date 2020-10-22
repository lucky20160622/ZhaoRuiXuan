// 需求:把1 - 100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1 - 10的和为一组，输出来，11 - 20的和为一组输出来，依次类推


// 求1-10这一组的和
// 累加变量
// for循环 循环1-10
// 累加
// 打印输出


// 代码:
// 1.
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// 2.
// var sum = 0;
// for (var i = 11; i <= 20; i++) {
//     sum += i;
// }
// console.log(sum);

// 3.
// var sum = 0;
// for (var i = 21; i <= 30; i++) {
//     sum += i;
// }
// console.log(sum);

// 4.
// var sum = 0;
// for (var i = 31; i <= 40; i++) {
//     sum += i;
// }
// console.log(sum);

// 5.
// var sum = 0;
// for (var i = 41; i <= 50; i++) {
//     sum += i;
// }
// console.log(sum);


// 6.
// var sum = 0;
// for (var i = 51; i <= 60; i++) {
//     sum += i;
// }
// console.log(sum);

// 7.
// var sum = 0;
// for (var i = 61; i <= 70; i++) {
//     sum += i;
// }
// console.log(sum);

// 8.
// var sum = 0;
// for (var i = 71; i <= 80; i++) {
//     sum += i;
// }
// console.log(sum);

// 9. 
// var sum = 0;
// for (var i = 81; i <= 90; i++) {
//     sum += i;
// }
// console.log(sum);


// 10.
// var sum = 0;
// for (var i = 91; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// 进行了10次
// 声明累加变量
for (var j = 1; j <= 10; j++) {
    // j: 1 2  3  4  5  6  7  8  9  10
    // i: 1 11 21 31 41 51 61 71 81  91  (j-1)*10+1
    //i1: 10 20 30 40 50 60 70 80 90 100 10*i
    var sum = 0;
    for (var i = (j - 1) * 10 + 1; i <= 10 * j; i++) {
        sum += i;
    }
    console.log(sum);
}
