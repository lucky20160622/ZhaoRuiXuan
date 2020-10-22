// 9.下列代码控制台打印出的值是多少？把执行过程写出来
function a(){
     console.log('a');//
     c();  //ac
 }
 function b(){
     console.log('b');
     a(); //bac
 }
 function c(){
     console.log('c');  //c
 }
 a(); // ？  ac
 b();  // ？ bac
 c();   // ？c
 //首先进入function a（）输出a  然后从c()输出c  总结输出ac
 //b进入function  b（）输出b 然后a（）输出ac  总结输出bac
 //c进入function c() 直接输出c 总结输出c 