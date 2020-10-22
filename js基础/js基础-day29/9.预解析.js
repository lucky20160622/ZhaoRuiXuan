// 9.下列代码控制台打印出的值是多少？
//   (function f (num) {
//         function num () {};
//         console.log(num); // ？
//         var num =10
//         console.log(num); // ？
//     }(100))


// 执行时的代码

//   (function f (num) {
//         function num () {};
//         var num ;
//         console.log(num); //   function num () {};
//          num =10
//         console.log(num); // 10 
//     }(100))

    // 如果函数名和变量名相同的哈先提升函数名再提升变量名  所以先将函数num提升在最上面  然后再将变量num提升  第一个打印  function num () {};这个函数   第二个打印10  因为num重新赋值后=10