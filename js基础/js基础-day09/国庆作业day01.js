// 1.定义若干个js变量，需表现出js中的各种数据类型，并在页面中输出每个变量的值和其对应类型。
// var num = 123
// var boolean = true
// var string = "wm"
// var undefined
// var object = {
//     name: 'zs',
//     age: 18
// }
// var kong = null
// var arr = [1, 2, 3]
// console.log(num);
// console.log(typeof(num));
// console.log(boolean);
// console.log(typeof(boolean));
// console.log(string);
// console.log(typeof(string));
// console.log(undefined)
// console.log(typeof(undefined));
// console.log(object);
// console.log(typeof(object))
// console.log(kong)
// console.log(typeof(kong))
// console.log(arr)
// console.log(typeof(arr))
// 2.用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示
// 1
// 19
// 比如，用户输入21，那么控制台显示
// 1
// 3
// 7
// 21
// var num = 48
// for (i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i)
//     }
// }
// 4.已知任意两个正整数（a，b），将其作为直角三角形的直角边长，求斜边长
// var a = 12;
// var b = 5;
// for (var i = 1; i < 100; i++) {
//     if (i * i == a * a + b * b) {
//         console.log('这个直角三角的形斜边长为' + i);
//     }
// }
// 5.一个小球从空中掉下来，求如下问题：
// 如果已知小球掉落时高度（1000m），求其触地瞬间的速度；
// 如果已知小球落地瞬间的速度（1000m/s），求其掉落时的高度）
// 附自由落体公式：自由落体运动的规律：2gh=v^2。；（其中g是重力加速度，在地球上g≈9.8m/s2；v是速度，h高度)
// var height=1000;
// var g=9.8;
// for(var i=0;i<=height;i++){
//     if(2*g*height==i*i){
// console.log('其触地瞬间的速度为'+i+'米每秒');
//     }
// }
// // 如果已知小球落地瞬间的速度（1000m/s），求其掉落时的高度）
// var v=1000;
// var g=9.8;
// var s=v/g;
// console.log(s);
// console.log('其掉落时的高度为'+(g/2*s) +'米' );
// // 附自由落体公式：自由落体运动的规律：2gh=v^2。；（其中g是重力加速度，在地球上g≈9.8m/s2；v是速度，h高度)


// 6.	写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“abcde”。
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('abcde')
//     } else if (i % 3 == 0) {
//         console.log('Fizz')
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }
// 7.求两个正数的最大公约数
// var a = 30;
// var b = 60;
// var result = i;
// for (var i = 1; i <= a && i <= b; i++) {
//     if (a % i == 0 && b % i == 0) {
//         result = i;
//     }
// }
// console.log(result);

// 8.求两个正数的最小公倍数
// console.log(a * b / result)

// 9.水果店LED屏幕

// 模拟LED屏幕显示内容

//                       图二
// 要求 1）商品编号 商品名称  单价 和品质 都定义成变量
//      2）在控制台出各种水果的信息，如图二所示

// var arr = [
//     { num: 1, name: '榴莲', price: 32.0, unit: "公斤", quality: 'A' },
//     { num: 2, name: '苹果', price: 6.5, unit: '公斤', quality: 'B' },
//     { num: 3, name: '猕猴桃', price: 6.0, unit: '公斤', quality: 'A' }
// ]
// console.log(arr)

// 10、超市购物小票V2  
// 展示超市所有的商品信息到控制台，如图三所示:
// var num1 = 15.50 * 22.000
// var num2 = 16.00 * 55.000
// var num3 = 14.50 * 24.000
// console.log('商品单价' + num1);
// console.log('商品单价' + num2);
// console.log('商品单价' + num3);
// console.log('商品总价' + (num1 + num2 + num3));



//           图三
// 二、简答题
// 1. 数据类型有几种,分别是哪些
// 一共有七种，number，boolean，string，null，undenfined，object,Symbol.
// 2. 怎么判断一个变量的数据类型
// 使用typeof 例如console.log(typeof(number))
// 3. 怎么判断一个变量是否是数字
// console.log(typeof(number))  判断打印结果是不是number
// 4. 怎么将其他数据类型转换成数字类型
// var str = '456'
// str = Number(str)
// console.log(typeof str);