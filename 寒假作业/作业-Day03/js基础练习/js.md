## `js解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？

   通过var obj={}   组成部分：键，值


2. 如何使用new关键字创建对象?

   var obj=new Object（）


3. 说明对象的基本操作（读取，修改，添加，删除）

   var obj={

   ​    name:"张三",

   ​    age:"20",

   ​    sex:"男"

   }

   obj.weight="170kg"//添加

   console.log(obj.name);//查找

   obj.sex="女"//修改

   delete obj.age//删除

   console.log(obj);

   


4. 创建对象有几种方式，分别是什么？写语法

   | 第一种（字面量）： |                               |
   | ------------------ | ----------------------------- |
   |                    | var obj = {}                  |
   |                    |                               |
   |                    | 第二种（系统构造函数）：      |
   |                    | var 对象名 = new Object();    |
   |                    | 对象名.键名 = 值              |
   |                    | ...                           |
   |                    |                               |
   |                    | 第三种（自定义构造函数）：    |
   |                    | function Person(形参...){     |
   |                    | this.键名 = 形参;             |
   |                    | }                             |
   |                    | var obj = new Person(实参...) |
   |                    |                               |
   |                    | 第四种（工厂模式）：          |
   |                    | function Person(形参...) {    |
   |                    | var obj = new Object();       |
   |                    | obj.name = name;              |
   |                    | return obj;                   |
   |                    | }                             |
   |                    | var obj1 = Person(实参...)    |

## js编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   var obj={
        name:"可乐",
       age:"18",
       sex:"你猜",
       favorite:"Rush B"
   }
   console.log(obj);
   ```

2. 使用new关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

    ```js
    var obj=new Object()
    obj.name="雪碧",
    obj.age="19",
    obj.sex="未知",
    obj.favorite="Rush A"
    console.log(obj)
    ```

3. 根据步骤操作对象

    ```js
    1) 定义一个对象：【姓名:柠檬 年龄:17】
    2) 输出该对象的姓名
    3) 修改该对象年龄为：未成年
    4) 添加对象属性：性别为女，爱好为画画，职业为学生
    5) 输出该对象
    6) 删除该对象的姓名
    7) 输出该对象
    
    var obj={
        name:"柠檬",
        age:"17",
    }
    console.log(obj.name);
    obj.age="未成年"
    obj.sex="女"
    obj.favorite="画画"
    obj.zhiye="student"
    console.log(obj);
    delete obj.name
    console.log(obj);
    ```

4. 使用三种方式给对象var obj = {name:"杨"}添加属性age为30

    ```js
    `参考答案：
    1) obj.age = 30; 
    2) obj['age'] = 30; 
    3) var age = "age"; obj[age] = 30;`
    
    
    // 第一种：
    obj.age = 30;
    // 第二种：
    obj['age'] = 30;
    obj['age']=30
    // 第三种：
    var age = "age";
    obj[age] = 30;
    console.log(obj)
    ```

