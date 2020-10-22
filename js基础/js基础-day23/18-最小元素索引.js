// 18.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引

// 创建一个变量来储存最小值
var arr = [1, 2, 4, 5, 10, 100, 2, -22]
var min = arr[0];
// 创建一个变量来记录最小值的索引
var index = 0;

for (var i = 0; i < arr.length; i++) {

    if (arr[i] < min) {

        min = arr[i]
        index = i;
    }
}

console.log(index)