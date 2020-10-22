// 6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19]
var arr2 = [2, 1, 6, 8, 10]
var arr3 = arr1.concat(arr2)
var newArr = [];
for (var i = 0; i < arr3.length; i++) {
    var canAdd = true;
    for (var j = 0; j < newArr.length; j++) {
        if (arr3[i] == newArr[j]) {
            canAdd = false;
            break;
        }
    }
    if (canAdd) {
        newArr[newArr.length] = arr3[i];
    }
}
for (var i = 0; i < newArr.length - 1; i++) {
    for (var j = 0; j < newArr.length - 1 - i; j++) {
        if (newArr[j] > newArr[j + 1]) {
            var temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
        }
    }
}
console.log(newArr);