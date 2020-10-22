// 23.现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
//    1. 遍历打印二维数组的所有元素
//    2. 计算二维数组中所有元素的和
//    3. 求二维数组中所有元素的最大值。


var array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
var sum = 0;
var max = array[0][0];
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        sum += array[i][j];
        if (array[i][j] > max) {
            max = array[i][j]
        }
    }
}
console.log(sum);
console.log(max);