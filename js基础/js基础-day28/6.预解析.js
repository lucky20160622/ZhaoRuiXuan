(function (num) {
    console.log(num); // ？  100
    var num = 10;
  console.log(num);  // ? 10
}(100))
//1.这题是自调用函数 100直接赋值给console.log(num); 得出num=100 
//2.继续往下走var num=10是局部函数变量 所以直接给下面的num赋值  得出第二个num是10