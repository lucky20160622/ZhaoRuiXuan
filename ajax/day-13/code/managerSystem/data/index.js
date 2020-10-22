// 1.引入模块
const mongoose = require('mongoose');
// 2.连接数据库
mongoose.connect('mongodb://localhost/db_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(result => { console.log("数据库连接成功") })
// 3.设置约束
// 4.应用约束
const User = new mongoose.model('User', new mongoose.Schema({
  // 用户名
  username: {
    type: String,
    required: [true, '请输入用户名'],
    minlength: [2, '长度最少2个字符'],
    maxlength: [6, '长度最大6个字符']
  },
  // 密码
  password: {
    type: String,
    require: true
  },
  // 年龄
  age: {
    type: Number
  },
  // 邮箱
  email: {
    type: String,
    require: true
  },
  hobbies: {
    // 元素的数据类型都是字符串的数组
    type: [String],
    enum: {
      values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'],
    }
  }
}))

// 5.操作数据
module.exports = {
  // 5.1查找数据
  // 5.1.1 查询数据库中的所有数据
  findAll: function (fn) {
    // promise的原始写法
    User.find()
      // 成功时的回调
      .then(data => {
        // console.log(data);
        // 这里是一个函数的调用 data在这里是实参
        fn(data)
      })
      // 失败时的回调
      .catch(error => {
        console.log(data);
      })
  },
  // 5.1.2 分页查询数据
  findPage: function (pageNum, pageSize, fn) {
    // 1.每次取5条数据  20 1,5
    // 0-4 (pageNum-1)*pageSize
    // 5-9
    // 10-14
    // 15-19
    User.find().skip((pageNum - 1) * pageSize).limit(pageSize).then((data) => {
      // console.log(data);
      // 2.数据库中总共有多少条数据
      User.countDocuments().then(total => {
        // pageNum pageSize 总数据量 数据 返回
        fn({
          pageSize: pageSize,
          pageNum: pageNum,
          dataTotal: total,
          data: data
        })

      })
    })



  },
  // 5.2添加数据
  addOne: function (newUser, fn) {
    User.create(newUser)
      .then((data) => {
        // console.log(data);
        fn(data);
      })
      .catch((error) => {
        console.log(error);
      })
  },
  // 5.3删除数据
  deleteOne: function (userId, fn) {
    // console.log(userId);

    User.findOneAndDelete({
      _id: userId
    }).then(data => {
      // console.log(data);
      fn(data);
    })
  }
  // 5.4修改数据

}

