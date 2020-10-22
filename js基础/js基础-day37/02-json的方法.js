let objJson='{"name":"zs","age":18}'


// 上面数据的本质 是字符串 我们能操作的变量  数组 对象
// 如果要把josn字符串变成js对象 用的方法JSON.parse(字符串)

//string      //判断它的数据类型  
console.log(typeof objJson);    
 //打印objJson
console.log(objJson);   
//分割符
console.log("======================");
//把json字符串转成对象
let obj=JOSN.parse(objJson)
//打印
console.log(obj);

// 定义一个json字符串
let arrJson=["a","b","c"]
//转换为json对象
let arr=JSON.parse(arrJson)
// 判断是否为数组，如果输出true 否则输出false
console.log(Array.isArray(arr));// true  