// 利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
// 求n的阶乘 3!=6 4!=24
function jc(n) {
  // 1的阶乘
  if (n == 1) {
    return 1;
  }

  return n * jc(n - 1);
}

let result = jc(4);
console.log(result);
