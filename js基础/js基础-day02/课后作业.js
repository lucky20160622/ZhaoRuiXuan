//var name = "我是传智学院的一名学生，我为自己代言"          //第一题     利用JavaScript的console实现在控制台输出”我是传智学院的一名学生，我为自己代言”
//console.log(name)

//var a = "88"
//console.log(a)            //第二题                             2.利用JavaScript定义变量a，赋值为88，并且在控制台打印输出变量a的值

//var number2 = "1"         //第三题                            .利用JavaScript定义6个不同类型的变量，赋值，并且在控制台打印输出变量的类型
//console.log(number2)

//var name2 = "jack"
//console.log(name2)
    
//var money ="2百万"
//console.log(money)

//var shengao = "168"
//console.log(shengao)

//var tizhong = "95"
//console.log(tizhong)

//var yanzhi = "shuai"
//console.log(yanzhi)

// var num1 ='123'
// var num2 ='456'
// var num3;
// var num3 = num1
// num1 =num2
// num2=num3
// console.log (num1,num2)                   //第四题             4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;



//var myVarVariable = 666                           //第五题             5.输出如下代码的执行结果:
// const myConstVariable = 2;
//console.log(myVarVariable); 666
//console.log(myConstVariable); 2
//myVarVariable = 888;
// myConstVariable = 5;  
// console.log(myVarVariable); 888
// console.log(myConstVariable); // ？报错，无法打印    


//
//
//var people = {
//    name03: "王睿",                                //第六题  自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)


//    number03: "2002020607",
//    age03: "17",
//    shengao03: "168",                           //第一遍
//    tizhong03: "120",
//    phone: "15083487191",
//
//}
//console.log(people)
//var people04 = {
//    name04: "白凡",
//    number04: "20021002",
//    age04: 17,                               //第二遍
//    shengao04: 175,
//   tizhong04: 135,
//    phone: 15660620690,

//}
//var gender = "sex"
//people04[gender] = "男"            //第一种方法需求
//console.log(people04)
//var people05 = new Object({
//    name05: "瑞轩",
//    number05: 20011222,                      //第三遍
//    age05: 18,
//    shengao: 172,
//    tizhong: 110,
//    phone: 13346749495
//})
//people05.gender = "男"               //第二种方法需求
//delete people05.tizhong               //删除体重
//                                         //第七题需求 
//console.log(people05) 
//console.log(people05.age05)       //获取年龄值
//console.log(people05.name05)      //获取名字


//var name = 'zs';                           //第七题      
//var age;//Undefined 未定义
//console.log(name);
//console.log(age);     
//
//
//var name08 = '君不见，黄河之水天上来，奔流到海不复回。\                       
//           \n君不见，高堂明镜悲白发，朝如青丝暮成雪。\                          //第八题         8.	将下列字符串按照句号分段显示，不要一行显示，


//           \n人生得意须尽欢，莫使金樽空对月。\                           //第一种方法
//           \n天生我材必有用，千金散尽还复来。\
//           \n烹羊宰牛且为乐，会须一饮三百杯。\
//           \n岑夫子，丹丘生，将进酒，杯莫停。\
//           \n与君歌一曲，请君为我倾耳听。'
//console.log(name08)
//
//var name09 =
//    ` 君不见，黄河之水天上来，奔流到海不复回。                             //第二种方法
//君不见，高堂明镜悲白发，朝如青丝暮成雪。
//人生得意须尽欢，莫使金樽空对月。
//天生我材必有用，千金散尽还复来。
//烹羊宰牛且为乐，会须一饮三百杯。
//岑夫子，丹丘生，将进酒，杯莫停。
//与君歌一曲，请君为我倾耳听。`         
//console.log(name09)
//
//var name10 = "我是'中国人'，我爱我的祖国"                        //第九题
//console.log(name10)                                             //第一种方法                 9.	将字符串我是"我是中国人"，我爱我的祖国"种的中国人需要加上引号再控制台打印出来，如下图所示:
//
//var name11 = "我是\'中国人'\，我爱我的祖国"                          //第二种方法
//console.log(name11)
//
//var arr = ['135', '246', '681', '999', '222']                 //第十题        10.	定义一个数组，里面放都是数字的类型


//console.log(arr[3])
//arr[0] = 666
//console.log(arr[0])
//arr[1] = arr[2] + arr[4]
//console.log(arr[1])      
//
//var arr1 = [                                                                 //第十一题
//    'null', 'number', 'String', 'Boolean', 'undefined', 'object', 'sylbom',     
//    {
//        name: '赵瑞轩',
//    age2: '18',
//
//
//    }
//]
//12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
//要求：
//1.	输出第二个对象里面的属性name的值
//2.	将第一个对象里面的属性gender的值修改成数字18
//3.	算出2个对象里面属性是age的和
//13.	定义一个数组，数组里面有一个对象，对象里面有属性
//var obj = [{
//      name: '赵瑞轩',
//    age2: '18',
//       gender: '男',
//        xuehao: '001'                                                         //第十二题
//    },
//    {
//        name: '小王',
//        age1: '17',
//        gender: '女',
//        xuehao: '002'
//    }
//]
//console.log(obj[1].name)                 //第十二题需求
//obj[0].gender = 18
//console.log(obj[0].gender)
//console.log(obj[0].age2 + obj[1].age1)

//13.	定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，获取colors数组下标是1的值
//var obj = [{
//  price: 298,
//num: 888,
//name: '赵瑞轩',
//news: {
//  name: 'zrx'                     //第十三题答案
//},
//colors: [58, 68, 79, 63]
//}]
//console.log(obj[0].colors[3])
//console.log(obj[0].news.name)