
# 选择题

1. 有关DOM操作的说法正确的是(C )

   A、children、firstElementChild、lastElementChild都是包含元素节点以及文本节点的

   B、innerHTML获取的仅仅是文本内容

   C、可以使用nodeType属性来判断节点的类型

   D、nodeType属性返回值是一个字符串

2. 下面的HTML代码中，如果已经获取到p元素，其DOM对象名为obj，则有关DOM遍历的说法正确的是(A)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <div></div>
    <div></div>
    <p><span><span></p>
    <strong></strong>
</body>
</html>
```

  A、 如果只想获取p的父元素节点，可以使用obj.parentNode

  B、 如果只想获取p的上一个兄弟元素节点，可以使用obj.previousSibling

  C、 如果只想获取p的下一个兄弟元素节点，可以使用obj.nextSibling

  D、 如果只想获取p的所有子元素节点，可以使用obj.childNodes


3. 下面的HTML代码中,只获取ul里面的所有li元素，其中ul已经获取到，下面说法不正确的是(C)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <ul>
     <li>1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <li>5</li>
   </ul>
    <script>
     var ulobj = document.querySelector('ul')
  </script>
</body>
</html>
```

  A、ulobj.getElementsByTagName('li')

  B、ulobj.children

  C、ulobj.childNodes

  C、ulobj.querySelectorAll('li')


4. A.appendChild(B)这一句代码表示（ D  ）

	A、把A插入到B的内部开始

	B、把A插入到B的内部末尾

	C、把B插入到A的内部开始

	D、把B插入到A的内部末尾


5. 下面关于DOM节点操作说法不正确的是(D)

 A、document.creatElement("A")是创建一个名为A的新元素节点

 B、ANode.appendChlid(BNode)是把B节点追加到A节点的子元素的末尾 

 C、ANode.removeChild(BNode)是删除A节点下的子节点B

 D、PNode.insertBefore(ANode,BNode)是在PNode的父盒子中将A节点插到B节点之后 


# 简答题

第1题. js的节点创建有几种方式，分别是什么？

```js
方法1: 元素.innerHTML
方法2: document.write()
方法3: document.createElement()
```

第2题. 在js中查找节点的操作有哪些？

```js
查找父节点
  方法1: 元素.parentElement
  方法2: 元素.parentNode(推荐用这个 因为节点包括元素)
查找所有子节点

  方法1: 元素.childNodes  获取元素的所有节点
  方法2: 元素.children   获取元素节点(推荐用这个)

查找第一个子节点

  方法1: 元素.firstChild          获取所有节点
  方法2: 元素.firstElementChild   (获取元素节点)
  方法3: 元素.children[0]         (推荐)

查找最后一个子节点

  方法1: 元素.lastChild           获取所有节点
  方法2: 元素.lastElementChild   (获取元素节点)
  方法3: 元素.children[元素.children.length-1] (推荐使用)

查找上一个兄弟节点

方法1: 元素.previousElementSibling(推荐)
方法2: 元素.previouSibing

查找下一个兄弟节点

方法1: 元素.nextElementSibling(推荐)
方法2: 元素.nextSibling;


```

第3题. 在js中操作DOM的节点的方式有哪些，语法分别是什么(节点的创建，插入，删除，获取，题换，复制)？

```js
创建：
方法1: 元素.innerHTML
方法2: document.write()
方法3: document.createElement()

插入：
父元素.appendChild()

  功能: 把元素插入到父元素内部的最后
  参数: 新创建的元素对象(节点)
  返回值: 添加进去的元素

父元素.insertBefore(newChild,refChild)

  功能: 把元素插入到父元素内部的某个元素的前面
  参数: 要插入的新元素,基准元素
  返回值: 插入失败false 成功的返回那个元素

  删除：
   语法: 父元素.removeChild(子节点)

查找：
查找父节点
  方法1: 元素.parentElement
  方法2: 元素.parentNode(推荐用这个 因为节点包括元素)
查找所有子节点

  方法1: 元素.childNodes  获取元素的所有节点
  方法2: 元素.children   获取元素节点(推荐用这个)

查找第一个子节点

  方法1: 元素.firstChild          获取所有节点
  方法2: 元素.firstElementChild   (获取元素节点)
  方法3: 元素.children[0]         (推荐)

查找最后一个子节点

  方法1: 元素.lastChild           获取所有节点
  方法2: 元素.lastElementChild   (获取元素节点)
  方法3: 元素.children[元素.children.length-1] (推荐使用)

查找上一个兄弟节点

方法1: 元素.previousElementSibling(推荐)
方法2: 元素.previouSibing

查找下一个兄弟节点

方法1: 元素.nextElementSibling(推荐)
方法2: 元素.nextSibling;
```

# 编程题

需求1. 实现qq留言板的效果(附件:qq留言板和gif):
- 只需要完成功能，页面已经给定
- 用户在留言框内输入内容，点击发表，就会在留言区域内添加一条留言的内容
- 留言的内容格式在“留言区”已经给定，发表留言的格式请根据这个创建
- 如果留言框的内容为空，那么弹出“您还没有输入任何内容”，就不会添加空的内容在留言区
- 注意:“留言区”的时间是当前的日期时间

需求2. 实现许愿墙效果(附件:许愿墙和gif):
- 只需要完成功能，页面已经给定
- 功能一：根据给定的数据，在页面中创建对应的许愿签，(页面中已经给定一个许愿签的格式，参照那个格式创建许愿签)，参照完之后将页面的这个许愿签删除了
- 功能二：许愿签的位置是随机的
- 功能三：点击右上角的小x，会将对应的这个许愿签关闭
- 功能四：双击许愿签的头部，也会将对应的这个许愿签关闭