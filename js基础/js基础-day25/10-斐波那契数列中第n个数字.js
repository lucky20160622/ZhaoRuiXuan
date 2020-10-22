// 10. 写一个函数，求斐波那契数列fibonacci中的第n个数是多少？？1  1  2  3  5   8  13  21 
function num(n){
    var a=1
var b=1
var c=0
for(var i=2;i<n;i++){
    c=a+b
    a=b
    b=c
}
return c
}
console.log(num(30));