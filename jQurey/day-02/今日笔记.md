# jQuery-day02

## 添加节点

### 把元素添加到某个元素里面(清空里面的内容)

```js

  // 方法1: $('html标签')
    // 方法2: $('元素').html('html标签')

    // 给button添加点击事件
    // $('button').click(function () {
      // 创建一个b标签
      // let b = $('<b>你好</b>');
      // console.log(b);
      // 把b标签写入box这个div中
      // $('div').html(b);


      // 最简单的方法
      // $('div').html('<b>你好</b>')
    // })

```

### 把元素插入到元素里面的后面

```js
 // jQuery中
    // 方法1: $('html标签')
    // 方法2: $('元素').html('html标签')
    // 方法3: 插入到元素里面的后面
    // append(content)  父元素.append(子元素)
    // appendTo(content) 子元素.appendTo(父元素)

    // $('button').click(function () {
    //   $('.box').append('<a href="http://www.baidu.com">百度</a>')
    // })
```

### 把元素插入到元素里面的前面

```js
 // 父元素.prepend(子元素)
    $('button').click(function () {
      $('.box').prepend('<strong>我在b前面</strong')
    })
    // 子元素.prependTo(父元素)
```

### 把元素插入到某个元素的前面/后面

```js
// 方法5: 插入到某个元素外面的后面/前面
    // 插入到某个元素外面的后面 after
    // 插入到某个元素外面的前面 before
    $('button').click(function () {
      // 添加到box后面
      $('.box').after(`<a href="http://www.baidu.com">百度</a>`)
      // 添加到box前面
      $('.box').before(`<a href="http://www.itcast.cn">传智播客</a>`)
    })
```

## 替换节点

```js

 // 点击按钮  把b标签换成 a标签
    $('button').click(function () {
      // 元素.replaceWith(替换元素)
      $('b').replaceWith('<a href="http://www.baidu.com">百度</a>')
    })
```

## 删除节点

```js
    $('button').click(function () {
      //  元素.remove() 删除自己 逐个的删除
      // $('b').remove();
      // 父元素.empty() // 清空父元素中的所有子元素
      // $('.box').empty();
    })
```

## 复制节点

```js
 $('button').click(function () {
      //  某个元素的其他兄弟元素
      // console.log($('b').siblings())

      $('.box').append($('b').clone(true))
```

## 查找节点

### 所有子元素 某个子元素

```js
   // children() 获取某个元素的所有子元素

    // 点击按钮  把b标签换成 a标签
    $('button').click(function () {
      console.log($('.box').children())
    })
```

```js
   // 元素.find(后代元素选择器)

    // 点击按钮  把b标签换成 a标签
    $('button').click(function () {
      console.log($('.box').find('small'));
    })
```

### 父节点 祖节点们

```js
  // parent() 某个元素的父元素
    // parents() 某个元素的祖元素

    // 点击按钮  把b标签换成 a标签
    $('button').click(function () {
      console.log($('b').parent());
      console.log($('b').parents());
    })
```

### 前面的兄弟元素 前一个兄弟元素

```js
   $('button').click(function () {
      // 某个元素前面的兄弟元素 一个
      console.log($('span').prev());
      // 某个元素前面的兄弟元素 所有
      console.log($('span').prevAll());
    })
```

### 后面的兄弟元素 后一个兄弟元素

```js
  $('button').click(function () {
      // 某个元素后面的兄弟元素 一个
      // console.log($('strong').next());
      // // 某个元素后面面的兄弟元素 所有
      // console.log($('strong').nextAll());
    })
```

### 其他兄弟元素

```js
   $('button').click(function () {
      //  某个元素的其他兄弟元素
      // console.log($('b').siblings())
    })
```

## CSS方法

```js
 // 点击按钮 获取一下box这个div的宽度
    // $('button').click(function () {
    //   console.log($('div').css('width'))
    // })


    // 点击按钮 给box设置一个背景色
    // $('button').click(function () {
    //   $('div').css('backgroundColor', 'red')
    // })


    // 点击按钮 给box设置 背景色 宽度 高度
    // $('button').click(function () {
    //   $('div').css({
    //     'backgroundColor': 'red',
    //     'width': 300,
    //     'height': '300px',
    //     'color': 'green'
    //   })
    // })
```