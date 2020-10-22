# 选择题

1. 下面关于获取表单的value值正确的写法是（C）
```html
 <input type="text" value="我是表单">
```
 A、document.querySelector('input').innerText

 B、document.querySelector('input').innerHTML

 C、document.querySelector('input').value

 D、document.querySelector('input').style.innerText

2. 在JavaScript中，下面关于表单的事件说法错误的是( C)

 A、onfocus是当获取到焦点时触发

 B、onblur是当表单失去焦点时触发

 C、onclick这个事件，表单元素是不具备的

 D、oninput是当用户在表单中输入值时触发


3. 要完成禁用按钮效果，补充1.处代码（B）

```js
<button id="btn">禁用文本框</button>

<input type="text" id="txt" value="你好">

<script>
var oBtn = document.getElementById('btn');

var oTxt = document.getElementById('txt');

oBtn.onclick = function () {

1.补充代码

}

</script>
```

A、oTxt.disabled = “”
B、oTxt.disabled = true	 
C、oTxt.disabled = disabled 
D、oTxt.disabled = false

4. 下面对于JavaScript中的复选框(checkbox)的说法不正确的是：(A)

A、如果需将一个复选框选中，可以将复选框的selected属性设为true

B、如果需将一个复选框选中，可以将复选框的checked属性设为true

C、如果需将一个复选框选中，可以将复选框的checked属性设为"true"

D、如果需将一个复选框选中，可以将复选框的checked属性设为checked


5. 	在JavaScript中，下面代码表示获取到文本框的值，则下列选项中验证文本框为空的条件表达式不正确的是 (   A)
```js
var usrName = document.getElementById("txtName").value;
```

A、usrName ==""

B、usrName.length<=0

C、usrName=""

D、usrName.length==0


# 简答题

第1题. 操作表单元素常用属性有哪些，分别说明作用是什么？
```js
元素.value
元素.type
元素.checked
元素.disabled
元素.selected
```
第2题. 操作元素显示和隐藏的方式有哪些?
```js
display:none;
display:block;
overflow:hidden;
visible:hidden;
```



# 编程题

需求1. 实现隔行变色的效果(效果在附件):
- 页面中有一个按钮和一个ul,ul里面有10个li元素

  

- 点击按钮，实现10个li的隔行变色效果，奇数行是红色，偶数行是黄色

- 鼠标经过li元素上面，当前的这个li就是绿色，鼠标离开这个li，这个li显示原来的颜色

需求2. 简单js表单校验效果(素材和效果在附件里面)：布局和功能都需要自己完成
- 具体需求请看word里面。

