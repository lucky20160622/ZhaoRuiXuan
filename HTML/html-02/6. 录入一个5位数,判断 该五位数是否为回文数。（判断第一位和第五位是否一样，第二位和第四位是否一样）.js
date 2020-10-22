// 6. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
var num=12321
var ge=parseInt(num%10)
var shi=parseInt(num/10%10)
var bai=parseInt(num/100%10)
var qian=parseInt(num/1000%10)
var wan=parseInt(num/10000)
if(ge==wan&&shi==qian){
    console.log(num+'是回文数');
}else{
    console.log(num+'不是回文数');
}