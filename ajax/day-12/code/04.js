// 1.连接数据库
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库
mongoose.connect('mongodb://localhost/db_teacher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("数据库连接成功") })
  .catch((err) => { console.log(err, '数据库连接失败') });


// 3.创建约束
let teacherSchema = new mongoose.Schema({
  // 用户名 6个字符-18个字符直接
  username: {
    // 确定这个字段的数据类型
    type: String,


    // 这个字段必须要传
    required: [true, '请传入用户名'],
    // 一般网站 用户名限制在6-18
    minlength: [6, '用户名的字符长度要在6个字符以上'],
    maxlength: [18, '用户名的字符长度要在18个字符以内'],
    // 去除字符串两边的空格
    trim: true
  },
  // 姓名(两个 --> 4个)
  name: {
    // 确定这个字段的数据类型
    type: String,
    // 这个字段必须要传
    // required: [true, '请传入姓名'],

    // 自定义校验
    // 如果是false 那么就不能通过校验
    // 如果是true 那么就通过校验
    validate: {
      validator: v => {
        return v && v.length >= 2 && v.length <= 4;
      },
      message: '您的名字不符合姓名规则'
    }

  },
  // 邮箱
  email: String,
  // 年龄
  age: {
    type: Number,
    default: 19,
    min: [18, '未成年人请在家长陪同下玩游戏'],
    max: [100, '请在家人陪同下玩游戏']
  },
  // 爱好 爱好是数组 但是具体的爱好是字符串
  hobbies: {
    type: String,
    // 枚举 列举
    enum: {
      values: ['抽烟', '喝酒', '烫头', '说相声', '耍剑'],
      message: '您的爱好不在正常范围内'
    }
  }
})


// 4.应用约束
let Teacher = new mongoose.model('Teacher', teacherSchema);

// 验证
// 用create方法把数据添加到数据库
Teacher.create({ username: '   YeungWanLum3   ', name: '商汤', hobbies: '说相声' }).then((data) => {
  console.log(data)
}).catch(err => {
  // console.log(err.errors.username.properties.message) 
  // console.log(err.errors);
  for (let key in err.errors) {
    console.log('错误:' + err.errors[key].properties.message);
  }
});

