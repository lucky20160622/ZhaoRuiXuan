## 简答题

1. 创建数据库quanzhan12
```js
// 下载mongoose   命令：npm i mongoose
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库
mongoose.connect('mongodb://localhost/db_quanzhan12', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("数据库连接成功") })
  .catch((err) => { console.log(err, '数据库连接失败') });
```
============================================class集合==============================
2. 创建集合class,集合的规则要求如下
> 姓名:字符串类型
> 年龄:数字类型
> 性别: 数字类型
> 业务爱好:数组类型
```js
// 创建数据集合规则
let class = new mongoose.Schema({
  // 字段: 数据类型
  name: String,
  age: Number,
  sex: Number,
  hobbies: Array
})
// 应用规则
let Student = new mongoose.model('Student', class);
```
============================================增加操作===============================

3. 在class的集合中插入文档
>姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
>姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
>姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
>姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]
```js
// 给Student添加数据
let student = new Student({
  name: 'zhangsan',
  age: 22,
  sex: 0,
  hobbies: ["draw","computer"]
})
let jialala = new Student({
  name: 'jialala',
  age: 18,
  sex: 1,
  hobbies: ["sing","draw","football"]
})
let yaoayo = new Student({
  name: 'yaoyao',
  age: 24,
  sex: 1,
  hobbies: ["football","computer","running"]
})
let yangwenlin = new Student({
  name: 'yangwenlin',
  age: 19,
  sex: 0,
  hobbies: ["sing","computer"]
})
// 保存数据
student.save();
jialala.save();
yaoayo.save();
yangwenlin.save();
```
============================================查询操作===============================
4. 查询所有人的信息
```js
Student.find()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
============================================score集合==============================

5. 创建集合score,集合的规则要求如下
> 姓名:字符串类型
> 数学成绩: 数字类型
> 英语成绩: 数字类型
> 语文成绩: 数字类型
```js
// 创建数据集合规则
let score = new mongoose.Schema({
  // 字段: 数据类型
  name: String,
  mathematics: Number,
  language: Number,
  English: Number
})
// 应用规则
let Student = new mongoose.model('Student', score);
```
============================================增加操作===============================
6. 在class的集合中插入文档
>姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
```js
// 给Student添加数据
let student = new Student({
  name: 'zhangsan',
  mathematics: 22,
  language: 0,
  English: 0
})
let jialala = new Student({
  name: 'jialala',
  mathematics: 18,
 language: 1,
  English: 0
})
let yaoayo = new Student({
  name: 'yaoyao',
  mathematics: 24,
  language: 1,
  English: 0
})
let yangwenlin = new Student({
  name: 'yangwenlin',
  mathematics: 19,
  language: 0,
  English: 0
})
// 保存数据
jialala.save();
yaoayo.save();
yangwenlin.save();
```
============================================查询操作===============================
7. 查询所有成绩
```js
Student.find()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

============================================老师集合==============================
8. 创建集合teacher,集合的规则要求如下
> 姓名:字符串类型
> 性别: 数字类型
> 年龄: 数字类型
> 新资: 数字类型
```js
// 创建数据集合规则
let teacher = new mongoose.Schema({
  // 字段: 数据类型
  name: String,
  sex: Number,
  age: Number,
  wage: Number
})
// 应用规则
let Student = new mongoose.model('Student', score);
```
============================================增加操作===============================
9. 在class的集合中插入文档
这个你自己定义，插入3条文档就可以
```js
let jialala = new Student({
  name: 'jialala',
  age: 18,
  sex: 1,
  wage: 10000
})
let yaoayo = new Student({
  name: 'yaoyao',
  age: 24,
  sex: 1,
  wage: 4000
})
let yangwenlin = new Student({
  name: 'yangwenlin',
  age: 19,
  sex: 0,
  wage: 30000
})
// 保存数据
jialala.save();
yaoayo.save();
yangwenlin.save();
```
============================================查询操作===============================
10. 查询所有老师的信息
```js
Student.find()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

