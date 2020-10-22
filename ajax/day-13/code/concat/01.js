// 引入mongoose包
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/db_blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("数据库连接成功")
}).catch((err) => {
  console.log("数据库连接失败")
})


// 创建约束
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String
//   }
// })

// 创建并应用约束
const User = new mongoose.model('User', new mongoose.Schema({
  name: {
    type: String
  }
}));


// User.create({
//   name: '展飞'
// })


const Post = new mongoose.model('Post', new mongoose.Schema({
  // 文章的标题
  title: {
    type: String
  },
  // 文章作者
  author: {
    // 用户id(规定写法 如果你的数据类型是用户的id)
    type: mongoose.Schema.Types.ObjectId,
    // author的id引用自 User集合
    ref: 'User'
  }
}))

// Post.create({
//   title: '霸道总裁爱上我',
//   author: '5ecf80ea93548c28a43a58d6'
// })
// 关联查询
// 查询文章 把文章的标题和文章的作者全部显示出来
// Post.find().then((result) => { console.log(result) });

// Post.find().populate('author').then((result) => { console.log(result) });