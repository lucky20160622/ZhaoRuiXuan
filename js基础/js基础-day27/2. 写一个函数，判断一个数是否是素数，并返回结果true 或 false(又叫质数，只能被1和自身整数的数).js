//定义形参
function sum(num){
    //从2开始循环，循环2和num之间的数字
    for(var i=2;i<num;i++){
          //判断如果有 能整除 num 的 元素  就返回false
        if(num%i==0){
            return false
        }
    }
    //否则返回true
    return true
}
//调用函数
console.log(sum(3));


