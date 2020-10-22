## js解答题

1. 系统构造函数创建对象的格式

   ```
    var stu2=new Object();
    stu2.name="小红";
    stu2.age=19;
    stu2.ID=20181112;
    stu2.sex="女";
    stu2.eat=function(){
    console.log("吃米饭");
    };
    stu2.readBook=function(){
    console.log("穆世林的葬礼");
    };
   ```

   

2. 工厂函数创建对象的格式

   ```
   function student(name,age,ID,sex){
    var obj = new Object();
    obj.name=name;
    obj.age=age;
    obj.ID=ID;
    obj.sex=sex;
    obj.sayHi=function(){
    console.log("您好！");
    };
    return obj;
    }
    var stu4=student("小菊",21,20181114,"女");
   ```

   

3. 自定义构造函数创建对象的格式

   ```js
    function Student(name,age,ID,sex){
    this.name=name;
    this.age=age;
    this.ID=ID;
    this.sex=sex;
    this.sayHi=function(){
    console.log("您好！");
    };
    }
    //创建对象--->实例化一个对象，同时对属性进行初始化。
    // 1.开辟空间存储对象
    // 2.把this设置为当前的对象
    // 3.设置属性和方法的值
    // 4.把this对象返回
   var stu3=new Student("小天",18,20181113,"男");
   ```

4. 构造函数创建对象有什么好处？

    构造函数的原型对象中的成员，可以被该构造函数创建出来的所有对象访问,而且，所有的对象共享该对象,所以，我们可以将构造函数中需要创建的函数，放到原型对象中存储,这样就解决 全局变量污染的问题 以及 代码结构混乱的问题 


## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 要求分别使用 `4` 种方式创建下面要求的对象
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得 `年龄` 这个属性删除
 - 将对象的 `身高` 的值题换成"180cm"
 - 给对象添加属性 `学号` ，通过两种方式

 ```js
let obj = {
  name: "zhangsan",
  age: "22",
  sex: "男",
  height: "181",
  hobby: function() {
    console.log("能吃饭，能跑步");
  }
};

var stu2 = new Object();
stu2.name = "zhangsan";
stu2.age = 22;
stu2.height = 181;
stu2.sex = "男";
stu2.eat = function() {
  console.log("能吃饭，能跑步");
};
console.log(stu2);

function student(name, age, height, sex) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.height = height;
  obj.sex = sex;
  obj.sayHi = function() {
    console.log("能吃饭，跑步");
  };
  return obj;
}
var stu4 = student("zhangsan", 22, 181, "男");

function Student(name, age, height, sex) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.sex = sex;
  this.sayHi = function() {
    console.log("能吃饭，跑步！");
  };
}

var stu3 = new Student("zhangsan", 22, 181, "男");


for (let i in obj) {
  console.log(i, obj[i]);
}
obj.hobby();
delete obj.age;
obj.height = 180;
obj.xuehao = 123456;
console.log(obj);
````

 2. 编写一个程序，让用户输入一个5位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是5位数提示错误并继续输入直到用户输入一个5位数

    ```js
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <script>
          while (true) {
            var num = prompt("请输入一个五位数");
            if (num >= 10000 && num <= 99999) {
              var gw = num % 10;
              var sw = parseInt((num % 100) / 10);
              var bw = parseInt((num % 1000) / 100);
              var qw = parseInt((num % 10000) / 1000);
              var ww = parseInt(num / 10000);
              if (ww == gw && qw == sw) {
                alert("是回文数");
                break;
              }
            } else {
              alert("输入错误");
            }
          }
        </script>
      </body>
    </html>
    
    ```

3. 求10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

    ```js
    var sum = 1;
    for (let i = 1; i <= 10; i++) {
      sum *= i;
    }
    console.log(sum);
    ```

4. 操作数组 var arr = [2,3,4,5,6] 

    ```js
    1) 将1放到数组中2的前面
    2) 删除数组中的6
    3) 将数组的所有剩余元素求和
    4) 在 3) 的基础上通过length求出数组元素和的平均值
    5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    
    
    var arr = [2, 3, 4, 5, 6];
    arr.unshift(1);
    arr.splice(5, 1);
    var sum = 0;
    var pj = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      pj = sum / arr.length;
    }
    if (arr.indexOf(6) == -1) {
      console.log(false);
    } else {
      console.log(arr.indexOf(6));
    }
    
    //和
    console.log(sum);
    //平均数
    console.log(pj);
    console.log(arr);
    
    ```