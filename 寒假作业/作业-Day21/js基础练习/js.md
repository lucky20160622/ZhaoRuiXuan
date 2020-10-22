
## js简答题

1. 说一说你知道的Math对象（至少5个，不包括随机数）

   Math.ceil(x)对数进行上舍入

   Math.foolr(x)对数进行下舍入

   Math.round(x)四舍五入

   Math.sqrt(x)返回平方根

   Math.abs(x)返回绝对值

2. 随机数的默认输出范围是多少？

   0~1

3. 根据所学，写两个公式分别表示【两个数之间的随机数，不含最大值】【两个数之间的随机数，含最大值】

   不包含： Math.floor(Math.random() * (max - min) ) + min; 

   包含： Math.floor(Math.random() * (max - min + 1) ) + min; 

4. 根据所学，写两个不同的公式都表示【两个数之间的随机整数，包括最大值】

    Math.floor(Math.random() * (10 - 1 + 1) ) + 1           1到10包含10

    Math.floor(Math.random() * (100 - 1 + 1) ) + 1           1到100包含100

## js编程题

1. 求 30 到 50 之间的随机整数 [包括30 和 50]
```js
console.log(Math.floor(Math.random() * (50 - 30)) + 30);
```


2. 随机产生一个十六进制的颜色值 ,格式：#9ab353
```js
var str = "#";
      //一个十六进制的值的数组
      var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      for (var i = 0; i < 6; i++) {
        //产生的每个随机数都是一个索引,根据索引找到数组中对应的值,拼接到一起
        var num = parseInt(Math.random() * 16);
        str += arr[num];
      }

      console.log(str)
```


3. 产生5个20到30之间的随机整数[包括20和30]，并且通过Math方法，求出这5个数中的最大值和最小值
```js
var arr = [];

for (let i = 0; i <= 4; i++) {
  arr.push(Math.floor(Math.random() * (30 - 20)) + 20);
} 
// console.log(arr);
var mix = arr[0];
var min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (mix < arr[i]) {
    mix = arr[i];
  }

  if (min > arr[i]) {
    min = arr[i];
  }
}
//最大值
console.log(mix);
//最小值
console.log(min);

```


4. 判断任意三个数组成的是否是直角三角形，(组成直角三角形的条件是，最大边的平方 = 其他2个边的平方的和),要求使用Math.pow()求出某个数的平方
```js
function isZhiJiao(a, b, c) {
  if (
    Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ||
    Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2) ||
    Math.pow(c, 2) + Math.pow(b, 2) == Math.pow(a, 2)
  ) {
    console.log("是直角三角形");
  }
}
isZhiJiao(3, 4, 5);
```