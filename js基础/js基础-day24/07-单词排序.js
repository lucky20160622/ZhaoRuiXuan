// 10.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，
//通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"
var English=['one','two','therr','four','five','six','seven','eight','nine','ten']
var num='two'
for(var i=0;i<English.length;i++){
    if(English.indexOf(num)!=-1){
        console.log('YES')
        break;
    }else{
        console.log('NO')
        break
    }
}
// var English=['one','[two]','[therr]','[four]','[five]','[six]','[seven]','[eight]','[nine]','[ten]']
// var arr='one'
// for(var i=0;English<arr.length;i++){
//     if(arr==English[i]){
//         console.log('YES');
//         break
//     }else{
//         console.log('NO');
//         break
//     }
// }
