var num=123
var sum=0
var g=parseInt(num%10)
var s=parseInt(num/10%10)
var b=parseInt(num/100)
sum=g*g*g+s*s*s+b*b*b
console.log(sum);