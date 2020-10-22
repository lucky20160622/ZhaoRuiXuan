# CSS3

## 渐变

### 线性渐变

#### 语法

```css
  /* 方向: top left right bottom 度数: xxxdeg  */
  /* 距离: 如果没有background-size,距离就是盒子的宽高 如果有就是background-size的宽高 */
 background-image: linear-gradient(方向, 颜色 距离, 颜色 距离)
```

### 径向渐变

```css
 /* 主轴和次轴一样是正圆 否则是椭圆  */
   background-image: radial-gradient(主轴 次轴 at 圆心X 圆心Y, 颜色 距离, 颜色 距离...)
```

## 2D转换(transform)

### translate(水平, 竖直)

- 作用: 让元素进行水平和垂直位移的 永远相对于自己(左上角)进行移动

- 布局方式: 标准流布局 即使使用translate移动了元素 原来的位置也不会被侵占

### rotate(度数) 旋转

- 作用: 让元素进行旋转  度数越大 顺时针旋转 度数越小 逆时针旋转


### scale() 缩放

- 语法: 以1为界限 大于1是放大 大于0小于1是缩小

## 转换原点

- transform-origin: 方位词 | 具体像素 | 百分比