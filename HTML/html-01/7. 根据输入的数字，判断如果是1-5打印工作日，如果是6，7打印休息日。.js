// 7. 根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
var num=6
if(num<=5){
    console.log('工作日');
}else if(num==6||num==7){
    console.log('休息日');
}