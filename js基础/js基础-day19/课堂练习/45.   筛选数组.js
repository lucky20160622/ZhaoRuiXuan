// 将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组。\
var num=[]
var arr=[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]
for(i=0;i<arr.length;i++){
    if(arr[i]>10){
        num.push(arr[i])
    }
}
console.log(num);