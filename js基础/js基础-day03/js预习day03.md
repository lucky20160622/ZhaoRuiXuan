## 运算符

#### 运算符的种类                                               什么是运算符？

•算术运算符                                         运算符用于将一个值进行运算从而得出所需要的结果值。 

•赋值运算符                                         就像在数学中，也需要加、减、乘、除这些运算符来进行运算。 

•比较运算符                                         数据可以是常量，也可以是变量。被运算符操作的数又称为操作数。

•逻辑运算符

•三元运算符





### 算术运算符

①加法                                                         

运算符：+                                                                        

var a=2;

var b=3;

var result=a+b;

console.log(result); // 5



②减法

运算符：-

var a=5;

var b=3;

var result=a-b;

console.log(result);   // 2



③乘法

运算符: *

var a = 2;

var b = 3;

var result = a * b;

console.log(result);   // 6



④除法

运算符: / 

var a = 2;

var b = 3;

var result = b / a;

console.log(result);   // 1.5



⑤取余数(取模)

运算符：%

var a = 2;

var b = 3;

var result = b % a;

console.log(result);   // 1





 ⑥自增运算符

单独使用时，++a 和 a++ 没有任何区别

var a = 3;

a++; 

console.log(a);   // 4

var b = 3;

++b;

console.log(b);   // 4





混合使用时,++a,称为前置++,先自增1,再使用值 a++,称为后置++,先使用值,再自增1

// 前置++                                                                                

var a = 3;

var b = 4;

var result = ++a + b;

console.log(result);   // 8

console.log(a);  // 4



// 后置++

var a = 3;

var b = 4;

var result = a++ + b;

console.log(result);   // 7

console.log(a);   // 4



//自减前置--

var a=3;                                                                

Var b=2;

Var result=—a+b;

Console.log(result) //4

Console.log(a)//2



//自减后置--

Var a=5;

Var b=8;

Var result=a--+b;

Console.log(result)//13

Console.log(a)//4



## 赋值运算符

为变量赋值的运算符。

①普通赋值  =

var a=5;

console.log(a);   // 5

②加后赋值  +=

var a=5;

a+=5;   // 相当于a=5+a

console.log(a);   // 10





③减后赋值   -=

var a=5;

a-=5;   // 相当于a=5-a

console.log(a);   // 0

④乘后赋值  *=

var a=5;

a*=5;   // 相当于a=5*a

console.log(a);   // 25





⑤整除后赋值  /=

var a=5;

a/=5;    // 相当于a=5/a

console.log(a);   // 1

⑥取模后赋值  %=

var a=5;

a%=5;    // 相当于 a=5%a

console.log(a);   // 0



比较运算符

又叫关系运算符，即判断两个操作数的大小关系及是否相等的关系，比较运算符的返回值一定为布尔值。

①相等于 ==

var a=2;

var b=2;

var c=3;

console.log(a==b,a==c);    // true  false



##### 运算符的单位：

##### 相等于 ==

##### 绝对等于 === （值和类型均相等）

##### 不等于 !=



④小于 <

var a=5;

var b=5;

var c=4;

var d=6;

console.log(a<b , a<c , a<d);   // false  false  true



⑤大于 >

var a=5;

var b=5;

var c=4;

var d=6;

console.log(a>b , a>c , a>d);   // false  true  false



##### 小于等于 <=     大于等于 >=   小于 <      大于 >



## 逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑。

①与  &&      ②或  || 

var a=5;

var b=3;

var c=2;

console.log(a>b && a>c);         // true  真真为真

console.log(a>b && c>a);         // false 真假为假 

console.log(a==b && a==c);    // false  假假为假



#### 小结

##### ①  算术运算符

​      将操作符参与数学计算(通常为数学计算，+号也有特殊的用法，如连接字符串)

##### ②  赋值运算符

​      为变量赋值的运算符

##### ③  比较运算符

​      又叫关系运算符，即判断两个操作数的大小关系及是否相等的关系，比较运算符的返回值一定为布尔值。

##### ④  逻辑运算符

​      逻辑运算符用于测定变量或值之间的逻辑。

##### ⑤  三元运算符

​      又叫条件运算符即三个操作数参与计算的运算符。



### 优先级概念

优先级即运算符运算时的先后顺序，优先级越高，计算顺序越靠前。

例如：

var a = 5;

var b = 6;

var result1 = a * b - a;

var result2 = a * (b - a);

console.log(result1, result2); // 25   5

![1569417612830](C:\Users\Lenovo\AppData\Local\Temp\1569417612830.png)







# JavaScript弹窗 

### •警告框             

警告框经常用于确保用户可以得到某些信息。

当警告框出现后，用户需要点击确定按钮才能继续进行操作。

②语法

window.alert("sometext");   sometext 表示要弹出的语句

window.alert() 方法可以不带上window对象，直接使用alert()方法。

        alert("helloworld"); 

### •确认框

①什么是确认框？

确认框通常用于验证是否接受用户操作。

当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。

当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。

②语法

window.confirm("sometext");   sometext 表示要弹出的语句

window.confirm() 方法可以不带上window对象，直接使用confirm()方法。

示例：  var r = confirm("你好，我是一个确认框");

​        r == true ? alert("你按下了'确定'按钮") : alert("按下了'取消'按钮");

### •提示框

①什么是提示框？

提示框经常用于提示用户在进入页面前输入某个值。

当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。

②语法

window.prompt("sometext","defaultvalue");

sometext 表示要求用户输入的语句 defaultvalue 表示输入框内的默认值

window.prompt() 方法可以不带上window对象，直接使用prompt()方法。

示例：

var person = prompt("请输入你的名字");

 (person == null && person != "") ? alert

   ("欢迎来到" + person + "的首页"): alert("名字不能为空");