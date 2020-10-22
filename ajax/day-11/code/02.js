// 1.连接数据库
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


// 创建数据集合规则(学生表: 学习姓名  学生年龄 家庭住址 爱好)
// 创建学生信息的约束
let studentSchema = new mongoose.Schema({
  // 字段: 数据类型
  name: String,
  age: Number,
  address: String,
  hobbies: Array
})


// 应用规则
let Student = new mongoose.model('Student', studentSchema);


// 给Student添加数据
let student = new Student({
  name: '于文文',
  age: 18,
  address: '北京市朝阳区大同路夜景花园3号楼2单元1202',
  hobbies: ['唱歌', '弹琴', '跳舞']
})

// 保存数据
student.save();