// 1. 写一个函数，实现对任意数字数组的排序，

function sum(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
           if(arr[j + 1] > arr[j]) {

            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j + 1] = temp;
           }
        }
    }
    return arr;
}

console.log(sum([0,28,33,5,78,66]));