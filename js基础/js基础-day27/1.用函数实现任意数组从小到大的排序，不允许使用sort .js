
//定义形参
function px(arr) {
    //for循环遍历数组
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    //返回arr
    return arr
}
//调用函数
console.log(px([18, 45, 0, 58, 32,59]));