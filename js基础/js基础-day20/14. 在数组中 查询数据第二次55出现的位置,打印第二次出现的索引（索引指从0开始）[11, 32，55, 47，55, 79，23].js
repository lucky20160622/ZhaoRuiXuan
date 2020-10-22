// 14. 在数组中 查询数据第二次55出现的位置,打印第二次出现的索引（索引指从0开始）[11, 32,55, 47,55, 79,23]
var arr=[11, 32,55, 47,55, 79,23]
var num=0
for(var i=0;i<arr.length;i++){
    if(arr[i]==55){
        num++
        if(num==2){
            console.log(i);
        }
    }
}