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


// 删除一条数据
// 返回的是 删除完成的数据
// User.findOneAndDelete({ _id: '5ecdbe7c13228d28b430379e' }).then((data) => { console.log(data) }) 
  
     
// 删除多条数据 deleteMany 
// User.deleteMany({}).then((data) => {
//   console.log(data); // { n: 12,  ok: 1, deletedCount: 12 } 数据库中有12条数据  成功删除了12条数据
// })     
  
// 删除的是年龄为18的数据   
// User.deleteMany({ 
//   age: 18
// }).then((data) => {
//   console.log(data); // { n: 12, ok: 1, deletedCount: 12 } 数据库中有12条数据  成功删除了12条数据
// })


// 注销 企业中不存在删除 