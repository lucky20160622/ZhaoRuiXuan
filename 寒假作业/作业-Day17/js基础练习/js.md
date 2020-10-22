## js简答题

1. 什么是全局作用域？什么是函数(局部)作用域？

   全局作用域是在这个js内部都可以起作用

   局部作用域是在一定的范围内才起作用

2. ES6新增了块级作用域，谈谈你对块级作用域的理解

    ES6允许块级作用域的任意嵌套。外层作用域无法读取内层作用域的变量 

    内层作用域可以定义外层作用域的同名变量 

3. 为什么需要 `let`定义变量，`let` 和 `const` 有什么共同点，`let` 和 `var` 有什么不同点

   共同点

    A、变量不提升

    B、暂时性死区，只能在声明的位置后面使用。 

    C、不可重复声明。 

    不同点

    1.关于变量提升,var能变量提升，let不能 

    2.let声明绑定的代码块内，不能重复声明同一个变量，var可以 

    3.类似for循环的代码块，let只在代码块内部有效，var在代码块外部也有效 

4. 全局变量和全局作用域，局部变量和局部(函数)作用域是否有关系？有什么关系？

   全局变量和全局作用域：都可以影响全局，一个变量的作用域如果是全局，那么他也可以叫全局变量

   局部变量和局部(函数)作用域：只能影响局部 一个变量的作用域如果是局部，那么他也可以叫局部变量


## js编程题

1. 输出下面预解析的结果，并注释解题过程

    ```js
    1) var a = 10;
       function abc() {
         console.log(a); // ?   var a提升但值没有提示 所以输出undefined
         var a = 9; //只在函数内部起作用 var a会提升
       }
       abc();
       console.log(a) // ?   10 
    
    2) var color = "red";
    function outer() {
      var anotherColor = "blue"; //在outer中才起作用
    
      function inner() {
        var tmpColor = color; //color为red
        color = anotherColor; //anotherColor 为blue 全局作用域
        anotherColor = tmpColor;
        console.log(anotherColor); // ?  red
      }
      inner();
    }
    outer();
    console.log(color); // ?blue
    
    3) var a = 10;
       function fn1() {
         var a = b = c = 9; //a为局部作用域 b，c为全局作用域
         console.log(a); // ?  9
         console.log(b); // ? 9
         console.log(c); // ?  9
       }
       fn1();
       console.log(a); // ?  10
       console.log(b); // ?  9
       console.log(c); // ? 9
    
    4) function a(b) {
      console.log(b); // ?  b=c c为函数
      var s = b(); // b()调用函数c返回值为123
      console.log(s); // ? 123
    }
    a(c);
    
    function c() {
      return 123;
    }
    
    ```

2. 输出下面打印结果并说明理由

    ```js
    1) function test() {
      var x = 31;
      if (true) {
        var x = 71; //x今日if重新赋值为71
        console.log(x); // ? 就近原则选择最近的   71
      }
      console.log(x); // ? 71
    }
    test();
    
    2) function test() {
      let x = 31;
      if (true) {
        let x = 71; //局部作用域只会影响{}里面的x
        console.log(x); // ? 71
      }
      console.log(x); // ? 31
    }
    test();
    
    3) function fn() {
       if (2 > 1) {
         arr = 10;
         brr = 10;
         let arr; 
         var brr;
         console.log(arr); // ？  报错 let arr声明要在赋值前
         console.log(brr); // ？   arr报错brr不继续输出
         }
        }
    fn();
    
    4) var a = [];
       for (var i = 0; i < 10; i++) {
         a[i] = function () {
           console.log(i);
         };
       }
    //如果输出i console.log(i); 为10所以函数的返回值就为10
       a[6](); // ?  10
       a[7](); // ?  10
       a[8](); // ?  10
       a[9](); // ?  10
    
    5) var a = [];
       for (let i = 0; i < 10; i++) {  //变量i是let声明的，当前的i只在本轮循环有效，所以每 
         a[i] = function () {          //一次循环的i其实都是一个新的变量
           console.log(i); 
         };
         a[i]();//0，1，2，3，4，5，6，7，8，9
       }
       a[6](); // ?  6
       a[7](); // ?  7
       a[8](); // ?  8
       a[9](); // ?  9
    ```