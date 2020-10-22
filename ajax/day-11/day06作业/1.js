// 引入mongoose包
const mongoose=require('mongoose')
// 使用connect方法来连接数据库
mongoose.connect('mongodb://localhost/db_quanzhan12',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>{console.log('成功');})
.catch(()=>{console.log('失败');})

// 创建数据集合规则（学生表：学生姓名 学生年龄 家庭住址 爱好）
let studentSchema=new mongoose.Schema({
  name:String,
  age:Number,
  address:String,
  hobbies:Array
})
// 应用规则
let Student=new mongoose.model('Student',studentSchema)

let student=new Student({
  name:'赵瑞轩',
  age:'18',
  address:'翻斗花园',
  hobbies:['钱','车']
})
// 保存数据
student.save();