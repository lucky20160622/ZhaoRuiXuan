// 21.用户输入“你是男人吗？”，回答如果是true， 那么输出“原来你是男人呀，呵呵”，  如果回答是：false，那么输出“你的性别难道是女?”。
// var gender = true
// if (gender == true) {
//     console.log('原来你是男人啊，呵呵')
// } else {
//     console.log('你的性别难道是女？')
// }
// 22.输入两个整数，放入到a与b变量中去， 如果a>=b就将a与b中的值进行交换，否则就不交换
// var a = 15
// var b = 10
// var num = a
// if (a >= b) {
//     a = b
//     b = num
// }
// console.log(a)
// console.log(b)
// 23.输入一个三位整数，判其是不是降序数如:531是降序数 百位>十位>个位
// var num = 852
// num1 = num % 10
// num2 = parseInt(num / 10 % 10)
// num3 = parseInt(num / 100 % 10)

// if (num3 > num2 && num2 > num1) {
//     console.log('是降序数')
// } else {
//     console.log('不是降序数')
// }
// 24.用户输入”你爱我吗？”,如果回答的是”yes”,则输出”你是爱我的”,如果回答的是”no”,则输出”原来你不爱我”,如果回答的是其它，则输出”你到底是爱还是不爱，自己也不清楚”
// var b = ('no');
// if (b == 'yes') {
//     console.log('你是爱我的')
// } else if (b == 'no') {
//     console.log('原来你不爱我')
// } else {
//     console.log('你到底爱还是不爱，自己也不清楚')
// }
// 25.利用JavaScript编写程序：张三为他的手机设定了自动拨号
// 按 1：拨爸爸的号
// 按 2：拨妈妈的号
// 按 3：拨爷爷的号
// 按 4：拨奶奶的号
// var num = 2
// if (num == 1) {
//     console.log('拨爸爸的电话')
// } else if (num == 2) {
//     console.log('拨妈妈的电话')
// } else if (num == 3) {
//     console.log('拨爷爷的电话')
// } else if (num == 4) {
//     console.log('拨奶奶的电话')
// }
// 26.利用JavaScript编写程序实现如下功能；普通顾客购物满 100 元打 9 折；会员购物打 8 折；会员购物满 200 打 7.5 折。
// var vip = false //先判断是不是会员  如果是true就是会员   反之就不是会员
// var a = 101
// if (vip == true) {
//     if (a >= 200) {
//         a *= 0.75
//     }
// } else {
//     if (a >= 100) {
//         a *= 0.9
//     }
// }
// console.log(a)
// 27.利用JavaScript编写程序，根据用户定义的运算符，如果是+号，则求出2个数的和；如果是-号，则求出2个数的差；如果是*号，则求出2个数的积;如果是/号，则求出2个数的商；如果是%,求出2给数的余数；否则打印输入有误。
// var num1 = 100
// var num2 = 200
// var sum = 0
// var str = '+'
// if (str == '+') {
//     sum = num1 + num2
// } else if (str == '-') {
//     sum = num1 - num2
// } else if (str == '*') {
//     sum = num1 * numm2
// } else if (str == '/') {
//     sum = num1 / num2
// } else if (str == '%') {
//     num1 % num2
// } else {
//     console.log('打印错误')
// }
// console.log(sum)
//28.利用JavaScript编写程序，定义一个变量num并且赋值,
// 1)如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2)如果 num 能被 3 整除，返回字符串 fizz
// 3)如果 num 能被 5 整除，返回字符串 buzz
// 4)如果num不是 Number 类型，返回 false
// 5)其余情况，返回参数 num
// var num = 75
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log('fizzbuzz')
// } else if (num % 3) {
//     console.log('fizz')
// } else if (num % 5) {
//     console.log('buzz')
// } else if (isNaN(num)) {
//     console.log('false')
// } else {
//     console.log('num')
// }
// 29. 有个人想知道， 一年之内一对兔子能繁殖多少对？
// 于是就筑了一道围墙把一对兔子关在里面。 已知一对兔子每个月可以生一对小兔子， 而一对兔子从出生后第3个月起每月生一对小兔子。
// 假如一年内没有发生死亡现象， 那么， 一对兔子一年内（ 12 个月） 能繁殖成多少对？（ 不要看这些文字） 这是著名的斐波那契数列
//兔子的规律为数列，1，1，2，3，5，8，13，21    斐波那契系数 前两个数的和等于后一个  (拔高题)
// var arr = [1, 1]
// for (i = 2; i < 12; i++) {//2代表前面俩个数的和等于后一个
//     arr[i] = arr[i - 1] + arr[i - 2]
// }
// console.log(arr[arr.length - 1])
// 二、简答题
// 1. 什么情况下控制台会输出undefined
// 声明一个变量，但未赋值的情况下会出现undefined;
// 2. 字符串可以解析变量嘛？怎么解析
// 可以解析变量，`${变量名}`
// 3. Js中的‘+’有几层含义，分别是什么
// 有俩层含义，分别是代表数字中的加号和字符串的拼接
// 4. console.log(1+’false’)和console.log(1+false)的值，并解释为什么
// console.log(1+'false')//1false   因为这个加号在这里代表的是连接的意思。拼接字符串
// console.log(1+false)//1          这个加号在这里就只代表加号，false=0,所以1+0=1