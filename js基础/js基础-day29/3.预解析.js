function test(){  
    b();  
    var a=1;
   function b(){
        console.log(a);  // ？undefined
        var a=2;
    }
}
test();  // ?undefined
//首先进入function test寻找变量 var a=1没有命名所以无效 属于undefined
//继续向下走进入function b()var a=2也没有命名所以也是undefined 
//最后输出结果test是undefiined



