
// 7.   已有数组var nums = [5,10,15],要求创建一个新数组
//     1.新数组的长度和已知数组相同
//     2.新数组每个元素的值，是已知对应位置元素的2倍
//     3.在控制台中打印新数组的所有元素


var nums = [5, 10, 15]
var nume1 = []
for (var a = 0; a < nums.length; a++) {

    nume1.push(nums[a] * 2)
}
console.log(nume1);

