// 2. 写一个函数，求任意数组的所有元素的和，

function sum(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}

var arr=[22,5,68,99,0,2];
console.log(sum([22,5,68,99,0,2]));