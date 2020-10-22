// 8.下列代码控制台打印出的值是多少？写出执行过程
// function n() {
//         if(2>1) {
//             arr = 10;
//             brr = 10;
//             let arr;
//             var brr;
//             console.log(arr); // ？
//             console.log(brr); // ？
//         }
//     }
//     n(); 


// 执行时的代码

// function n() {
//     if (2 > 1) {
//         arr = 10;
//         brr = 10;
//         let arr;
//         var brr;
//         console.log(arr); // ？报错  let声明不会提前   所以arr是为声明 
//         console.log(brr); // ？报错  上面的代码错误后 下面的代码也不会执行
//     }
// }
// n(); 