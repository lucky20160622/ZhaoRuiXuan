## 简答题

1. 创建数据库fullstack2019
```js
// 引入mongoose包
const mongoose=reuqire('mongoose')
// 使用mongoose的包的connect方法来链接数据库
mongoose.connect('mongodb://localhost/db_fustack2019',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{console.log('成功');})
.catch((err)=>{console.log(err,'失败');})
```
============================Student集合==================
2. 创建集合Student,集合的规则要求如下:
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁
> 性别: 字符串类型，只能是男或者是女，枚举，必传，
> 业务爱好:draw,computer,sing,football,running
```js
// 创建约束
let StudentSchema = new mongoose.Schema({
  // 姓名
  name: {
    type: String,
    // 必传
    required: [true, "请传入姓名"],
    // 长度
    minlength: [2, "最少要有俩个字符"],
    maxlength: [6, "最多传6个字符"],
    trim: true,
  },
  age: {
    type: Number,
    max: [25, "最大年龄不能超过25岁"],
  },
  sex: {
    type: String,
    enum: {
      values: ["男", "女"],
      message: "您的性别不符合新中国社会主义思想",
    },
  },
  hobbies: {
    type: String,
    values: ["draw", "computer", "sing", "football", "running"],
  },
});
let Student=new mongoose.model('Student',studentSchema)
```
=============================增加操作=============================
3. 在Student的集合中插入文档
>姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
>姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
>姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
>姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]
```js
let student = new Student({
  name: '张三',
  age: 22,
  sex: 0,
  hobbies: ["draw","computer"]
})
let jialala = new Student({
  name: '贾拉拉',
  age: 18,
  sex: 1,
  hobbies: ["sing","draw","football"]
})
let yaoayo = new Student({
  name: '姚姚',
  age: 24,
  sex: 1,
  hobbies: ["football","computer","running"]
})
let yangwenlin = new Student({
  name: '杨文林',
  age: 19,
  sex: 0,
  hobbies: ["sing","computer"]
})
let wangkai = new Student({
  name: '王凯',
  age: 25,
  sex: 0,
  hobbies: ["sing","computer"]
})
// 保存数据
student.save();
jialala.save();
yaoayo.save();
yangwenlin.save();
wangkai.save();
```

=============================Score集合==============================

4. 创建集合Score,集合的规则要求如下
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
```js
let score = new mongoose.Schema({
  name:{
    required: true,
    type:String,
    minlength:[2,'最少不能少于俩个字符'],
    maxlength:[6,'最多不能多于六个字符'],
  },
  math:{
    required: true,
    type:Number,
    min:[0,'最小是0，最大是100'],
    max:[100,'不能大于100']
  },
  English:{
    required: true,
    type:Number,
    min:[0,'最小是0，最大是100'],
    max:[100,'不能大于100']
  },
  yuwen:{
    required: true,
    type:Number,
    min:[0,'最小是0，最大是100'],
    max:[100,'不能大于100']
  },
})
let Score=new mongoose.model('Score',scoreSchema)
```
=============================增加操作===============================
5. 在Score的集合中插入文档
>姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
>姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
>姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
>姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99
>
>```js
>let Score=new score({
>  name:'张三',
>  English:'66',
>  math:'22',
>  yuwen:'26'
>})
>let yangwenlin=new yangwenlin({
>  name:'杨文林',
>  English:'88',
>  math:'99',
>  yuwen:'80'
>})
>let jialala=new jialala({
>  name:'贾拉拉',
>  English:'79',
>  math:'88',
>  yuwen:'90'
>})
>let yaoyao=new yaoyao({
>  name:'姚姚',
>  English:'90',
>  math:'90',
>  yuwen:'90'
>})
>let wangkai=new wangkai({
>  name:'王凯',
>  English:'98',
>  math:'90',
>  yuwen:'99'
>})
>student.save();
>jialala.save();
>yaoayo.save();
>yangwenlin.save();
>wangkai.save();
>```
>
>

6. 查询所有学生的信息
```js
Student.find().then(()=>{console.log(data)})
Score.find().then(()=>{console.log(data)})
```

7. 查询年龄大于18岁小于24岁的学生的信息
```js
Student.find({age:{$gt:18,$lt:24}}).then(()=>{console.log(data)})
Score.find({age:{$gt:18,$lt:24}}).then(()=>{console.log(data)})
```

8. 查询年龄19岁并且喜欢计算机的男生的信息
```js

```

9. 查询班级中年龄最大的学生的信息
```js

```

10. 查询年龄是18岁的学生的姓名
```js
Score.find({age:18}).then(()=>{console.log(data)})
```
11. 查询总人数(提示count)
```js

```

12. 查询显示第二页的数据，每页显示2条
```js
 Score.find().skip(2).limit(2).then((data)=>{console.log(data)})
```
13. 查询业余爱好里面包含sing的学生的信息
```js
Score.find({hobbies:{$in['sing']}}).then((data)=>{console.log(data)})
```
14. 对数学成绩降序输出
```js
Score.find().sort('-age').then((data)=>{console.log(data)})
```

15. 查询姓名是王凯的各科成绩
```js
Score.find({name:'王凯'}).then((data)=>{console.log(data)})
```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为23
```js
 
```
17. 将所有学生的年龄更改为18
```js

```
18. 将王凯的数学成绩更新为100分
```js

```
==================================删除操作=============================
19. 删除年龄小于20的学生的信息
```js
Score.deleteMany({
    age:20
}).then((data)=>{console.log(data)})
```
20. 删除姓名是贾拉拉的这条数据
```js
Score.findOneAndDelete({name:'贾拉拉'}).then((data)=>{console.log(data)})
```

