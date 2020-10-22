// 需求：
// 求数组 [5,19,23,6,14,8] 里面所有元素的和以及平均值。
var num=0
var avg=0
var arr=[5,19,23,6,14,8]
for(var i=0;i<arr.length;i++){
num+=arr[i];

}avg=num/arr.length
console.log('和是'+num+'平均值是'+avg);


