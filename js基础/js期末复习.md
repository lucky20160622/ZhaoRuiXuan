下面代码的输出是什么(D)
;(function (e) {
    Console.log(1 == true);
    Console.log(2 == true);
})() 
A.false false
B.true true
C.false true
D.true false
2.下面代码的输出是什么(D)

(function (e) {
    console.log(e === undefined);
    console.log(typeof e === undefined);
})()  
A.false false
B.true true
C.false true
D.true false
3.下面代码的输出是什么(B)

console.log(3 + 4 + "5");
A: "345"
B: "75"
C: 12
D: "12"
4.下面代码的输出是什么(B)

const set = new Set([1, 1, 2, 3, 4]);
console.log(set);
A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: {1, 1, 2, 3, 4}
D: {1, 2, 3, 4}
5.下面代码的输出是什么(A)

var f = c = true;
if (f === true) {
    var a = 10;
}
function fn() {
    var b = 20;
    c = 30;
}
fn();
console.log(a);
console.log(c);
console.log(b); 
A:10 30 报错
B:10 true 报错
C:报错
D:Undefined
6.下面代码的输出是什么(A)

let greeting
greetign = {}
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
7.下面代码的输出是什么(A)

unction Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError
8.下面代码的输出是什么(C)

console.log(Number(2) === Number(2))
console.log({} == {})
A: true, true
B: false, true
C: true, false
D: true, true
9.下面代码的输出是什么(C)

function sum(a, b) {
    return a + b
}
var result = sum(1, '2');
console.log(result);
A: NaN
B: TypeError
C: "12"
D: 3
10.下面代码的输出是什么(D)

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
11.以下是个纯函数么? A

function sum(a, b) {
    return a + b;
}
A: Yes
B: No
12.下面代码的输出是什么(C)

function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });
A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess
下面代码的输出是什么(B)
var num = 8
var num = 10
console.log(num);
A: 8
B: 10
C: SyntaxError
D: ReferenceError
下面代码的输出是什么(C)
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj);
A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C: { a: "three", b: "two" }
D: SyntaxError
15.下面代码的输出是什么(C)

const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
A: ["1 + 2", "1 * 2", "1 / 2"]
B: ["12", 2, 0.5]
C: [3, 2, 0.5]
D: [1, 1, 1]
16.下面代码的输出是什么(C)

for (let i = 1; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}
A: 1 2
B: 1 2 3
C: 1 2 4
D: 1 3 4
17.下面代码的输出是什么(B)

console.log("I want pizza"[0])
A: """
B: "I"
C: SyntaxError
D: undefined
18.下面代码的输出是什么(B)

console.log(typeof typeof 1)
A: "number"
B: "string"
C: "object"
D: "undefined"
下面代码的输出是什么(C)
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]
D: SyntaxError
20.JavaScript 中的一切都是？ (A)

A: 基本类型与对象
B: 函数与对象
C: 只有对象
D: 数字与对象
编程题
1.定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组

答: var arr = new Array(5);

for(let i = 0 ; i < 5; i++){ var num = parseInt(Math.random()*(100-10)+10); console.log(num); arr[i] = num; }

for(let i = 0 ; i < arr.length; i++){

  if(arr[i] < 50){
    arr[i] = 0;
  }
}

console.log(arr);

2.获取地址里面的用户名和年龄和邮箱 https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,并且控制台输出对象的格式{username:'lisi',age:28,email:120122@qq.com}

答: var s = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";

var s1 = s.split("?");

var s2 = s1[1].split("&");

var username = s2[0].split("=");

var age = s2[1].split("=");

var email = s2[2].split("=");

var person = { username : username[1], age: age[1], email : email[1], }

console.log(person);

3.将数组var arr = [1,2,1,2,3,4,5,6]里面重复的元素去除

答: var arr = [1,2,1,2,3,4,5,6];

var set = new Set(arr);

console.log(set);

4.统计数组var arr = [1,2,3,4,5,1,1,2,3,2]里面元素出现的次数

答: var map = new Map();

var count = 1;

var arr = [1,2,3,4,5,1,1,2,3,2];

for(var i = 0 ; i < arr.length ; i++){

  for(var j = 0 ; j < i ; j++){


      if(arr[i] == arr[j]){


          if(map.has(arr[j])){

              map.set(arr[j],count++);
          }else{

              count = 1;
              map.set(arr[j],count);
          }
      }
  }
}