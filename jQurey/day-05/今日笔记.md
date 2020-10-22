# jQuery动画

## 显示隐藏动画

### show([speed,[easing],[fn]])

### hide([speed,[easing],[fn]])

### toggle([speed],[easing],[fn])

speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
easing:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
fn:在动画完成时执行的函数，每个元素执行一次。

## 滑动动画

### slideDown([speed],[easing],[fn])

### slideUp([speed,[easing],[fn]])

### slideToggle([speed],[easing],[fn])

speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
easing:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
fn在动画完成时执行的函数，每个元素执行一次

## 淡入淡出动画

### fadeIn([speed],[easing],[fn])

### fadeOut([speed],[easing],[fn])

### fadeTo([[speed],opacity,[easing],[fn]])

### fadeToggle([speed,[easing],[fn]])

speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
easing:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
fn:在动画完成时执行的函数，每个元素执行一次。

## 自定义动画

### animate(params,[speed],[easing],[fn])

### stop([clearQueue],[jumpToEnd])

### dalay(duration,[queueName])

### finish([queue ])
