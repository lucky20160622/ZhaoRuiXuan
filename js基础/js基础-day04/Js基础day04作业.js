//1.在控制台打印输出目前所学的所有数据类型的类型
//console.log(typeof 123) Number
//console.log(typeof []) object
//console.log(typeof "") String
//console.log(typeof true) Boolean
//var a = Symbol()
//console.log(typeof a) //Symbol
//var a = null
//console.log(a) //null
//var b
//console.log(b) //undefined

//2.数据类型的相互转换:
//Number(true) // ?              //1
//console.log(Number(true))

//Number(false) // ?               //0
//console.log(Number(false))
//
//Number(" ") // ?
//console.log(Number(" ")) //0
//
//Number([]) //?
//console.log(Number([])) //0
//
//Number(['1', '2']) //? 
//console.log(Number(['1', '2'])) //NaN
//
//Number([1]) // ?
//console.log(Number([1])) //1
//
//Number({}) //?
//console.log(Number({})) //NAN
//
//Number({ a: 1 }) // ?
//console.log(Number({ a: 1 })) //NAN
//
//Number("3.14") //?
//console.log(Number("3.14")) //3.14

//    //
//Number(null) // ?
//console.log(Number(null)) //0
//
//Number(undefined) //?
//console.log(Number(undefined)) //NaN
//
//Number("12456aaaa") //?
//console.log(Number("12456aaaa")) //NAN
//
//String({}) // ?
//console.log(String({})) //objec
//
//String([]) // ?
//console.log(String([])) //空
//
//String(123) //?
//console.log(String(123)) //123
//
//String(false) //?
//console.log(String(false)) //false
//
//String(null) //?
//console.log(String(null)) //null
//
//String(undefined) //?
//console.log(String(undefined)) //undefined
//undefined.toString() //?         //报错
//null.toString()  //?           //报错
//
//Boolean(0) // ?
//console.log(Boolean(0))         //false
//
//Boolean("") //?
//console.log(Boolean(""))         //false
//
//Boolean(undefined) //?
//console.log(Boolean(undefined))          //false
//
//Boolean(null) //?
//console.log(Boolean(null))                   //false
//
//Boolean(NaN) //?
//console.log(Boolean(NaN))                   //false
//
//Boolean({}) // ?
//console.log(Boolean({}))             //true
//
//Boolean([]) // ?
//console.log(Boolean([]))            //true

//3. 将下列结果打印出来下面的题的结果
//var num1 = 123;
//var num2 = "123"
//console.log(num1 + num2) // ? 123123             num2是字符串，把num2转换成数字，中间加号连接
//console.log(num1 + +num2) // ?    '123' =123  246   数字加数字，把字符串转换成数字。
//console.log(num1 + !!num2) // ?   (true =1   false =0)   !!num2=true    true=1    123+1=124
//console.log(num1 + Number(num2)) // ?   123+123+246    把字符串转换成数字，数字加数字

//4. 求值
//var a = 1;
//var b = ++a + ++a;          a=1    ++a=2  a=2 ++a+ ++a=5   ++A先赋值再计算   ++ a=2 a=2    ++a + ++=3 3 +a=5
//console.log(b); //  ？
//var a = 1;
//var b = a++ + ++a;         a=1  a++=2 ++a=2  2+a++=4   a++先计算再赋值  a  +   ++a=3   3 + ++=4
//console.log(b); // ？
//var a = 1;
//var b = a++ + a++;       
//console.log(b); // ？     a++=1 a++=1  a++ + a++=2   2+ ++=3  a++先计算再赋值    
//var a = 1;
//var b = ++a + a++;
//console.log(b); // ？   ++a=2 a++=1 2+1=3  3+ ++=4  ++a先赋值再计算  a++先计算再赋值


//5.输出下面的结果:
//console.log(NaN == NaN); //？  false   NAN不等于任何值，输出就是false
//console.log(NaN === NaN); //？ false   NAN不等于任何值，输出就是false
//console.log(undefined == null); //？  false     null和undefined都代表无效的值，全等于状态下就是false
//console.log(undefined === null); //？ false     null和undefined都代表无效的值，全等于状态下就是false
//console.log(1 + "true"); // ？ 1true     true是字符串  ture和1连接起来就是 1true
//console.log(1 + true); //？ 2           把true转换成数字就是  1+1=2
// console.log ( "abc" > "b" ); //false   因为js字符串字符在unicode中的码位比较大小  a的码位是97 b的码位是98 所以a不大于b 所以结果为false
// console.log ( "abc" > "aad" ); //true   因为js的字符串按字符在unicode中的码位来比较大小   a的码位是97  所以第一个相等   在比较第二位  而b的码位是98    所以b大于a  所以结果为trun
//console.log([] == []); // false == 不是比较的值，而是比较的内存地址，因为内存地址是随机分配的，所以不一样，相当于0x333 == 0x666,所以是false
//console.log([] === []); // false 虽然他们的类型都是object，但是全等判断的不仅仅是类型，还要判断内存地址是否相同，所以返回false
//console.log([] == ![]); // ？true 同上，加了！号就是相反的
// console.log ( [] == 0 );//true           简单数据类型与复杂数据类型不相等      值相同，但是两个独立的对象，占了两份内存空间。
// console.log ( ! [] == 0 );//true         简单数据类型与复杂数据类型不相等     值相同，但是两个独立的对象，占了两份内存空间。


// //6.输出下面的结果:
// var a = (10 * 3 - 4 / 2 + 1) % 2, //a=1
//     　b = 3;
// b %= a + 3; //b=3%4  b=3
// console.log(a++); // ？  //  1   2
// console.log(--b); // ？  //  2   2

// //7.输出下面的结果:
//console.log(3 + 2 || 0 && true) // ？ 5   5 || 0&&true   5||0      输出值为 5  true  运算符的优先级
//console.log(undefined && 5) // ？ false   输出值为underfined
//console.log(1 && 2 && 3) //？   true    输出值为3
//console.log(1 && 0 && 3) //？  false  输出值为0
//console.log(2 + 3 > 1 && 4 || 4 && 5 % 6) // ？  true  5>1和4正确，输出值是4   或 4和5 输出值是5 运算符的优先级
//console.log(5 + 10 / 2 && 4 > 3 || 7 - 4) //？   true  15/2=7.5   15/4>3 true  或3   输出值是3  运算符的优先级

// //8. 输出下面的结果:
// var num1 = 20;
// var num2 = 30
// console.log(num1 % num2); // ?   20
// num1 += num2   num1 = num1 + num2 = 50
// console.log(num1); // ? 50
// num1 = num1 - num2; // 将这段代码改写   num1-=num2 
// console.log(num1);20



//9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
// 利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
//    var tem =32
//    var htem =(9/5)*tem+32
//    console.log(htem)  

// 10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。
//console.log(`我是$(赵瑞轩)，今年$(18)岁了，来自$(河南省)`)