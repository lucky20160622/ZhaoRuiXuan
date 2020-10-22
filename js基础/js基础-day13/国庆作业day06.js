// 51.我们正在玩一个猜数字游戏。 游戏规则如下：
// 我从 1 到 100选择一个数字。 你需要猜我选择了哪个数字。
// 每次你猜错了，我会告诉你这个数字是大了还是小了,如果你猜大了，输出”猜大了”；如果猜小了，输出”猜小了”；如果猜对了，则输出“恭喜你，猜对了”

// 52. 求出100-1000中，各个数字之和是12,这样的三位数有多少个，在控制台打印出来
// var sum = 0
// for (var i = 100; i <= 1000; i++) {
//     var num1 = i % 10
//     var num2 = parseInt(i % 10 / 10)
//     var num3 = parseInt(i % 10 / 100)
//     sum = num1 + num2 + num3
//     if (sum == 12) {
//         console.log(i)
//     }
// }

// 53. 输入一个数，判断这个数是否是素数；
// var num = 100
// var flage = true
// for (i = 2; i <= 100; i++) {
//     if (num % i == 0) {
//         flage = false
//     }
// }
// if (flage) {
//     console.log('这个数是素数')
// } else {
//     console.log('这个数不是素数')
// }



// 54. 找出一个数的所有因子数
// var sum = 20
// for (i = 1; i <= 20; i++) {
//     if (sum % i == 0) {
//         console.log(i)
//     }
// }



// 55.输入一个整数放入到变量n中，如果这个整数大于0，那么计算1+2+3+……+(n-1)+n的   
// var n = 10;
// var sum=0;
//  for (var i=1;i<=n;i++){
//     sum+=i;
//  }
// console.log(sum);


// // 56.输入年份和月份，例如：输入2019 ,9，控制台输出‘时间是2019年9月’
// var month = 9
// console.log('时间是' + year + '年' + month + '月')


// 57.根据条件确定公司是否已经为司机投保
//  如果司机满足下列条件之一，公司则为他们投保；
// 1)	司机已婚。
// 2)	司机为30岁以上的未婚男性
// 3)	司机为25岁以上的未婚女性。
//  如果以上条件一个也不满足，则公司不为司机投保。
// 请编写一个程序，根据用户输入司机的婚姻状况、性别和年龄，判定该司机是否已经投保。
// var obj = {
//     hunyin: 'false', //true代表已婚  false代表未婚
//     gender: '男',
//     age: '25'

// }
// if (obj.hunyin) {
//     console.log('该司机已经投保')
// } else if (obj.age > 30 && obj.gender == '男') {
//     console.log('该司机已经投保')
// } else if (obj.age > 25 && obj.genrder == '女') {
//     console.log('该司机已经投保')
// } else {
//     console.log('该司机未投保')
// }


// 58.求任何一个数的阶乘
// var num = 6;
// var sum = 1;
// for (var i = 2; i <= num; i++) {
//     sum *= i
// }
// console.log(sum);

// 59.在控制台倒序输出100,99,98,97,96,95.....1
// for (var i = 100; i > 0; i--) {
//     console.log(i)
// }


// 60.计算10个99相加后的值并输出。
// var sum = 0
// for (i = 10; i <= 99; i++) {
//     sum += 99
// }
// console.log(sum)


// // 1. null和undefined分别代表的含义是什么
// null代表空值，undefined代表未赋值
// // 2. 布尔类型有几个值？分别代表什么
// 有俩个值，ture代表真，false代表假
// // 3. 说出至少三种执行js代码的方式
// node vscode 网页中执行
// // 4. 怎么定义一个数组，并且获取数组小标对应的某一项的值
// var arr[]
// console.log(arr[元素号])