// // 1. 1-100之间所有数的总和 与 平均值
// var a = 0
// for (i = 1; i <= 100; i++) {
//     a += i
// }
// console.log(a)
// console.log(a / (i - 1));
// console.log(i);



// 2. 1-100之间所有偶数的和
// var a = 0
// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         a += i
//     }
// }



// console.log(a)
// // 3. 100以内7的倍数的总和
// var a = 0
// for (i = 1; i <= 100; i++) {
//     if (i % 7 == 0) {
// //         a += i
// //     }
// // }
// console.log(a)



// 4. 利用JavaScript完成如下九九乘法表
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(j + "*" + i + " = " + i * j + "&nbsp;");
//     }
//     document.write("<br><br>");
// }


//5. 用户输入一个数字，列出所有它能够整除的数字。
// var a = 60
// for (var i = 1; i <= a; i++) {
//     if (a % i == 0) {
//         console.log(`${a} 可以被 ${i} 整除`);
//     }
// }



//6. 利用JavaScript求：1+2+3+…+100的和
// var a = 0
// for (i = 1; i <= 100; i++) {
//     a += i
// }
// console.log(a)



// 7. 利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字

// for (i = 1; i <= 1000; i++) {
//     if (i % 5 == 0 || i % 6 == 0) {
//         console.log(i)
//     }
// }
// 8. 打印一个 5行4列的矩形

// var c = '';
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 4; j++) {
//         c += '* ';
//     }
//     c += '\n';
// }
// console.log(c);



//  // 9. 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）（拔高题）
//       //         *
//       //        * *
//       //       * * *
//       //      * * * *
//       //     * * * * *
//       for (i = 1; i <= 5; i++) //控制输出行数
//       {
//           for (j =  (5-i); j > 0; j--) 
//                document.write("&nbsp");
//           for (j = 1; j <= 2 * i - 1; j++)
//                document.write("*");
//            document.write("<br>");
//       }



// 10. 利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）
// //      ---*
// //      --***
// //      -*****
// //      *******
// //      -*****
// //      --***
// //      ---*
// var s = Math.floor(7 / 2) + 1;
// for (var i = 1; i <= 7; i++) {
//   for (var k = 1; k <= Math.abs(s - i); k++) {
//     document.write("_");
//   }
//   for (var j = 1; j <= 2 * s - 1 - 2 * Math.abs(s - i); j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }



// 11.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//  for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     document.write(i);
//   }
//   document.write("<br />");
// }
// for (var i = 1; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     document.write(i + 1);
//   }
//   document.write("<br />");
// } 




// 12.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//      *                      *********
//      ***                   *******
//      *****                *****
//      *******             ***
//      *********          *
//   for (i = 0; i < 5; i++) {
//     for (j = 0; j < i + 5; j++) {
//       if (j >= 5 - 1 - i) {
//           document.write("*");
//       }
//     }
//     document.write("<br>");
//   }


//   document.write("<br>");
//   document.write("<br>");
//   document.write("<br>");
//   for (var n = 1; n <= 5; n++) {

//         for (var s = 1; s < 2 * (5 - n + 1); s++) {
//             document.write("*");
//         }
//         document.write("<br/>");
//     }