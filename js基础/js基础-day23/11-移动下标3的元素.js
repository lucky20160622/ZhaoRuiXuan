
// 11.  var arr = [1,888,4,66,7,8]
// 要求，可以把数组中的下标为 3 的元素移到数组的开头  

var arr = [1, 888, 4, 66, 7, 8]
for (var i = 0; i < arr.length; i++) {
    if (i == 3) {
        arr.unshift(arr[i]);//移动之后数组长度加+，别忘记unshift向数组添加元素的时候会增加数组的长度
        arr.splice(i + 1, 1);
    }
}
console.log(arr)


