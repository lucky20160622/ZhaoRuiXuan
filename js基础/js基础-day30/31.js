//先定义一个函数
function iszhishu(num){
    //然后for循环输出2到num之间的数字，为什么要从2开始呢，因为求一个数的质数，质数是能被1整除的  所以要从二开始
    for(var i=2;i<num;i++){
        //判断语句 假如num%i==0 则这个数就不是质数 可以被除了他本身以外的数整除
        if(num%i==0){
            //返回false   就不是质数
            return false
        }
    }
    //否则返回true  这个数是质数
    return true
}
//调用函数
console.log(iszhishu(7));





// function getday(year, month, day) {
//     let days = day
//     if (month < 2) {
//         return days
//     }
//     let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     for (i = 0; i < month - 1; i++) {
//         days += months[i]
//     }
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 && month > 2) {
//         days++
//     }
//     return days
// }
// console.log(getday(2000, 3, 1)) 


// function getday(year,month,day){
//     let days=day
//     if(month<2){
//         return days
//     }
//     let months=[31,28,31,30,31,30,31,31,30,31,30,31]
//     for(i=0;i<month-1;i++){
//         days=months[i]
//     }
//     if(year%4==0&&year%100!=0||year%400==0&&month>2){
//         days++
//     }
//     return days
// }
// console.log(getday(2000,3,));


// 调用函数

console.log(getDay(2019,4,1));


function getDay(year,mth,day) {

    // 创建两个数组，分别是平年和闰年 

    let PingNian = [31,28,31,30,31,30,31,31,30,31,30,31];
    let RunNian = [31,29,31,30,31,30,31,31,30,31,30,31];

    // 创建一个变量来累加和
    let sum = 0;

    // 判断是否是闰年
    if (year % 400 == 0 || year % 100 !=0 && year % 4 == 0) {

        // 计算天数
        for (let i = 0; i < mth - 1; i++) {

            // 累加当前月份之前的天数
            sum = sum + RunNian[i];
           
        }
        //返回sum+天数
        return sum+day;
   }else {

        // 计算天数
        for (let i = 0; i < mth - 1; i++) {
  // 累加当前月份之前的天数
            sum = sum + PingNian[i];
            
        }
        //返回sum+天数
        return sum + day;
    }   
} 
console.log(getDay(2000,3,1));
function getDay(year,month,day){
    let PingNian=[31,28,31,30,31,30,31,31,30,31,30,31]
    let RunNian=[31,29,31,30,31,30,31,31,30,31,30,31]
    let sum=0
    if(year%4==0&year%100!=0||year%400==0){
        for(i=0;i<month-1;i++){
            sum = sum + RunNian[i];
        }
        return day+sum
    }else{
        for(i=0;i<month-1;i++){
            sum = sum + PingNian[i];
    }
    return day+sum
}
}
