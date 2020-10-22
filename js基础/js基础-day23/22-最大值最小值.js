// 22. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]

var arr = [11, 32, 55, 47, 79, 23];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
        arr[i] = min;
    }
} console.log(min);



var arr = [11, 32, 55, 47, 79, 23];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
        arr[i] = max;
    }
} console.log(max);


