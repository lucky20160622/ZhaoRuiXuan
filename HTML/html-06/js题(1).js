// // 1. 打印1-100中前三个是17的整数倍的数。
// var num=0
// for(i=1;i<=100;i++){

//     if(i%17==0){
//         num++
//         console.log(i);
//     }if(num==3){
//         break
//     }
   
// }

// // 2. 求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.(while实现)
// var i=1
// var num=0
// while(i<=100){
//     if(i%3==0&&i%5==0){
//         num+=i
//     }
//     i++
// }
// console.log(num);
// // 3. 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。
// for(var i=1;i<=30;i++){
//     switch(i){
//         case 4:
//         case 7:
//         case 14:    
//         case 18:
//         case 24:
//             break;
//             default:
//             console.log(i);  
//             break;  
//     }
// }
var i=1;
while (i<=30) {
    // switch(i){
    //     case 4:
    //     case 7:
    //     case 14:    
    //     case 18:
    //     case 24:
    //         break;
    //         default:
    //         console.log(i);  
    //         break;  
    // }

    if(i==4||i==7||i==14||i==18||i==24){

    }else{
        console.log(i);
    }
    i++
}

// // 4. 遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台（while实现）
// var num=0
// var i=1
// while(i<=100){
//     if(i%5==0){
//         num++
   
//     }
//     i++
// }
// console.log(num);

// 5.一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）？

// var  num=0
// var width=0.08
// while(true){
//     width*=2
//     num++
//     if(width>8848130){
//         console.log(num);
//         break
//     }
// }