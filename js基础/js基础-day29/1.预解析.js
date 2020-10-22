// 1.下列代码控制台打印出的值是多少?写出执行过程
// // 1.下列代码控制台打印出的值是多少?写出执行过程
function b(x, y, a) {
    a = 10
    console.log(arguments[2]);//？
}

b(1, 2, 3); 


// 执行时的代码

function b(x, y, a) {
    a = 10
    console.log(arguments[2]);//10
}

b(1, 2, 3); 

 //第一步先调用函数 并传参,  函数中把a重新赋值为10  所以打印的结果就是10
