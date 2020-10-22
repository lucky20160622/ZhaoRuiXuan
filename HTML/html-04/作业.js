// 1.求1-100之间的所有数的和
var sum=0
for(i=1;i<=100;i++){
    sum+=i
}
console.log(sum);


// 2.求1-100之间所有偶数的和，以及偶数的个数
var num=0
var sum=0
for(var i=0;i<=100;i++){
    if(i%2==0){
        sum+=i
        num++
    }
}
console.log(sum,num);


// 3.求2000-3000年之间的所有的闰年以及个数
var sum=0
for(var i=2000;i<=3000;i++){
    if(i%4==0&&i%100!=0||i%400==0){
sum++
    }
}
console.log(sum);

// 4. 求10的阶乘
var num=1
for(var i=1;i<=10;i++){
    num*=i
}
console.log(num);
// 5.打印九九乘法表
for(var i=1;i<=9;i++){
    var str=''
    for(var j=1;j<=i;j++){
        str+=j+'x'+i+'='+j*i+' '
    }
    console.log(str);
}