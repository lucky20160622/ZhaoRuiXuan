// 4.下列代码控制台打印出的值是多少？写出执行过程
var foo = function () {
    console.log(2)
}
function foo() {
    console.log(1)
}
foo();   // 2

执行时的代码
function foo() {
    console.log(1)
}
var foo;

foo = function () {
    console.log(2)
}
foo();   //2

// 先将函数foo提升在最上面  然后再将var 出来的声明提升  然后调用foo函数  调用时只会执行最后面的代码所以只会打印2