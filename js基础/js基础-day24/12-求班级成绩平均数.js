// 某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
//   第一组： 89，66，54
//   第二组： 77，93，68
//   第三组： 55,   45,  88
//   第四组： 71,   76,  75

var arr = [[89, 66, 54], [77, 93, 68], [55, 45, 88], [71, 76, 75]];

var sum = 0;
var avg = 0;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        count++;
        sum += arr[i][j];
    }
}

console.log("和是" + sum + ",数组的长度" + count + ",成绩平均是" + sum / count);