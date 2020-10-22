// 13. 将下面的数组元素前后互换
// [11, 32,55, 47,79,23]	
//  置换后的数组元素为：
//  [23, 79, 47, 55, 32, 11]

var arr=[11, 32,55, 47,79,23];	

for(var i = 0;i<arr.length/2;i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
console.log ( arr );