// 5. 分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数
var score = [80,90,85,90,78,88,89,93,98,75];
var num=0
var avg=0
var sum=0
for(var i=0;i<score.length;i++){
    if(score[i]<60){
        num+=1
    }sum+=score[i]
}avg=sum/score.length
console.log('班级不及格人数为'+num);
console.log('班级的平均分为'+avg);
console.log('班级的总分数为'+sum);