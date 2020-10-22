// 31.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引

var arr = [1, 2, 4, 5, 10, 100, 2, -22];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    // var cur=arr[i];
    // cur < min? min = arr[i]:null
    // var cur=arr[i]
    if (arr[i] < min) {
        min = arr[i];
    }

}
console.log(min)