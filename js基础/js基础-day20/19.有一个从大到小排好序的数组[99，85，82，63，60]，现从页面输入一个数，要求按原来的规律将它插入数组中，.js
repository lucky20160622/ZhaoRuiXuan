// // 19.有一个从大到小排好序的数组[99,85,82,63,60],现从页面输入一个数,要求按原来的规律将它插入数组中,
// // 要求,假设你输入的80,则应该插入到82和63之间


var arr=[99,85,82,63,60]
var num=80
for(var i=0;i<arr.length;i++){
    if(arr[i]<num){
        arr.splice(i,0,num)
        break
    }
}
console.log(arr);