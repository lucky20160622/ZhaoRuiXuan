//判断一个数是否为质数
function iszhishu(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true;
}
console.log(iszhishu(5));
//输出true则为质数，false便不是质数；


//求年月日
function getDay(year,month,day){
    let PingNian=[31,28,31,30,31,30,31,31,30,31,30,31]
    let RunNian=[31,29,31,30,31,30,31,31,30,31,30,31]
    let sum=0
    if(year%4==0&&year%100!=0||year%400==0){
        for(let i=0;i<month-1;i++){
        sum=sum+RunNian[i]
        }
        return sum+day
    } 
     for(let i=0;i<month-1;i++){
        sum=sum+PingNian[i]
         }
         return sum+day
}
console.log(getDay(1998,3,1));