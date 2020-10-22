//1. 定义一个数组，保存六种数据类型的名称？
//var arr = ['null', 'boolean', 'string', 'number', 'undefined', 'object', ]       //答案
//console.log(arr)


//2. 定义一个对象，保存你自己的名字、年龄、爱好？
//var people = {
//    name: '王睿',
//    age: 17,
//    favorite: '编程'                                     //答案
//}
//console.log(people)


//3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和？
//var arr = [12, 43, 54, 43]
//arr1 = arr[0] + arr[2]                                       //答案
//console.log(arr1)


//4. 定义一个二维数组（随便放些数据进去）？
//var books = [1, 2, 3, 'sanguo', 'shuihu', 'xiyou', 'honglou']
//console.log(books)                                               //答案


//5. 有两个变量 a 和 b ，请写代码交换这两个变量的值？
//var a = '123'
//var b = '456'
//var c;
//var c = a
//a = b                                          //答案
//b = c
//console.log(a, b)

//6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？
//var obj = { name: 'tom', age: 10, books: ['水浒', '西游'] }
//console.log(obj.name)
//console.log(obj.books[1])                                      //答案


//7. 定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？
//var num1 = 33
//var num2 = 22
//var num3 = num2 + num1                                         //答案
//console.log(num3)

//8. 定义一个包含多行和另一个变量值的字符串？
// var num1 = 66
// var arr = `zrxwrbfsfdd
//abdfdijcjvj
//dfnsdfoisfdf
// ${num1}                                              //答案
// `
// console.log(arr)


//9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性？
//var arr = [people = {
//        name: '王国',
//       age: 18,
//        money: '20万'
//    },
//    {
//        name: '我',
//        age: 17,
//        money: '10万'                                                   //答案
//
//    }
//]
//console.log(arr[1].name)

//10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上 
//var arr = [13, 54, 65, 23, 54]
//arr1 = arr[1] + arr[3]
//console.log(arr1)                                        //答案


//11.说出下面代码的运行结果,并且解释原因:
//    var name = '张三';
//   var age ;
//    const gender ="女";
//    name = "李四"；
//    console.log(name);
//    console.log(age);
//    gender = "男";
//   console.log(gender);

//var name = '张三';
// var age ;
// const gender ="女";
// name = "李四";
// console.log(name);李四                                   //答案
// console.log(age);undefined 定义变量却没有赋值
// gender = "男";
// console.log(gender);常量不能更改值

//12.下列变量名哪个不正确
// var sname ;  var 1age ; var Name;
//答：第二个不正确，因为命名不能以数字开头



//二、解答题
//1、数据类型有几种？
//一共有七种（'null', 'number', 'String', 'Boolean', 'undefined', 'object', 'sylbom', ）              //答案

//2、什么是对象？如何创建对象？
//答：由多个键值对组合到一起形成的一种类型，当一个变量有多个属性时使用对象，定义一个空对象、添加属性值。例如使用{...}或new Object({...})               //答案

//3、如何读取和修改和删除对象中的值？
//console.log(对象名称.属性)
//对象名称.仓库='修改内容'                                      //答案
//delete对象名称.属性

//4、什么时候会出现 undefined？
//变量没赋初始  值函数没有返回值                   //答案

//5、什么是数组？如何创建数组？
//答：把同一类数据放到一起组成一组称作数组，当一个程序需要很多类型一样的变量的时候，
//方法一var arr = [数1,数2,数3,数4,....]      方法二  var arr = new Array(数1,数2,数3,数4,....)             //答案

//6、如何获取和修改数组中的某一个值？
//console.log(对象名[元素序号])                                         //答案
//属性名[元素序号]='属性值'

//7、js变量命名有什么规范？
//不能以数字开头，只能包含字母 数字 下划线 不能有特殊字符；                //答案

//8、如何定义多行字符串？有几种方法？
//反引号 var si = .......                                         //答案
//2种方法

//9、Boolean 类型有几个值？分别代表什么？
//有俩个值，ture（正确的） false（错误的）                      //答案

//10、字符串中能解析变量吗？怎么解析？

// 字符串中解析变量要用反引号``把字符串包起来,
// 然后在字符串中加上${变量名}就可以解析了;                      //答案