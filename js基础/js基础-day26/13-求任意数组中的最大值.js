// 13.写一个函数,求任意数组中的最大值,
function arrmax(arr){
  var max=arr[0]
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
  
}  return max;
}

console.log(arrmax([55,20,62,81,99]));