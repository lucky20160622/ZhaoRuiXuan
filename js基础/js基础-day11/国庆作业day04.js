// 30.	 求200到300之间所有奇数的和
// var sum = 0
// for (i = 200; i <= 300; i++) {
//     if (i % 2 != 0) {
//         sum += i

//     }
// }
// console.log(sum)
// 31.	 for循环嵌套打印5行5列的正方形，如图所示(拔高题)
// for (var k = 1; k <= 5; k++) {
//     var str = ''
//     for (var i = 1; i <= 5; i++) {
//         str += '*'
//     }
//     console.log(str)
// }


// 32.	for循环嵌套打印一个直角三角形,如果所示(拔高题)
//  .
// 33.	for循环嵌套打印一个倒的直角三角形,如果所示(拔高题)
// 34.	企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，用户定义变量，输入当月利润I，求应发放奖金总数？
// var profit = 1100000;
// var bonus = 0;
// if (profit < 100000) {
//     bonus = profit * 0.1
// } else if (profit > 100000 && profit < 200000) {
//     var num1 = profit - 100000
//     bonus = 100000 * 0.1
//     bonus += num1 * 0.075
// } else if (profit > 200000 && profit < 400000) {
//     var num1 = profit - 100000
//     var num2 = profit - 100000
//     bonus = 100000 * 0.1
//     bonus += num1 * 0.075
//     bonus += num2 * 0.05
// } else if (profit > 400000 && profit < 600000) {
//     var num1 = profit - 100000
//     var num2 = profit - 100000
//     var num3 = profit - 200000
//     bonus = 100000 * 0.1
//     bonus += num1 * 0.075
//     bonus += num2 * 0.05
//     bonus += num3 * 0.03
// } else if (profit > 600000 && profit < 1000000) {
//     var num1 = profit - 100000
//     var num2 = profit - 100000
//     var num3 = profit - 200000
//     var num4 = profit - 200000
//     bonus = 100000 * 0.1
//     bonus += num1 * 0.075
//     bonus += num2 * 0.05
//     bonus += num3 * 0.03
//     bonus += num4 * 0.015
// } else if (profit > 1000000) {
//     var num1 = profit - 100000
//     var num2 = profit - 100000
//     var num3 = profit - 200000
//     var num4 = profit - 200000
//     var num5 = profit - 400000

//     bonus = 100000 * 0.1
//     bonus += num1 * 0.075
//     bonus += num2 * 0.05
//     bonus += num3 * 0.03
//     bonus += num4 * 0.015
//     bonus += num5 * 0.01
// }
// console.log(bonus);


// 35.	找出1-99之间是7的倍数或者个位数字是7或者是十位数字是7
// for (i = 1; i <= 99; i++) {
//     var ge = i % 10
//     if (i > 10) {
//         var shi = i % 10 / 10
//     }
//     if (i % 7 == 0 || ge == 7 || shi == 7) {
//         console.log(i)
//     }
// }


// 36.	利用JavaScript编写程序实现如下功能，五个小朋友排成一队。
// 问第一个多大了，第一个说比第二个大两岁，
//   问第二个，第二个说比第三个大两岁，以此类推。
//   问第五个小朋友几岁了，第五个小朋友说3岁了。
//   问第一个小朋友几岁了？
// 要求：控制台输出第一个小朋友的年龄是几岁
// var a = 3;
// for (var i = 5; i > 0; i--) {
//     a = a + 2;
// }
// console.log("第一个小朋友" + a + "岁")


// 38.使用for循环语句计算3+6+9+12+……+99的结果
// var sum = 0
// for (i = 3; i = 99; i++) {
//     if (i % 3 == 0) {
//         sum += i
//     }
// }
// console.log(sum)
// 39.输出1加到100（去掉3的倍数）的和
// var sum = 0
// for (i = 1; i <= 100; i++) {
//     if (i % 3 != 0) {
//         sum += i
//     }
// }
// console.log(sum)
// 40.求1-100之间所有数的积
// var sum = 1
// for (i = 2; i <= 100; i++) {
//     sum *= i
// }
// console.log(sum)


// 1. 转字符串类型的时候，有哪些限制？
// undefined null不能使用toString方法。
// 2. 关于变量命名的规则有哪些
// 不能以数字开头，只能包含字母 数字 下划线，不能有特殊字符。
// // 3. Console.log(true&&false||true)和console.log(false || true&&false)的结果分别是什么，并解释为什么
// Console.log(true&&false||true)//true.  在或者这个符号里，只要有一个真便是真。
//   console.log(false || true&&false)//false 首先在与中有一个假便是假，得到false||false  俩个false  就是假。
// // 4. 将一行字符串分多行显示，有几种写法，分别是什么
// 第一种用 反引号包起来``
// 第二种  用引号包起来，换行后用反斜杠拼接
// 第三种  用引号包起来，换行后用+号拼接。