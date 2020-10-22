// 18.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]

var arr = [1,2,4,5,7,7,666,0,-1,-2,-3];
// 创建最大值 和最小值
var max = arr[0];
var min = arr[0];
// 遍历数组
for (var i = 0; i < arr.length; i++) {

    // 获取最大值
    if(arr[i] > max){
        max = arr[i];
    }

    // 获取最小值
    if(arr[i] < min){
        min = arr[i];
    }
}
// 创建一个临时变量来交换

arr[0] = min;
arr[arr.length - 1] = max;
console.log(arr);