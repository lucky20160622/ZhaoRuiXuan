// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
var num=65
if(num>90){
    console.log('A');
}else if(num>=80){
    console.log('B');
}else if(num>=70){
    console.log('C');
}else if(num>=60){
    console.log('D');
}else if(num<60){
    console.log('E');
}