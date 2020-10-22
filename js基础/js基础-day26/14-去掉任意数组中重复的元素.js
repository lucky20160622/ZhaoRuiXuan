// 14.写一个函数,去掉任意数组中重复的元素，
var arr = [1, 5, 4, 4, 7, 6, 6];

function qc(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

console.log(qc(arr));