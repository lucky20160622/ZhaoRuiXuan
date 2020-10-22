//1.打印九九乘法表
// for (var i = 1; i <= 9; i++) {
//     var str = ''
//     for (var j = 1; j <= i; j++) {
//         str += j + 'x' + i + '=' + j * i + ' '
//     }

//     console.log(str)
// }




// 2.打印闪电
/**
 *     *
 *     **
 *     ***
 *     *******
 *      ***
 *      **
 *      *
 */

// var str=""
// for(var i =0; i<1; i++){
//     str+="*";
// }
// console.log(str)
// var str=""
// for(var i =0; i<2; i++){
//     str+="*";
// }
// console.log(str)
// var str=""
// for(var i =0; i<3; i++){
//     str+="*";
// }
// console.log(str)
// var str=""
// for(var i =0; i<5; i++){
//     str+="*";
// }
// console.log(str)
// var str=' '
// for(var i =0; i<3; i++){
//     str+="*";
// }
// console.log(str)
// var str =' '
// for(var i =0; i<2; i++){
//     str+="*";
// }
// console.log(str)
// var str =' '
// for(var i =0; i<1; i++){
//     str+="*"
// }
// console.log(str)

// // 3.打印下列图形
// /**
//  *         *********
//  *        *******
//  *       *****  
//  *      ***
//  *     *
//  */
// for (var i = 9; i >= 1; i-=2) {
//     var str='';
//   for (var k = i; k >= 1; k-=2) {
//     str+=' ';
//   }
//   for (var j = 1; j <=  i; j++) {
//     str+="*";
//   }
//   console.log(str);
// }


// // 4.打印金字塔

// var s = Math.floor(7 / 2) + 1;
// for (var i = 1; i <= 7; i++) {
//     var str='';
//   for (var k = 1; k <= Math.abs(s - i); k++) {
//     str+="_";
//   }
//   for (var j = 1; j <= 2 * s - 1 - 2 * Math.abs(s - i); j++) {
//     str+="*";
//   }
//   console.log(str);
// }



// // 5. 5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？
// for (var i = 0; i < 100; i++) {
//     if (i % 3 == 0) {
//         for (var j = 0; j < (100 - i); j++) {
//             if (i * 1 / 3 + j * 5 + (100 - i - j) * 3 == 100) {
//                 console.log("雏鸡" + i * 1 / 3 + "文买" + i + "只，公鸡"
//                     + j * 5 + "文买" + j + "只，母鸡" + (100 - i - j) * 3
//                     + "文买" + (100 - i - j) + "只");
//             }
//         }
//     }
// }

// // 6.有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，第三个里面放4，求棋盘上放的所有芝麻的重量
// var kg;
// var sum = 1;
// for (var i = 1; i < 64; i++) {
//     sum *= 2;
//     console.log(sum);
// }
// kg = sum * 0.00001;
// console.log(kg)


// // 7.大马驮2石粮食，中马驮1石粮食，两头小马驮一石粮食，要用100匹马，驮100石粮食，该如何调配？
// for(var i=0;i<=50;i++){
//     　　for(var a=0;a<=100;a++){
//     　　　　for(var b=0;b<=100;b++){
//     //做三次循环，分别是小中大马的数量
//     　　　　if((i*2+a+b/2==100)&&(i+a+b==100)){
//     //做判断，大马x2+中马(1)+小马/2的数量为100，且三种马的数量加起来等于100
//     　　　　　　console.log("大"+i+"中"+a+"小"+b);
//     //输出结果
//     　　　　　　}
//     　　　　}
//     　　}
//     }


// // 8.有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？有多少个，有哪些三位数？
// var sum=0;

// for(var i = 1; i < 5; i ++){
//     for(var j = 1; j < 5; j ++){
//         for(var k = 1; k < 5; k ++){
//             if(i != j && j != k && k != i){
//                 sum+=1;
//                 console.log("1、2、3、4个数字能组成的三位数有" + i + j + k );
//             }
//         }
//     }
// }
// console.log('有'+sum+'个');

// // 9.输入某年，某月，某日，判断这一天是一年中的第几天？
// var years=1999;
// var month=1;
// var day=1;
// var days=0;
// if (month == 1) {
//     days=day;
// }
// var months=[31,28,31,30,31,30,31,31,30,31,30,31];
// for (var i=0;i<month-1;i++) {  
//     days += months[i];
// }
// if ((years % 4 == 0 && years % 100 != 0 || years % 400 == 0)  && month>2) {  
//     days++;     
// }
// console.log('今天是今年的第'+days+'天');