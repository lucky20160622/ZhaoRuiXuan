// 17.写一个函数，实现无论用户传入几个数字，都可以求和，例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21
function sum(){
    var num=0
    if(arguments){
        for(var i=0;i<arguments.length;i++){
            num+=arguments[i]
        }
    }
    return arguments
}
console.log(3,4,5);