// 1.录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"
var num=0
if(num<=5&&num>2){
    console.log('春季');
}
else if(num<=8&&num>5){
    console.log('夏季');
}else if(num<=11&&num>8){
    console.log('秋季');
}else if(num<=2||num==12){
    console.log('冬季');
}