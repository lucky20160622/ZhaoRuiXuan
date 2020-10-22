// 8. 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出到200之间的整数一共有多少个3。
function c(a,b){
    var sum=0
    for(var i=100;i<=200;i++){
        
        var gw=i%10
        var sw=parseInt(i/10%10)
        var bw=parseInt(i/100)
        if(gw==3){
            sum++
        }
        if(sw==3){
            sum++
        }
        if(bw==3){
            sum++
        }
    }
    return sum;
}

console.log(c(100,200));