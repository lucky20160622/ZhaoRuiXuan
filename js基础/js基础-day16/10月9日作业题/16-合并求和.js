// 需求: 计算从1到100临近两个整数的合并依次输出3(1+2),第二次输出5(2+3),最后一次输出199(99+100)
var s = 0;
for (var i = 1; i <= 99; i++) {
    s = i + (i + 1);
    console.log(`${s}(${i}+${i + 1})`);
}