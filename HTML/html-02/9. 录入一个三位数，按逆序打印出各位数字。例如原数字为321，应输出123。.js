
// 9. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
var num=123
var g=parseInt(num%10)
var s=parseInt(num/10%10)
var b=parseInt(num/100%10)
var sum=0
sum=`${g}${s}${b}`
console.log(sum);

