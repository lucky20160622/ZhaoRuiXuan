// 使用mongoogse这个包 来连接数据库

// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库

// mongoose.connect('mongodb://IP或域名/数据库名称')
mongoose.connect('mongodb://localhost/db_student', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("数据库连接成功") })
  .catch((err) => { console.log(err, '数据库连接失败') });