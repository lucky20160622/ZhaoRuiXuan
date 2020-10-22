## js简答题

1. 若一个变量没有声明直接赋值，它会属于什么变量？根据所学知识说说它会有什么特性

   在函数中一个变量没有声明直接赋值属于全局变量

   在函数外也可以起到作用


2. 请解释一下什么是作用域链？

　　一般情况下，变量取值到 创建 这个变量 的函数的作用域中取值。但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

3. 同名函数和变量是怎么解析的？

    当变量与函数名字相同时，丢变量，保函数 

​    变量声明存在提升，函数声明存在提升，但函数声明比变量声明更置顶 

4. 函数表达式预解析属于变量的预解析还是函数的预解析？为什么？

​      函数表达式为 var 变量名 = function(){}；  是变量预解析，函数表达式是类似变量的样式

## js编程题
1. 输出下列代码a的值分别是多少？
```js
var a = 25;
 function abc() {
   alert(a);   // ? undefined
   var a = 10;  //var a 提升
 }
abc();
alert(a)  //? 25

```
2.输出下列代码a的值分别是多少？
```js
var a = 25;
 function abc() {
   alert(a);   // ?  往上找不到a会跳出函数找a的值
   a = 10;  //全局变量 不会提升
 }
abc();
alert(a)  //? 25

```
3. 输出下列代码name3的值分别是多少？
```js
var name3 = "zs";
function f3() {
    var name3 = "ls"; //var name3提升
    function f4() {
        name3 = "ww"; ww //声明name3已经声明不能影响全局
    }
    f4();
    console.log(name3);   // ?
}
f3();
console.log(name3); // ? zs
```

4.下列代码控制台打印出的值分别是多少？
```js
var color = "red";
   function outer() {
       var anotherColor = "blue";
       function inner() {
           var tmpColor = color;
           color = anotherColor;
           anotherColor = tmpColor;
           console.log(anotherColor);     // ? red
       }
       inner();
   }
   outer();
   console.log(color);  // ? bule
```

5. 下列代码控制台打印出的值分别是多少？
```js
function f1() {
  var a = b = c = 9;
  console.log(a);    //? 9
  console.log(b);    // ? 9
  console.log(c);    // ? 9
}
 f1();
 console.log(a);    //? 报错，下面不再继续执行 a为块级作用域
 console.log(b);     // ?
 console.log(c);     // ?
```