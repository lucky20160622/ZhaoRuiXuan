// 1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
 function abc() {
   console.log();(a);   // ? 10
   var a = 10;
 }
abc();
console.log();(a)  //?25
//1.abc寻找变量首先进入funct abc  
//2.然后里面有一个var a=10  把10换到console.log()上 
//3.运用函数域 得出a=10 给console.log()赋值 得出abc=10
//4console.log();寻找变量进入function var a=10
//5.var a=10 已经被占用，所以去外面找 得出a=25
//6.打印a=25

