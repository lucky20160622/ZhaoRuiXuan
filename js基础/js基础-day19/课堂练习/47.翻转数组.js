// 将数组 ['top', 'right', 'bottom', 'left', 'center'] 的内容反过来存放
var arr=['top', 'right', 'bottom', 'left', 'center']
var newarr=[]
for(var i=arr.length-1;i>=0;i--){
    newarr.push(arr[i]);
} 

console.log(newarr);