// 需求: 求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.

// 分析: 
// 找出1-100以内的所有的数
// 判断一下 是否能同时整除3 和 5 &&
// 如果可以 就累加


// 步骤:
// 0.声明一个sum变量表示和
var sum = 0;
// 1.使用for循环 求出1-100以内所有的数字
for (var i = 1; i <= 100; i++) {
    // 2.使用if判断 该数字是否可以同时整除3 和5
    // 两个等号比较宽容 三个等号比较严格
    if (i % 3 === 0 && i % 5 === 0) {
        // 2.1 如果可以就在sum的基础上累加
        sum += i;
    }
}
// 3.输出sum的值
console.log(sum);