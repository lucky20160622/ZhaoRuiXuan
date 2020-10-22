// Article 文章集合
const Article = require('../models/article');
// mongoDB数据库的分页插件
const mongooseSexPage = require('mongoose-sex-page');
// 错误:  Schema hasn't been registered for model "User". 调用User约束
require('../models/user')

module.exports.getArticle = async (req, res) => {
  // Article.find().then(data => {
  //   console.log(data);
  // })
  console.log(req.query);
  let pageNum = parseInt(req.query.pageNum);
  let pageSize = parseInt(req.query.pageSize);
  console.log(pageSize);
  // page 代表第几页
  // size 代表每页显示多少条数据
  // display 代表显示的页码数量 [1,2,3,4,5]
  // exec() 向数据库发出查询请求
  // 参考答案: https://www.npmjs.com/package/mongoose-sex-page
  let result = await mongooseSexPage(Article).page(pageNum).size(pageSize).display(3).find().populate("author").exec();
  // console.log(result);
  res.send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}