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

// User.updateOne({ _id: '5ecdbe7c13228d28b430379f' }, {
//   // 用户名
//   username: "yuwenwen",
//   // 姓名
//   name: '于文文',
//   // 邮箱
//   email: 'yuwenwen@gmail.com',
//   // 年龄
//   age: 20
// }).then((data) => {
//   // { n: 1, nModified: 1, ok: 1 } 找到了一条数据 修改了一条数据 并且修改成功了
//   console.log(data);
// })



// User.updateMany({}, {
//   email: 'default@qq.com'
// }).then(data => console.log(data));