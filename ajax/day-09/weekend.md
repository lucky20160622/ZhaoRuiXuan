# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
POST请求：
1.post请求是代表要写入数据 
2.post请求更安全 参数不会被保存在浏览器历史中   
3.数据不会在url中显示

GET请求：
1.get请求是代表只获取数据
2.get请求相对来说安全性较差 参数会在url中显示
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
post请求前端：
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>ajax代码</h1>
  <button>按钮</button>
  <script>
    let btn=document.querySelector('button')
    btn.onclick=function(){
      // 实例化对象
      let xhr=new XMLHttpRequest()
      // 设置请求方式 请求地址
      xhr.open('post','/ab')
      // 设置请求头
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
      // 发送请求数据
      xhr.send('username=zs&password=123456')
      // 监听并处理响应
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
          // 把数据显示在页面上
          console.log(xhr.responseText);
        }
      }
    }
  </script>
</body>
</html>

post请求后端：
// 引入模块
const express = require("express");
const path = require("path");
// 使用模块创建服务
const app = express();

// 设置静态目录
app.use(express.static(path.join(__dirname, "public")));
// 中间件获取post请求的参数
app.use(express.urlencoded({extended:false}));
// 简单的post请求
app.post("/ab", (req, res) => {
  // 接收post请求体
  res.send(req.body)
  // 返回get请求后面的查询参数
  // res.send(req.query)
});

// 指定服务器端口监听
app.listen(80, () => {
  console.log("http://localhost");
});


get请求前端：
  <script>
     let btn=document.querySelector('button')
     btn.onclick=function(){
      // 实例化对象
      let xhr=new XMLHttpRequest()
      // 设置请求方式 请求地址
      xhr.open('get','/cc?username=zs&password=123456')
      // 发生请求数据
      xhr.send()
      // 监听并处理响应
      xhr.onreadystatechange=function(){
        // 判断是否响应方式正确
        if(xhr.readyState==4&&xhr.status==200){
          // 把数据显示在页面
          console.log(xhr.responseText);
        }
      }
     }
  </script>

get请求后端：
//引入模块
const express=require('express')
const path=require('path')
// 使用模块创建服务
const app=express()
// 静态目录
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}));
// 接收get请求
app.get('/cc',(req,res)=>{
  // 接受get请求后面查询参数
  console.log(req.query);
  res.send(req.query)
})
// 使用指定服务器端口监听
app.listen(80,()=>{
  console.log('http://localhost');
})
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
$.ajax({
   // 请求方式
    type:'',
    //url
    请求地址：'',
    //请求数据
    data:{
    name:'',
    age:''
},
    //请求成功回调函数
    success: function(data){
    
}
})
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
1.下载art-template库
2.引入art-template库
3.<script src="type/template" id='id名'>
    html渲染内容
    </script>
4.let htmlStr=template('id名'，{内容})
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
渲染一个字符串：
 <script type="text/template" id="str_templ">
    <h1>{{content}}</h1> 
  </script>
  <script>
    let title = "我是标题2";
    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('str_templ', {
        content: title
      });

      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
  
渲染一个列表：
  <script type="text/template" id="list_templ">
    <!-- target代表数字的名字 -->
  {{each target}}
  <li> {{$index}}-{{$value}}</li>
  {{/each}}
  </script>
  <script>
    let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];

    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('list_templ', {
        target: data
      })
      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
    
    渲染一个页面：
    <script type="text/template" id="judge_templ">
    {{if data.length > 0 }} 
        <ul>
          {{each data}}
          <li>{{$value}}</li>
          {{/each}}
        </ul>
    {{else }}
       <p>没有数据</p>
    {{/if}}
  </script>
  <script>
    // 如果data中有数据 那么就渲染数据 
    // 如果data中没有数据 那么就渲染一句话 没有数据
    // let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];
    let data = [];
    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('judge_templ', {
        flag: true,
        data: data
      })
      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }
  </script> 
```

6. 客户端和服务端的通信过程是怎么样的？
```js
1.在浏览器中输入网址
2.浏览器通过dns服务器来获取访问网站的ip地址
3.浏览器发起一个对这个ip地址的请求
4.服务端监听指定的端口的服务器软件接收到这个请求，进行处理
5.服务器处理完的结果返回给客户端浏览器
6.浏览器将服务器返回的结果呈现到页面上
```

7. express怎么开放静态资源?
```js
app.use(express.statoc('public'))
```

8. express怎么读文件和写文件?
```js
读：
app.get('地址'，(req,res)=>{res.send(req.query)})

写：
app.post('地址'，(req,res)=>{res.send(req.body)})
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
JSON对象转JSON字符串：JSON.stringify()
JSON字符串转JSON对象：JSON.parse()
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
method属性：请求方式
action属性：请求路径
name属性：表单名称
```

11. form表单怎么序列化获取值表单的值？
```js
$('form').serizlize()
```

12. form表单怎么阻止默认的提交行为?
```js
1.使用input代表button，设置type='button'
2.event.preventDefault();在提交事件绑定的方法的最后，使用event.preventDefault()方法
3.使用button按钮提交表单时候设置tyep='button',因为button默认属性是submit
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
1.在a链接里面放index.html，点击a链接跳转页面
2.在js中绑定点击事件，如果触发点击事件则跳转页面
```