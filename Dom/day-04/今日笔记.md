# WebAPI

## 排他思想

  有一组元素，如果你只想在某一时刻只有一个元素被设置上样式，就需要用到排他思想
  1.清除其他所有元素的样式
  2.设置自己的样式
  3.一定要注意顺序: 先清除其他再设置

## 自定义属性(存储数据)

### 传统的自定义属性(兼容性好,操作麻烦)

#### 语法

```html
 
 <标签 自定义属性的名字="值"></标签>

 <li index="1" cc="bca"  family="xiaowang" family-name="zss"></li>
 
```

#### 添加自定义属性

语法: 元素.setAttribute("自定义属性的名字","自定义属性的值")
参数: 自定义属性的名 自定义属性的值
返回值: 无返回值

#### 删除自定义属性

语法: 元素.removeAttribute("自定义属性的名字")
参数: 自定义属性的名字
返回值: 无

#### 修改自定义属性

#### 获取自定义属性

语法: 元素.getAttribute("自定义属性的名字")
参数: 自定义属性的名字
返回值: 自定义属性的值


### h5中的自定义属性(兼容性不好,操作简单)

#### 语法

```html
 
 <标签 data-自定义属性的名字="值"></标签>

 <li data-index="1" data-cc="bca"  data-family="xiaowang" data-family-name="zss"></li>
 
```

#### 添加自定义属性

 语法: 元素.dataset.自定义属性的名字 =值

#### 删除自定义属性

 语法: delete 元素.dataset.自定义属性的名字

#### 修改自定义属性

 语法: 元素.dataset.自定义属性的名字 =值

#### 获取自定义属性

 语法: let 变量 = 元素.dataset.自定义属性的名字

 ```js
    // 两个单词的自定义属性 要使用驼峰命名法获取
    // console.log(oLi.dataset.age);
    // console.log(oLi.dataset.familyName);
    // console.log(oLi.dataset['familyName']);
 ```