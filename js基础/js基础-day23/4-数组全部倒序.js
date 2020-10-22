// 4. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台



var arr = [11, 22, 33, 44, 55];

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            var x = 0;
            x = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = x;
        }
    }
} console.log(arr)
