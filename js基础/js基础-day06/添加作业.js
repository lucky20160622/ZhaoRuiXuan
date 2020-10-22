21. 录入月份， 输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"
// var a = 12
// if (a > 0 && a < 13) {

//     if (2 < a && a < 6) {
//         console.log("春季")
//     } else if (5 < a && a < 9) {
//         console.log("夏季")
//     } else if (8 < a && a < 12) {
//         console.log("秋季")
//     } else {
//         console.log("冬季")
//     }
// }
// 22. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
// var num = 12321;

// var num1 = num % 10;
// var num2 = parseInt((num / 10) % 10)
// var num3 = parseInt((num / 100) % 10)
// var num4 = parseInt((num / 1000) % 10)
// var num5 = parseInt(num / 10000)

// if (num1 == num5 && num2 == num4) {
//     console.log(num + '是一个回文数');
// } else {
//     console.log(num + '不是一个回文数');

// }

// 23. 利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几

// var day = 6;
// var a = 1000 % 7;
// var b = day + a - 7;
// console.log(b);
// // 24.一个加油站为了鼓励车主多加油，所以加的多有优惠。
// //       92号汽油，每升6元；如果大于20升，那么超出部分每升5.9；
// //       95号汽油，每升7元；如果大于30升，那么超出部分每升6.95
// //       编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。

// var oil = 95;
// var L = 20;
// if (oil == 92) {
//     if (L <= 20) {
//         console.log("应支付：" + 6 * L)
//     } else {
//         console.log("应支付：" + 5.9 * L)
//     }
// } else {
//     if (L <= 30) {
//         console.log("应支付：" + 7 * L)
//     } else {
//         console.log("应支付：" +6.95* L)
//     }
// }oo
// // 25. 收先接收用户输入的用户名，判断该用户名是否是admin,如果不是直接程序终止，如果是那么再次提示让用户输入密码,如果密码是88888,那么提示登录成功，否则提示登录失败
//     var username='adin';
//     var userpassword=8888;
//     if (username=="admin") {
//         if(userpassword==88888){
//             console.log("登录成功");
//         }else{
//             console.log('登录失败');
//         }
//     }else{
//         console.log("用户名错误");
//     }




// // 26. 100以内7的倍数的总和
// var sun=0;
// for (var i = 1; i <= 100; i++) {
//     if (i%7==0) {
//         sun+=i;
//     }
// }
// console.log(sun);


// //27.求1!+2!+3!+...+10!的和

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     var tmp = 1;
//     for (var t = 1; t <= i; t++) {
//         tmp *= t;
//     }
//     sum += tmp;
// }
// console.log("结果是:" + sum);

// 28.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只
// var a = 94
// var b = 35

// for (var i = 0; i < b; i++) {
//     if (i * 2 + (b - i) * 4 == a) {
//         console.log('鸡的数量为' + i);                  
//         console.log('兔的数量为' + (b - i));
//     }
// }


// var a = 35
// var b = 94
// t = b / 2 - a
// j = a - t
// console.log(j, t)



// 29.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出1000以内的所有完数。
// for (i = 1; i <= 1000; i++) {
//     var sum = 0;
//     for (j = 1; j <= i/2; j++) {
//         if (i % j === 0) {
//             sum += j;
//         }
//     }
//     if (sum === i) {
//         console.log(sum);;
//     }
// }

// // 30.输出2-200之间的所有素数（素数就是只能被1和其本身整除的数）

// for (var i = 2; i < 200; i++) {
//     var b = false;
//     for (var k = 2; k < i; k++) {
//         if (i % k == 0) {
//             b = true;
//         }
//     }
//     if (!b) {
//         console.log(i);
//     }
// }

// // 31.解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出101到200之间的整数一共有多少个3。
// var sum=0;
// for (var  i = 101; i < 200; i++) {
//         var ge=i%10;
//         var shi=(i-ge)/10%10;
//        if (ge==3&&shi==3) {
//            sum+=2
//        }else if(ge==3||shi==3){
//         sum+=1
//        }
//     }
// console.log('101到200之间的整数一共有'+sum+'个');


// // 32.某同学参加计算机大赛：
// // 		如果获得第1名，将参加清华大学组织的1个月夏令营；
// // 		如果或得第2名，将奖励联想笔记本电脑一部；
// // 		如果获得第3名，将奖励移动硬盘一个；
// // 否则没有任何奖励；

// var  classmate =1;

// if (classmate=1) {
//     console.log("参加清华大学组织的1个月夏令营");
// }else if (classmate=2) {
//     console.log("奖励联想笔记本电脑一部");
// }else if (classmate=3) {
//     console.log("奖励移动硬盘一个");
// }else {
//     console.log("没有任何奖励");
// }


// // 33.利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
// for (var  i = 1; i <= 1000; i++) {
//     if (i%5==0||i%6==0) {
//         console.log(i);
//     }
// }

// // 34.求任意一个数字的约数有哪些

// var num = 48; 
// for(var i = 1; i <= num; i++) {
//     if(num % i == 0){
//        console.log(i);
//     }
// }

// // 35.1-100之间所有数的总和 与 平均值
// var sum=0;
// for (var  i = 1; i <= 100; i++) {
//    sum+=i;

// }
// console.log("1-100之间所有数的总和"+ sum);
// console.log("1-100之间所有数的平均值"+ sum/(i-1));

// // 36.求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.
// for (var  i = 1; i <= 100; i++) {
//     if (i%3==0&&i%5==0) {
//         console.log(i);
//     }
//  }


// 37.要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。
// for (var i=1;i<50;i++){
//     if (2*3.14*i<50) {
//         console.log(i);
//     }
// }*



// // 38.遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台
// var number=0;
// for (var  i = 1; i <= 100; i++) {
//     if (i%2==0) {
//         if (i%5==0) {
//             number++
//         }
//     }
//  }
//  console.log(number);