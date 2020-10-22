## js解答题

1. 算数运算符都有哪些？

   ‘+’  ‘-’  ‘*’   ‘/‘   ’%‘

   

2. NaN和任何值比较的结果都是什么？包括和自身比较吗？

   false  不包括，

   和自身比较是NaN

   

3. == 和 === 的区别在哪？

   ==是值相等，===是类型和值都要相等

   

4. 逻辑运算符有哪些, 逻辑运算的规则有哪些

   & || ！  （与或非 ）  有括号先算括号里面的， 然后是与  或   非  

   在&中，只要有一个假，那么就全部都是假

   在||中，只要有一个真，那么就全是真

   ！代表相反的值

## js编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？

   ```
   typeof 无法显示出的数据类名称有: null
   因为null属于空对象，typeof后的数据类型是object
   ```

2. 判断下面结果的布尔值

   ```
    333 == '333'    //true
    666 == [666]    //true
    '999' == [999]  //true
    NaN == NaN      //false
    NaN === NaN     //false
    undefined == null  // true
    undefined === null   //false
    [] == []    //false
    [] === []   //false
    [] == 0     //true
    ![] == 0    //true
    [] == ![]   //true
   ```

3. 打印输出下面的结果

   ```
    1) true && !true  //false
    2) false || !false   //true
    3) false || !true && !false   //false
    4) true && !false || false    //true
    5) undefined && true     //undefined
    6) 2+2 > 5 || 3-3 <=0 && !undefined   //true
   ```

4. 打印输出下面的结果

   ```
    var a = 10;
    var b = a++;
    console.log(b>=a); //true
    var c = b + 'a';
    console.log(c);
    console.log(c == ('a' + b))//false
   ```