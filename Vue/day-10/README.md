# Vue项目-day03

## 今日内容

* 路由的基本概念与原理
* Vue Router的基本使用
* Vue Router嵌套路由
* Vue Router动态路由匹配
* Vue Router编程式导航
* Vue Router命名路由

## 路由的基本概念

### 路由的概念

路由的本质就是一种对应关系，比如说我们在url地址中输入我们要访问的url地址之后，浏览器要去请求这个url地址对应的资源。
那么url地址和真实的资源之间就有一种对应的关系，就是路由。

路由分为前端路由和后端路由

1).后端路由是由服务器端进行实现，并完成资源的分发
![Snipaste_2020-10-22_13-41-04.jpg](images/Snipaste_2020-10-22_13-41-04.jpg)
2).前端路由是依靠hash值(锚链接)的变化进行实现
![Snipaste_2020-10-22_13-53-15.jpg](images/Snipaste_2020-10-22_13-53-15.jpg)
后端路由性能相对前端路由来说较低，所以，我们接下来主要学习的是前端路由
前端路由的基本概念：根据不同的事件来显示不同的页面内容，即事件与事件处理函数之间的对应关系
前端路由主要做的事情就是监听事件并分发执行事件处理函数

### 前端路由的初体验


## Vue Router的基本使用

### Vue Router介绍

它是一个Vue.js官方提供的路由管理器。是一个功能更加强大的前端路由器，推荐使用。
Vue Router和Vue.js非常契合，可以一起方便的实现SPA(single page web application,单页应用程序)应用程序的开发。
Vue Router依赖于Vue，所以需要先引入Vue，再引入Vue Router

Vue Router的特性:

* 支持H5历史模式或者hash模式
* 支持嵌套路由
* 支持路由参数
* 支持编程式路由
* 支持命名路由
* 支持路由导航守卫
* 支持路由过渡动画特效
* 支持路由懒加载
* 支持路由滚动行为

### Vue Router的基本使用步骤

0.下载vue-router

```shell
npm install vue-router@next
```



1.引入(routes/index.js)

```js
// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import Home from "../components/Home";
import About from "../components/About";
```



2.添加路由链接:`<router-link>`是路由中提供的标签，默认会被渲染为a标签，to属性默认被渲染为href属性，
to属性的值会被渲染为#开头的hash地址(App.vue)

```html
<template>
  <div class="route">
    <!-- to属性相当于href 添加链接 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
	<!-- 添加路由对应的视图 -->
    <router-view></router-view>
  </div>
</template>
```



3.添加路由填充位（路由占位符）`<router-view></router-view>`

```html
<template>
  <div class="route">
    <!-- to属性相当于href 添加链接 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
	<!-- 添加路由对应的视图 -->
    <router-view></router-view>
  </div>
</template>
```



4.定义路由组件(components文件夹)

```vue
<template>
  <div><h2>我是About组件</h2></div>
</template>

<script>
export default {};
</script>

<style></style>

```

```vue
<template>
  <div><h2>我是Home组件</h2></div>
</template>

<script>
export default {};
</script>

<style></style>

```



5.配置路由规则并创建路由实例(routes/index.js)

```js
// 2.定义路由(routes)
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

// 3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});

// 4.导出路由
export default router;

```



6.将路由挂载到Vue实例中(main.js)

```js
import { createApp } from "vue";
import App from "./App.vue";
// 导入路由
import routes from "./routes";
const app = createApp(App);

// 把路由挂载到app实例上
app.use(routes);
app.mount("#app");

```

## Vue Router 路由重定向
重定向: redirect,a这个人要去b点,自动被传送到c点
```js
const routes = [
  // 如果要重定向 那么就直接在路由规则的上面添加一行
  // 当我们访问 /的时候 自动跳转到/home
  { path: "/", redirect: "/home" }
];

```

## Vue Router嵌套路由
1.创建两个组件org  connect
```html
<template>
  <div>
    太阳伞公司是做太阳伞的.
  </div>
</template>

<script>
export default {};
</script>

<style></style>

```

```html
<template>
  <div>
    联系我,买太阳伞 邮箱: wenlin@taiyangsan.com
  </div>
</template>

<script>
export default {};
</script>

<style></style>
```
2.把这两个组件导入到路由文件中
```js
// 导入About中的子组件
import Org from "../components/Org";
import Connect from "../components/Connect";
```
3.写路由规则
```js
// 2.定义路由(routes)
const routes = [
  // 如果要重定向 那么就直接在路由规则的上面添加一行
  // 当我们访问 /的时候 自动跳转到/home
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "/org",
        component: Org
      },
      {
        path: "/connect",
        component: Connect
      }
    ]
  }
];
```
4.写router-link
5.写router-view
```html
<template>
  <div>
    <h2>我是About组件</h2>
    <router-link to="/org">公司介绍</router-link>
    <router-link to="/connect">联系我们</router-link>

    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>

```

## Vue Router动态路由匹配

## Vue Router编程式导航

## Vue Router命名路由