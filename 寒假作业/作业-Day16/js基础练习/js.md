## js简答题

1. 函数的形参是局部变量吗？谈谈你的理解

   是局部变量，函数的形参的作业是往函数里面传参数所以只能在函数里面起作用

2. 函数内部可以调用其他函数吗？谈谈你的理解

   可以，函数里面可以放函数所以函数内部可以调用其他函数

3. 函数的return是必须要添加的吗？函数如果调用的时候，没有返回值，输出的结果是什么？举例说明

   不是必须添加的 没有返回值输出console.log输出的内容

   ```
   function sum(a) {
      console.log(a);  //输出3
   }
   sum(3);
   ```

   


4. 函数调用的时候传递了实参，但是没有形参接收，怎么在函数内部获取实参传递的个数

   ```
   function sum() {
     console.log(arguments.length);//获取实参个数
   }
   sum(3);
   ```

   


## js编程题

1. 定义一个函数，用户输入任意两个不同数字,返回最后的最大值

```js
<script>
      var sum = prompt("请输入第一个数字");
      var sun = prompt("请输入第二个数字");
      if (Number(sum) > Number(sun)) {
        alert(sum + "最大");
      } else {
        alert(sun + "最大");
      }
    </script>
```


2. 定义一个函数 function add(){}，求函数任意参数的和
 - 1) add(1,2,3)
 - 2) add(1,2,3,4,5)

```js
function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2, 3));

```

3. 写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】

```js
function add(nian) {
  if (nian % 400 == 0 || (nian % 4 == 0 && nian % 100 != 0)) {
    return "是闰年";
  } else {
    return "不是闰年";
  }
}
console.log(add(2000));

```

4. 写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
```js
function mix(arr1) {
  var jia = arr1[0];
  for (var i = 0; i < arr1.length; i++) {
    if (jia < arr[i]) {
      jia = arr[i];
    }
  }
  return jia;
}
var arr = [18, 45, 0, 58, 32, 59];
console.log(mix(arr));
```