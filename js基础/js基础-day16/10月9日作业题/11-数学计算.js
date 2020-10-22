// 需求: 求出1-1/2+1/3-1/4…..-1/100的和
// 步骤:
// 1.声明变量 
var num = 1;
// 2.声明累加和
var sum = 0;
// 3.循环1-100
for (var i = 1; i <= 100; i++) {
    // 4.累加
    sum += num / i;
    num = -num;
}
// 5.打印
console.log(sum);