// 1.将1-100倒着打印出来
// for(var i=100;i>=1;i--){
//     console.log(i);
// }
// 2.求整数1～100的累加值，但要求跳过所有个位为4的数
// var num=0
// for(var i=0;i<=100;i++){
//     var g=i%10
//     var s=parseInt(num/10)%10
//     if(g==4){
//         continue;
//     }if(s==4){
//         continue;
//     }
//     console.log(i);
// }

// 3.找到100到200之间第一个能被7整除的数字
// var num=0
// for(var i=100;i<=200;i++){
//     if(i%7==0){
//      num++
//     }if(num==1){
//         break
//     }
// }
// console.log(i);
// 4. 利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字
// for(var i=1;i<=1000;i++){
//     if(i%5==0||i%6==0){
//         console.log(i);
//     }
// }
// 5.求1到100所有不能被3整除的整数的第一个大于2000的和
// var num=0
// for(var i=1;i<=100;i++){
//     if(i%3!=0){
//     num+=i
//     }if(num>2000){
//         break
//     }
// }
// console.log(num);