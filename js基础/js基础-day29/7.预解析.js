

// 7.下列代码控制台打印出的值是多少？写出执行过程
// function test(){
//  var x = 31;
//  if(true){
//    var x = 71;
//    console.log(x) // ?
// }
//  console.log(x) // ?
// }
// test()


// 执行时的代码

// function test(){
//  var x = 31;
//  if(true){
//    var x = 71;
//    console.log(x) // 71  就近原则
// }
//  console.log(x) // 71   {}里面的声明不是let声明的  所以它不是块级作用域  所以能找到71 
// }
// test()