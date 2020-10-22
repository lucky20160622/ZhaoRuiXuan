// 20.左奇右偶
//     10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87]
var newarr=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newarr.push(arr[i])
    }else{
        newarr.unshift(arr[i])
    }
}
console.log(newarr);