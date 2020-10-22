// 16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]
function fz(arr){
    var newArr=[]
    for(var i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(fz(["h", "e", "l", "l", "o"]));