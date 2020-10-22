var a = 25;
function f1() {
  var a = b = c = 9;
  console.log(a);    //?  9
  console.log(b);    // ?  9
  console.log(c);    // ? 9
}
 f1();
 console.log(a);    //?    25
console.log(b);     // ?   9
 console.log(c);     // ？9
 //1.首先f1进入function中寻找变量 得出  var a = b = c = 9;
 //2.输出结果a、b、c都是9
 //3.因为var a=25是全局变量 得出a=25  b=9 c=9