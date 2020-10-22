## js解答题

1. 数组的两种定义方式是什么

   1、使用new Array()构造函数定义数组（）的值为数组的长度

   2、使用字面量[ ]方式定义数组


2. 什么是元素下标(索引)，简述在数组中如何使用

   在字符串或者数组中每个元素对应的数字，使用：从第一个元素为0开始依次往下排


3. 数组中索引的范围是多少？

   从0开始小于数组的长度


4. 如何知道一个数组的长度，其长度代表的是什么？

   长度表示元素的个数

   长度：数组名.length



## js编程题

1. 使用两种定义方式将【true,全栈,666,Full_Stack,{name:"杨"},[1,2]】存入数组

   ```js
   var sun = [true, "全栈", 666, "Full_Stack", { name: "杨" }, [1, 2]];
   var sum = new Array();
   sum.push([true, "全栈", 666, "Full_Stack", { name: "杨" }, [1, 2]]);
   ```

2. 分别打印数组var arr = ['金','木','水']中的每个元素

   ```js
   var arr = ["金", "木", "水"];
   for (var i = 0; i <= arr.length - 1; i++) {
     console.log(arr[i]);
   }
   ```

3. 操作数组var arr = [1,2,[3,4,5,6],7,[8,9,10]]

   ```js
   1) 打印元素2
   console.log(aar[1])
   2) 打印元素5
   console.log(arr[2][2])
   3) 打印元素7
   console.log(arr[3])
   4) 打印元素10
   console.log(arr[4][2])
   ```

4.  操作数组var arr = [1,[2,3,4],[5,[6,7]],{name:"杨"},true,false]

    ```js
    1) 打印出[6,7]
    console.log(arr[2][1])
    2) 打印数组中的对象
    console.log(arr[3])
    3) 打印该对象的属性值
    console.log(arr[3].name)
    4) 将数组中的true和false互换位置
    var sun=arr[4]
    arr[4]=arr[5]
    arr[5]=sun
    ```

