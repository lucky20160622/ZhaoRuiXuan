

# 选择题

1. 下列关于传统自定义属性的操作说法错误的是(D)

   A、元素.setAttribute("属性名","值")无返回值，可以实现给元素添加自定义属性

   B、元素.removeAttribute("属性名")会将自定义属性删除

   C、元素.getAttribute("属性名")的返回值是自定义属性的值

   D、元素.setAttribute("属性名","值")只可以实现自定义属性的添加，不能实现自定义属性的修改

2. 关于属性值的获取或设置说法错误的是(C)

    A、 document.getElementById(id).属性=新值

    B、 document.getAttribute(‘属性名’)

    C、 setAttribute()不允许对属性节点值做修改

    D、 document.setAttribute(‘属性名’,'值')

3. 下列通过H5自定义属性获取`my-index`的值正确的写法是(B)
```html
 <div id="dv" data-my-index = "1">我是盒子</div>
 <script>
     var dvObj = document.querySelector('div')

 </script>
```
   A、dvObj.dataset.my-index

   B、dvObj.dataset["my-index"]

   C、dvObj.dataset[myIndex]

   D、dvObj.dataset.myIndex


4. 下列通过H5自定义属性说法不正确的是(A)

  A、元素.dataset.自定义属性名= "值"只能给元素添加一个自定义属性，不能修改自定义属性

  B、delete 元素.dataset.自定义属性名是将对应的自定义属性删除

  C、元素.dataset可以获取某个标签上面的所有自定义属性，返回值是一个对象

  D、元素.dataset.自定义属性，在获取自定义属性的时候需要采用驼峰命名法获取

5. 补充代码，当失去焦点清空input中的value值（B）
```html
  <input type="text" id="search" value="在Google中搜索，或输入网址">
    <script>
    var oInput = document.querySelector('#search');
    oInput.onfocus = function() {
    1.补充代码
    }
    oInput.onblur = function() {
    if (this.value.length == 0) {
    this.value = "在Google中搜索，或输入网址";
    }
    }
    </script>
```

A、 value = "";	 

B、 this.value = "";	 
C、 this.value == "";	 
D、 value =="";	

# 简答题

第1题. 请简述一下排他思想的核心？
```js
1.干掉他人，留下自己
2.先清除其他所有的样式，
3.再添加设置自己的样式
4.一定要按顺序执行
```
第2题. 请简述传统自定义属性的相关操作(增加、删除、修改、获取)？
```js
添加：元素.setAttribute('自定义属性名'，'自定义属性值')
删除：元素.removeAttribute('自定义属性名')
修改：元素.setAttribute('自定义属性名'，'自定义属性值')
获取：元素.getAttribute('自定义属性名')
```
第3题. 请简述H5自定义属性的语法，和相关的操作(增加、删除、修改、获取)？
```js
<标签 data-自定义属性名="属性值"></标签>
增加：元素.dataset.自定义属性名='值'
删除：delete 元素.dataset.自定义属性名
修改：元素.dataset.自定义属性名='值'
获取：let 变量=元素.dataset.自定义属性名
```


# 编程题

需求1. 突出显示效果实现(素材在附件中):
-  布局和功能都需要自己完成
-  当鼠标移入对应的小方格图片上面，当前的图片高亮显示，其余的图片变暗
-  当鼠标离开整个大方格内，所有的图片都变亮

需求2. 全选、反选、取消全选效果实现(素材在案例中):
- 布局已经给了，直接完成功能就可以
- 勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
- 点击全选按钮，列表中的选项都被选中
- 点击取消全选按钮，列表中的选项都被取消选中
- 点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）
- 点击列表中的复选框(备注：中间那四个复选框)，当列表中的复选框全部选中，上面的全选复选框也选中，反之不选中

