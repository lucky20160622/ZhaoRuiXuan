// 15.写一个函数，求100 - 200 之间所有数的和
function sum(num1,num2){
    var sum2=0
    for(var i=num1;i<=num2;i++){
        sum2+=i
    }
    return sum2;
}
console.log(sum(100,200));