// 步骤:
// 1.定义一个变量 来表示基数 2
var n = 2;
// 2.定义一个累加变量 sum
var sum = 0;
// 3.循环 累加4次
for (var i = 0; i < 5; i++) {
    n = n * 10 + 2;
    // 4.让n进行变化     // 5.累加
    sum += n
}
console.log(sum);