## js解答题

1. 请简述 `typeof` 的用途，`typeof` 的返回结果都是什么数据类型？

   typeof用于获取数据类型，

   console.log(typeof(1));//number

   console.log(typeof(''));//string

   console.log(typeof(true));//boolean

   console.log(typeof(null));//object

   console.log(typeof([]));//object

   

2. 数据类型转换，转 Number类型有哪些方式？

   三种：

   number(变量)

   parseInt(变量)

   parseIntFloat(变量)

   

3. 数据类型转换，转 String类型有哪些方式？哪个方式存在什么限制？

   string(变量)

   tostring(变量)

   null和undefined不能转字符串

4. 数据类型转换，转 Boolean类型有哪些方式？

   bollean(变量)

5. 什么是隐式类型转换，有哪些是隐式类型转换？

   当俩个数据类型不同时，js会主动转换成相同的数据类型然后再进行计算

## js编程题

1. 回答下面代码中的结果

   ```
   console.log(typeof [])//object
   console.log(typeof [666])//object
   console.log(typeof [{age:18}])//object
   console.log(typeof NaN)//numbrt
   console.log(typeof 'true')//boolean
   console.log(typeof typeof undefined)//string
   ```

2. 说出下面元素转 Number类型的结果

   ```
   1) ''   0
   2) '666'  666  
   3) '88&'   NaN
   4) true   1
   5) false   0
   6) null   0
   7) undefined   NaN
   8) { }   NaN
   9) {name:"9",age:9}   NaN
   10) []   0
   11) [1]   1
   12) [1,1]   NaN
   13) [[]]   0
   14) [[1]]   1
   ```

3. 说出下面元素转 String类型的结果

   ```
   1) 666  "666"
   2) ''    ""
   3) true   "true"
   4) false  "false"
   5) null  "null"
   6) undefined  "undefined"
   7) { }  "[object Object]"
   8) {name:"9",age:9}  "[object Object]"
   9) []  ""
   10) [1,'A']  "1,A"
   11) [8,{age:8},8]  "8,[object Object],8"
   12) [1,[2,[3]]]  "1,2,3"
   ```

4. 说出下面元素转 Boolean类型的结果

   ```
   1) 0  //flase
   2) 1//ture
   3) -1//true
   4) ''//flase
   5) '0'//true
   6) NaN//false
   7) null//false
   8) undefined//false
   9) { }//true
   10) {name:"9",age:9}//true
   11) []//true
   11) [0]//true
   12) [false]//true
   12) [null,undefined]//true
   ```