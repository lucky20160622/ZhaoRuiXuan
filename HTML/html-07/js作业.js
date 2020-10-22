//  1.一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？
let water=0
let sum=0
for(var i=0;i<=80;i++){
    if(water<80){
        sum++
        water+=5
    }if(water==80){
        break
    }
}
console.log(`小和尚要挑${sum}次水`);

//  2. 若用户猜的小于50，提示：猜小了；否则提示猜大了；猜中了，提示：中奖了(不能继续猜谜)，(用while实现)
var people=50
var num=50
var i=1
while(i<=3){
    if(people<num){
        console.log('猜小了');
    }if(people>num){
        console.log('猜大了');
    }if(num==people){
        console.log('中奖了');
        break
    }
    i++
}

//  3. 假设某人有100,000现金。每经过一次路口需要进行一次交费。交费规则为当他现金大于50,000时每次需要交5%如果现金小于等于50,000时每次交5,000。请写一程序计算此人可以经过多少次这个路口
let money=100000
var num=0
for(var i=0;i<100000;i++){
    if(money>50000){
        num++
        money=money-money*(1/20)
    }if(money>5000&&money<50000){
        num++
        money=money-5000
    }if(money<5000){
        break
    }
    
}
console.log(`可以经过${num}次路口`);
// 4.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出100以内的所有完数、
for(var i=1;i<=100;i++){
    var num=0
    for(var j=1;j<i;j++){
        if(i%j==0){
            num+=j
            if(num==i){
                console.log(i);
            }
        }
    }
}
// 5.求1!+2!+3!+...+20!的和
var num = 0
cheng = 1
for (var i = 1; i <= 20; i++) {
    for (var j = 1; j <= i; j++) {
        cheng *= j
        num += cheng
    }
}
console.log(num);