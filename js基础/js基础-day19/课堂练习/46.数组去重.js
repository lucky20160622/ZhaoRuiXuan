// 将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，形成一个不包含 0 的新数组。
var num=[]
var arr=[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]
for(i=1;i<arr.length;i++){
    if(arr[i]!=0){
        num.push(arr[i]);
    }
}console.log(num);