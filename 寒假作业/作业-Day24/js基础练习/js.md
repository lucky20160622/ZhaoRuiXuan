## js简答题

1. 定义Map字典的语法格式是什么？

   ```javascript
   var map = new Map();
   ```

2. 定义Set集合的语法格式是什么？

   ```
   const s = new Set()
   ```

3. Set集合的特点有哪些？

    Set是ES6新的数据结构，类似数组，但成员的值是唯一的，没有重复的值。

4. Set集合的打印结果和Array的打印结果有什么不同？

   Set会自动把重复的元素删除Array不会

5. 什么是 `json` ？作用是什么？优点有什么？

    JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式 

   作用：

   使用ajax进行前后台数据交换

   移动端与服务端的数据交换

   优点：

    数据格式比较简单, 易于读写, 格式都是压缩的, 占用带宽小 支持多种语言，易于解析

   ##### 

## js编程题

1. 使用Set集合对下面数组去重

    1) [1,1,2,2,3,3,4,4,5,5]
    2) [true,'66',null,true,66,null,88,'set',88]
    3) [1,[0],1,[0],1,[0]]

```js
1）var arr = [true, "66", null, true, 66, null, 88, "set", 88];
let array = Array.from(new Set(arr));
console.log(array);
2）var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let array = Array.from(new Set(arr));
console.log(array);
3）var arr = [1, [0], 1, [0], 1, [0]];
let array = Array.from(new Set(arr));
console.log(array);
```

2. 定义2个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求2个数组的并集，交集
```js
let a = [1, 2, 3, 3];
let b = [2, 4, 5, 6];
let aSet = new Set(a);
let bSet = new Set(b);
// 并集
let union = Array.from(new Set(a.concat(b))); // [1,2,3,4,5，6]
console.log(union);
// 交集
let intersection = Array.from(new Set(a.filter(v => bSet.has(v)))); // [2]
console.log(intersection);

```


3. 操作字符串 let str = 'AaBbCcDdEe'
  
    1) 输出str字符串中所有的大写字母
    2) 查看字符串是否有'Ff'，有返回对应下标(索引)，没有返回false
    3) 使用两种方式截取字符串'bCcD'
```js
let str = "AaBbCcDdEe";
let str1 = "QWERTYUIOPASDFGHJKLZXCVBNM";
for (let j = 0; j < str.length; j++) {
  for (let i = 0; i < str1.length; i++) {
    if (str[j] == str1[i]) {
      console.log(str[j]);
    }
  }
}


let str = "AaBbCcDdEe";
if (str.indexOf("Ff") == -1) {
  console.log(false);
} else {
  console.log(str.indexOf("Ff"));
}


let str = "AaBbCcDdEe";
console.log(str.slice(3, 7));
console.log(str.substring(3, 7));

```

4. 操作字符串 let str = 'hello-word'
    1) 将str字符串中的h和w替换成对应的大写字母
    2) 在 1)的基础上使该字符串变成数组['Hello','Word']
    3) 再将 2)中的数组转成字符串'Hello_Word'
  ```js
let str = "hello-word";
var newStr = str.replace("h", "H").replace("w", "W");
console.log(newStr);
console.log(newStr.split("-"));
console.log(newStr.split("-").join("-"));
  ```



