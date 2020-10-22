// 9.定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。

var arr = [1, 3, 4, 7, 8];
var num=0
for(var i=0;i<arr.length;i++){
    if(i%2==0&&arr[i]%2==0){
        num+=1
        console.log(arr[i])
    }
}console.log(num)