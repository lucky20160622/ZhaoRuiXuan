## js解答题

1. 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？

   isNaN(),若返回值是false，则可以转换为数字类型，若返回true，则不可以转换为数字类型。

2. 100+100结果是200，那么100+‘100’结果是什么，为什么？

   结果:100100

   因为此时的‘+’号代表字符串的连接符，只要俩边有一个数据类型是字符串，那么等号就是字符串的连接符。

   

3. 请说说 `+` 号有几层含义，分别是什么？

   第一层含义：当俩边的数据类型都是number的时候，那么‘+’号就代表数学符号中的加号

   第二层含义：当俩边的数据类型只要有一个是字符串类型时，那么‘+’号就代表字符串的连接符

   第三层含义：隐式转换，把‘+’号放在string类型前面时，可以被转换成number数据类型。

   

4. 前--和后--的区别是什么？

   前--是先赋值后运算，后--是先运算后赋值

## js编程题

1. 如何能够判断一个数字是小数还是整数？

   ```
   var str = number+"";
   if(str.indexOf(".")==-1){
   console.log("整数")
   }else{
   console.log("小数");
   } 
   ```

2. 探究题：详见下面代码

   ```
    isNaN('') // false
    isNaN('1A') // true
    isNaN(true) // false
    isNaN({}) // true
    isNaN([1,1]) // true
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
    isNaN(),若返回值是false，则可以转换为数字类型，若返回true，则不可以转换为数字类型。
   ```

3. 打印下面的输出结果

   ```
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2);//1212
    console.log(num1 + +num3);//12''
    console.log(num1 + +num4);//NaN
    console.log(+num2 + !!num3);//12
    console.log(!!num2 + !!num4);//1
   ```

4. 打印下面的输出结果

   ```
    var a = 10,
   b = ++a,
   c = a--,
   d = c++ + ++b + --a;
   console.log(a, b, c, d);//9 12 12 32
   
    var a = 100,
   b = --a,
   c = a-- + b++,
   d = a - b-- + ++c;
   console.log(a, b, c, d);//98 99 199 197
   ```