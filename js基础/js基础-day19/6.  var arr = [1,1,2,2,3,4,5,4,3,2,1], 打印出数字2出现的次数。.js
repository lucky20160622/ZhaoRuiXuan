// 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。
var arr = [1,1,2,2,3,4,5,4,3,2,1]
var sum=0
for(var i=0;i<arr.length;i++){
    if(arr[i]==2){
        sum+=1
    }
}console.log('数字2出现的次数为'+sum+'次')