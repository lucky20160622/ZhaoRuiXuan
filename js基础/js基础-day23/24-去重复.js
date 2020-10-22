// 24.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//       1.去除数组中重复的内容，只保留唯一的元素。
//       2.以下列格式打印数组：[9,10,6,1,3,5,4]


var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
            arr.splice(j, 1);
            j--
        }
    }
} console.log(arr)

