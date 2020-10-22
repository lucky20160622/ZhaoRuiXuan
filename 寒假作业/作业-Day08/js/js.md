## js简答题

1. 什么是单向分支、双向分支和多向分支？

   单项分支是if

   双向分支是if else

   多向分支是if else if

2. 三元运算符简化的是什么？简化后是什么？
A?B:C

3. switch中的关键字有哪些？
default ,case,break

4. switch中的 `default` 的作用是什么？
使用default关键词来所有情况不存在时做的事情

## js编程题

1. 让用户输入一个数字，实现判断该数是奇数还是偶数并告诉用户

   ```js
   var number=prompt('请输入数字')
   if(number%2==0){
       alert('偶数')
   }else{
       alert('奇数')
   }
   ```

2. 让用户输入任意内容，随后弹出对应内容
    var str=+prompt('请输入内容‘)
    alert('str')
   ```
   
   ```

3. 让用户输入一个数字，判断该数字是否大于10，并告知用户结果，如果输入的非数字告知用户输入错误

  var num = +prompt("请输入一个数字");
  if (isNaN(num) == false) {
    if (num > 10) {
      alert(` ${num}大于10`);
    } else {
      alert(` ${num}小于10`);
    }
  } else {
    alert("您输入的不是一个数字");
  }
   ```
   
   ```

4. 让用户输入年龄，并判断该用户年龄是否成年，如果成年并告知：恭喜你已成年，如果还未成年需告知用户还有多少年就成年了，如果用户输入的不是年龄数字提示输入错误
var num=prompt('请输入年龄')
if(num >0&&nun<100){
    if(num>18){
        alert('恭喜您已经成年')
    }else{
        alert('您还差${18-num}年成年')
    }else{
        alert('请输入正确的年龄')
    }
}
   
     