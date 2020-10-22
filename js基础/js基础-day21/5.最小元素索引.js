// 5.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引，如果这样的元素个数大于1，则返回索引最小的数的索引
var arr= [1,2,4,5,10,100,2,-22]
var min=arr[0]
for(var i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(arr.indexOf(min));