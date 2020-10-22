// 查询名字为肖恩的 数据


// 1.连接数据库
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库
mongoose.connect('mongodb://localhost/db_user', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("数据库连接成功") })
  .catch((err) => { console.log(err, '数据库连接失败') });


// 3.创建约束
let userSchema = new mongoose.Schema({
  // 用户名
  username: String,
  // 姓名
  name: String,
  // 邮箱
  email: String,
  // 年龄
  age: Number,
  // 爱好 爱好是数组 但是具体的爱好是字符串
  hobbies: [String]
})


// 4.应用约束
let User = new mongoose.model('User', userSchema);


// // 5.添加数据
// User.create({
//   // 用户名
//   username: '小羊肖恩',
//   // 姓名
//   name: 'wanlum',
//   // 邮箱
//   email: '2323@qq.com',
//   // 年龄
//   age: 18,
//   // 爱好 爱好是数组 但是具体的爱好是字符串
//   hobbies: ['打球', '打游戏', '打豆豆']
// })


// 查询数据库中的所有数据
// User.find().then(data => { console.log(data) });

// 查询名字为肖恩的 数据
// User.find({ username: '肖恩' }).then(data => { console.log(data) })

// 查询 年龄在大于20 小于25之间的数据
// User.find({ age: { $gt: 20, $lt: 25 } }).then((data) => { console.log(data); })

// 查询 名字中 含有 龙的 数据($in只能查找字段值是数组的)
// User.find({ username: { $in: ['打豆豆1'] } }).then((data) => { console.log(data); })

// 查找 所有数据 按照年龄排序(升序)
// User.find().sort('age').then((data) => {
//   console.log(data);
// })

// 降序
// User.find().sort('-age').then((data) => {
//   console.log(data);
// })

// 分页(跳过多少个 获取多少个)
// User.find().skip(2).limit(2).then(data => {
//   console.log(data);
// })

// 根据字段查询
// User.find().select('name email -_id').then((data) => {
//   console.log(data);
// })

// 以上的结果都是数组 无论是一个还是多个还是无数据

// User.findOne({
//   username: "小黑龙"
// }).then((data) => {
//   console.log(data);
// })