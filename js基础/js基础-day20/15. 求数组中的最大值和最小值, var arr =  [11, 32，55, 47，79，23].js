// 15. 求数组中的最大值和最小值, var arr =  [11, 32,55, 47,79,23]	
var arr =  [11, 32,55, 47,79,23]	
var max=arr[0]
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)

//最小值
var min=arr[0]
for(var i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)