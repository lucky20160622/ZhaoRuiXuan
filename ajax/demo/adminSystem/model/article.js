const mongoose = require('mongoose');

// 数据库连接
// mongoose.connect('mongodb://66.112.215.31:27017/db_blog', {
//   useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//   console.log("数据库连接成功");
// }).catch((err) => {
//   console.log(err);
// })


let Article = new mongoose.model("Article", new mongoose.Schema({
  // 标题
  title: {  
    type: String,
    required: true,
    maxlength: 20,
    minlength: 1 
  }, 
  // 作者 
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // 发布时间
  publishDate: {
    type: Date,
    default: Date.now
    // default: moment(Date.now).format("YYYY-MM-DD");
  },
  // 封面图片
  cover: {
    type: String,
    default: null
  },
  // 内容
  content: {
    type: String,
    required: true
  }
}));

// Article.create({
//   // 标题
//   title: "我的小羊在睡觉",
//   // 作者
//   author: "5ed8c02e1b519a2c2c662e77",
//   // 内容
//   content: "山里有个庙,庙里有个老和尚,老和尚给小和尚讲了一故事: 山里的小羊  肖恩在睡觉 "
// })

module.exports = Article;