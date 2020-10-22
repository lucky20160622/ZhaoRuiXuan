// 23.编写一个add函数，实现如下效果:
 // console.log(add(1, 2)); // 3
// console.log(add(1)(2)); // 3 


//分析:
//第一个 创建add方法 后  传递 两个参数  计算和值
//第二个 创建add方法 后  再创建一个内层方法  在内层方法中计算和值 



//步骤:

//调用方法
console.log(add(1, 2)); //3
console.log(add(1)(2));  //3


//定义add函数
function add(num1,num2){

    //计算和值
    var sum = num1 + num2;

    //将和值返回
    return sum;
}



//定义add函数
function add(num1){

    //在add函数中 再定义一个sum函数
    function sum(num2){
    
        //算出 传递参数的和
        var sum = num1 + num2;
    
        //返回 sum
        return sum;
    }

    //返回 sum
    return sum;
}