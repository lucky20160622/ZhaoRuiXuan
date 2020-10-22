## js简答题

1. 函数的基本声明及调用格式是什么？其作用是什么？

   声明：

      function 函数名([参数1],[参数2]....){
      函数体
      retrun   返回值
     } 

   调用：

   函数名（）

2. 说说你对函数形参和实参的理解，形参个数和实参必须相等吗？

   形参是原来接收我们需要的数据

   实参是我们要传入的数据

   实参和形参个数不一定要相等

3. 函数为什么需要return返回值？

    return不论后面是否有值，函数都会停止执行并返回结果
   而return后面的值就是函数返回的结果
   如果return后面没有值，则返回的结果（函数返回值）为undefined 

4. 函数表达式和函数声明式有什么区别？

   1.以函数声明的方法定义的函数,函数名是必须的,而函数表达式的函数名是可选的。（函数声明整体会被提升到当前作用域的顶部，函数表达式也提升到顶部但是只有其变量名提升）

   2.以函数声明的方法定义的函数,函数可以在函数声明之前调用,而函数表达式的函数只能在声明之后调用。


## js编程题


1. 编写一个函数：判断任意三个数中的最大值和最小值

    ```js
    function mix(a, b, c) {
      if (a > b && a > c) {
        console.log("最大值为" + a);
      } else if (b > a && b > c) {
        console.log("最大值为" + b);
      } else {
        console.log("最大值为" + c);
      }
      if (a < b && a < c) {
        console.log("最小值为" + a);
      } else if (b < a && b < c) {
        console.log("最小值为" + b);
      } else {
        console.log("最小值为" + c);
      }
    }
    mix(1, 2, 3);
    
    ```

2. 编写一个函数：实现对 `n` 到 `m` 之间所有偶数的求和

    ```js
    function sun(n, m) {
      var sum = 0;
      for (var i = n; i <= m; i++) {
        if (i % 2 == 0) {
          sum += i;
        }
      }
      return sum;
    }
    console.log(sun(2, 4));
    ```

3. 编写一个函数：实现对传入的数组从小到大进行冒泡排序

    ```js
    function array(arr) {
      for (var i = 0; i <= arr.length - 1; i++) {
        for (var j = 0; j <= arr.length + 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            var sun = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = sun;
          }
        }
      }
      return arr;
    }
    var arr1 = [2, 3, 4, 6, 5, 1];
    console.log(array(arr1));
    ```

4. 编写一个函数：传入任意个数字，计算所有数之和

    ```js
    function array(arr) {
      var sum = 0;
      for (var i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
      }
      return sum;
    }
    var arr1 = [2, 3, 4, 6, 5, 1];
    console.log(array(arr1));
    ```
