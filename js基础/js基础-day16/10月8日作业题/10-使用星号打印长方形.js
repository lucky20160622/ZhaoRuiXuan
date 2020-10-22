// 需求: 使用for循环打印 一行星号

// for (var i = 0; i < 1; i++) {
//     console.log("*")
// }

// var str = ""
// for (var i = 0; i < 5; i++) {
//     str += "*";
// }
// console.log(str);



// 需求: 
// for循环嵌套打印5行5列的正方形，如图所示(拔高题)
// *****
// *****
// *****
// *****
// *****

// 1.
// var str = ""
// for (var i = 0; i < 5; i++) {
//     str += "*";
// }
// console.log(str);

// 2.
// var str = ""
// for (var i = 0; i < 5; i++) {
//     str += "*";
// }
// console.log(str);

// 3.
// var str = ""
// for (var i = 0; i < 5; i++) {
//     str += "*";
// }
// console.log(str);

// 4.
// var str = ""
// for (var i = 0; i < 5; i++) {
//     str += "*";
// }
// console.log(str);

// 5.
// var str = ""
// for (var i = 0; i < 5; i++) {
//     str += "*";
// }
// console.log(str);

// for (var j = 0; j < 5; j++) {
//     var str = ""
//     for (var i = 0; i < 5; i++) {
//         str += "*";
//     }
//     console.log(str);
// }



// 嵌套for循环
// 故事: 我也比较严肃,有一天有一位同学 犯错了, 跑步  
// 总结: 外层发号命令: 三次
//      跑圈的人 每次 跑三圈

// 我让周可跑了三次
for (var i = 1; i <= 3; i++) {
    // 只要让周可跑一次 周可就跑够三圈
    for (var j = 1; j <= 3; j++) {
        console.log(i * j);
    }
}