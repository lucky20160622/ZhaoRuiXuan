// 需求: for循环嵌套打印一个直角三角形,如果所示(拔高题)
// *
// **
// ***
// ****
// *****

// 1.
// var str = "";
// for (var j = 0; j < 1; j++) {
//     str += "*";
// }
// console.log(str);

// 2.
// var str = "";
// for (var j = 0; j < 2; j++) {
//     str += "*";
// }
// console.log(str);

// 3.
// var str = "";
// for (var j = 0; j < 3; j++) {
//     str += "*";
// }
// console.log(str);

// 4.
// var str = "";
// for (var j = 0; j < 4; j++) {
//     str += "*";
// }
// console.log(str);

// 5.
// var str = "";
// for (var j = 0; j < 5; j++) {
//     str += "*";
// }
// console.log(str);



for (var i = 0; i < 5; i++) {
    var str = "";
    for (var j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}