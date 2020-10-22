//引入mongoose包
const mongoose = require("mongoose");
// 使用mongoose的包的connect方法来连接数据库
mongoose
  .connect("mongodb://localhost/db_fullstack2019", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("成功");
  })
  .catch((err) => {
    console.log(err, "失败");
  });

// 创建约束
let teacherSchema = new mongoose.Schema({
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
// 应用约束
let Teacher=new mongoose.model('Teacher',teacherSchema)

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
let Student=new mongoose.model('Student',Score)


let Score=new score({
  name:'张三',
  English:'66',
  math:'22',
  yuwen:'26'
})
let yangwenlin=new yangwenlin({
  name:'杨文林',
  English:'88',
  math:'99',
  yuwen:'80'
})
let jialala=new jialala({
  name:'贾拉拉',
  English:'79',
  math:'88',
  yuwen:'90'
})
let yaoyao=new yaoyao({
  name:'姚姚',
  English:'90',
  math:'90',
  yuwen:'90'
})
let wangkai=new wangkai({
  name:'王凯',
  English:'98',
  math:'90',
  yuwen:'99'
})
student.save();
jialala.save();
yaoayo.save();
yangwenlin.save();
wangkai.save();