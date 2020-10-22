// // 1. 100以内7的倍数的总和
// var num=0
// for(var i=0;i<=100;i++){
//     if(i%7==0){
//         num+=i
//     }
// }
// console.log(num);
// // 2. 用户输入一个数字，列出所有它能够整除的数字。
// var num = 6;
// for (i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

// // 3. 利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
// for(var i=1;i<=1000;i++){
//     if(i%5==0||i%6==0){
//         console.log(i);
//     }
// }
// 4. 利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
// for (var i = 2; i <= 100; i++) {
//     var c = 0
//   for (var j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       c++;
//     }
//   }
//   if(c==2){
//       console.log(i);
//   }
// }

// 5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
for (var i = 0; i <= 100; i++) {
  var ge = i % 10;
  var shi = parseInt(i / 10) % 10;
  var bai = parseInt(i / 100);
  if (ge == 3) {
    continue;
  }
  console.log(i);
}

