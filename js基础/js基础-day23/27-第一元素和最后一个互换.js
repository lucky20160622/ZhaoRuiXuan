
// 27.将下面的数组元素前后互换，不能定义新的数组，在原数组上面操作，需要第一个元素和最后一个元素互换位置，第二个元素和倒数第二个元素互换位置，依次类推
//                   [11, 32，66, 47，79，23，89]	
//                 置换后的数组元素为：
//                   [89, 23, 79, 47, 66, 32, 11]




// var arr = [11, 32, 66, 47, 79, 23, 89];




// console.log(arr.reverse());

var arr = [11, 32, 66, 47, 79, 23, 89];
for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
}
console.log(arr);
