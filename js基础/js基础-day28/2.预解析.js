var a = 25;
 function abc() {
   console.log();(a);   // ?25
   a = 10;
 }
abc();
console.log();(a)  //？10

//1.abc执行代码，首先进入functio abc 
//2.进入后a=10 没有变量的声明 所以无效 
//3.所以去外面找  使用var a=25，所以a=25 ，执行结果abc为25。
//4.console.log寻找变量 首先var a=25已经被使用 所以不可以用了
//5.进入funct abc寻找 得出a=10
//6.输出结果是10