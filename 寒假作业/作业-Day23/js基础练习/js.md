## js解答题

1. 字符串的特性是什么？

    JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。 

2. 使用字符串方法返回指定下标(索引) 对应的字符和不使用字符串方法返回字符的方式分别是什么？

   charAt（） 返回在指定位置的字符。 

3. 查看某个字符串是否存在于字符串中的某个方法是？其返回值为-1或者0分别代表的是什么？

   indexOf()

    返回String对象内第一次出现子字符串位置。如果没有找到子字符串，则返回-1。 

4. 截取字符的三种方法是什么，分别有什么不同？

    1、substring: (start开始位置的索引,end结束位置索引) 截取后不改变原来字符串，返回一个新的字符串 

   2、 substr：(start开始位置索引,end需要返回的字符个数) 截取后不改变原来字符串，返回一个新的字符串 

   3、silce：(start开始位置的索引,end结束位置索引)

   ```
           let str = 'abcdef';
   // 0
       str = str.slice(0);//返回整个字符串 abcdef
   str = str.substring(0);//返回整个字符串 abcdef
   str = str.substr(0);//返回整个字符串 abcdef
   // 使用一个参数
   str = str.slice(2);//截取第二个之后所有的字符 cdef
   str = str.substring(2);//截取第二个之后所有的字符 cdef
   str = str.substr(2);//截取第二个之后所有的字符 cdef
   
   // 使用两个参数
   str = str.slice(2,4);//截取第二个到第四个之间的字符 cd
   str = str.substring(2,4);//截取第二个到第四个之间的字符 cd
   str = str.substr(2,4);//截取从第3个开始往后数4位之间的字符 cdef
   
   // 使用两个负数
   str = str.slice(1,-3);//截取第二个到第四个之间的字符 bc
   str = str.substring(1,-3);//截取第二个到第四个之间的字符 a #负数转换为0
   str = str.substr(1,-3);//不能为负数，若强行传递负数，会被当成0处理 ' ' #负数转换为0
   console.log(str)
   
   ```

   

## js编程题

1. 将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
```js
var str = "abcdefgh";
var str1 = "";
str1 = str
  .split("")
  .reverse()
  .join("");
console.log(str1);
```

2. 截取字符串 “我爱中华人民共和国”  中 '中华' 输出到控制台中
```js
var str = "我爱中华人民共和国";
console.log(str.slice(2, 4));
```

3. 获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}

```js
let str1 = str.split("?")[1].split("&");
let obj = {};
for (let i = 0; i < str1.length; i++) {
  var arr = str1[i].split("=");
  obj[arr[0]] = arr[1];
}

console.log(obj);
```
4. var str= 'qweqweoeqweroqweqweodfsfdo'
    1)查找字符串中所有字母 'o'出现的位置
    2)把字符串中的所有字母'o'替换成 '-';

  ```js
let str = "https://www.test.com/login?name=zs&pwd=123";
var c = 1;
let b = "";
let a = "qweqweoeqweroqweqweodfsfdo";
for (let i = 0; i < a.length; i++) {
  if (a[i] == "o") {
    console.log(`i第${c}次出现下标为${i}`);
    c++;
  }
}
var arr = a.split("");
for (let j = 0; j < arr.length; j++) {
  if (arr[j] == "o") {
    arr[j] = "-";
  }
}

console.log(arr.join(""));

  ```