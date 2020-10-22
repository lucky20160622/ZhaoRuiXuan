// 11.写一个函数，求任意一个数的阶乘
function jc(num){
    var sum=1
for(var i=1;i<=num;i++){
    sum*=i
}
return sum
}
console.log(jc(8));