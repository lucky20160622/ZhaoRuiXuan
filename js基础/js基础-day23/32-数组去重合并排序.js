// 32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
var arr2 = [2, 1, 6, 8, 10];
var arr3 = [].concat(arr1, arr2)
// console.log(arr3);

//去重
for (var i = 0; i < arr3.length; i++) {
    for (var j = 0; j < i; j++) {
        if (arr3[j] == arr3[i]) {
            arr3.splice(i, 1);
            i--;
        }
    }
}
console.log(arr3);

for (var g = 0; g < arr3.length - 1; g++) {
    for (var h = 0; h < arr3.length - 1 - g; h++) {
        if (arr3[h] > arr3[h + 1]) {
            var temp = arr3[h];
            arr3[h] = arr3[h + 1];
            arr3[h + 1] = temp;
        }
    }
}
console.log(arr3)