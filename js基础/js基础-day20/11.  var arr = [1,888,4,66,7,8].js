// 11.  var arr = [1,888,4,66,7,8]
// 要求，可以把数组中的下标为 3 的元素移到数组的开头  
var arr=[1,888,4,66,7,8]
var num=arr[3]
arr[0]=arr[3]
arr[0]=num
console.log(arr);