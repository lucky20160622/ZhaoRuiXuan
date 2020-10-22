console.log(a);    // ?
var a = '666';
function a(){ console.log('我是函数') }
 console.log(a);    // ?


//  如果函数名和变量名相同的哈先提升函数名再提升变量名  所以先将函数a提升在最上面  然后再将变量a提升  第一个打印function a(){ console.log('我是函数') }这个函数   第二个打印666  因为a重新赋值后=666
