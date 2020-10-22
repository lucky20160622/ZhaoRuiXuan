// 15.找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]

var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5];

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

var str ='';
for (var i = 0; i < arr.length;) {
    var count = 0;
    for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    if (count > 1) {
       console.log('重复元素'+ arr[i]+', 重复次数'+ count);
    }
    i += count
}