// 41.入职薪水10K，每年涨幅5%，输出50年后工资多少
// var sum = 10000
// for (i = 1; i <= 50; i++) {
//     sum += sum * 0.05

// }
// console.log(sum)


// 42.求出1-1/2+1/3-1/4…..-1/100的和（拔高题）



// 43.用for循环求2+22+222+2222+22222的和
// var sum = 0
// for (var i = 1; i <= 22222; i++) {
//     var num1 = i % 10;
//     var num2 = parseInt(i / 10 % 10)
//     var num3 = parseInt(i / 100 % 10)
//     var num4 = parseInt(i / 1000 % 10)
//     var num5 = parseInt(i / 10000)
//     if (i < 10) {
//         if (num1 == 2) {
//             sum += i
//         }
//     }

//     if (i < 100) {
//         if (num1 == 2 && num2 == 2) {
//             sum += i
//         }
//     }
//     if (i < 1000) {
//         if (num1 == 2 && num2 == 2 && num3 == 2) {
//             sum += i
//         }
//     }
//     if (i < 10000) {
//         if (num1 == 2 && num2 == 2 && num3 == 2 && num4 == 2) {
//             sum += i
//         }
//     }
//     if (i < 100000) {
//         if (num1 == 2 && num2 == 2 && num3 == 2 && num4 == 2 && num5 == 2) {
//             sum += i
//         }
//     }
// }
// console.log(sum)



// 44.定义一个人的对象，有name,age,gender,height等属性，
// 要求：1)获取name的值
// 2)	通过2种方式给对象添加一个新的属性weight,值自己写
// 3)	删除属性名height
// var obj = {
//     name: 'zrx',
//     age: '18',
//     height: '180',
//     gender: '男'

// }
// console.log(obj.name) //获取name的值
// var attrName = 'weught'
// obj[attrName] = '160KG'
// obj.weight = 150
// console.log(obj.weight) //添加一个新的weight属性

// delete obj.height //删除属性名weight
// console.log(obj)



// 45.定义一个数组，取出下标是3的值，计算下表是2和下表是4对应的元素的和，并且赋值给一个变量，在控制台输出
// var num = [18, 26, 32, 47, 55, 66]
// console.log(num[3])
// num1 = num[2] + num[4]
// console.log(num1)



// 46.定义一个二维数组，var arr = [1,2,’3’,true,[22,33,55,66]],将55输出在控制台上
// var arr = [1, 2, '3', true, [22, 33, 55, 66]]
// console.log(arr[4][2])



// 47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，以后都吃剩下的一半+1个 到第10天只剩一个了 问第一天摘了多少桃子？
// var sum = 1
// for (i = 1; i <= 10; i++) {
//     sum = (sum + 1) * 2
// }
// console.log(sum)



// 48.控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和
// var sum1=1; 
// var sum2=0; 
// for(var i=1;i<=20;i++) {
// for(var j=1;j<=i;j++) {
// sum1=sum1*j;
// }
// sum2=(1/sum1)+sum2;
// }
// console.log(sum2);



// 49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果
// var sum = 1
// for (i = 1; i <= 20; i++) {
//     sum *= i
// }
// console.log(sum)


// 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？
// var sum = 0;
// for (var i = 100; i <= 500; i++) {
//     var num1 = i % 10;
//     var num2 = parseInt(i / 10 % 10)
//     var num3 = parseInt(i / 100 % 10)
//     if (num1 == 4 || num2 == 4 || num3 == 4) {

//     } else {
//         sum += 1

//     }
// }
// console.log(sum)



// // 1. 怎么将别的数据类型转换成字符串类型
// 使用tostring  或者string  例如 ：console.log(string(null))     console.log(toString(null))


// // 2. 怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性
// 先定义一个空对象，然后再给对象属性赋值。例如 var obj={}  var new obj={}       
// //获取对象属性console.log(对象名.对象属性)  //删除对象属性delete对象名.对象属性   
// // 添加属性  对象.对象名=赋值   例如 obj.age=18  console.log(obj.age)

// // 3. == 和 === 的区别是什么？
// ==代表属性值相等  ===代表属性值相等并且数据类型也要一样
// // console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么
// console.log(1=='1')// true 因为把字符串转换成布尔的话就是ture   1转换成布尔也是ture  
// console.log(1 === fasle)//false  把一转换成布尔就是true  俩者的数据类型不同，并且值也不一样


// // 4. 前++ 后++的区别是什么
// 前++代表  先赋值再计算    后++代表先计算后赋值