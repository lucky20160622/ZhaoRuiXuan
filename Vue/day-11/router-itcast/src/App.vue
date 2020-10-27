<template>
  <!-- 头部 -->
  <header class="header">后台管理系统</header>
  <!-- 内容区域 -->
  <main class="main">
    <!-- 侧边栏 -->
    <aside class="content left">
      <ul>
        <li><router-link to="/users">用户管理</router-link></li>
        <li><router-link to="/rights">权限管理</router-link></li>
        <li><router-link to="/goods">商品管理</router-link></li>
        <li><router-link to="/orders">订单管理</router-link></li>
        <li><router-link to="/settings">系统设置</router-link></li>
      </ul>
    </aside>
    <!-- 内容显示 -->
    <article class="content right">
      <router-view></router-view>
    </article>
  </main>
  <!-- 底部 -->
  <footer class="footer">版权信息</footer>
</template>

<script>
export default {};
</script>

<style></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body,
#app {
  margin: 0;
  padding: 0px;
  height: 100%;
}
.header {
  height: 50px;
  background-color: #545c64;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.footer {
  height: 40px;
  line-height: 40px;
  background-color: #888;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
}
.main {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 40px;
  width: 100%;
}
.content {
  flex: 1;
  text-align: center;
  height: 100%;
}
.left {
  flex: 0 0 20%;
  background-color: #545c64;
}
.left a {
  display: block;
  height: 100%;
  color: white;
  text-decoration: none;
}
.right {
  margin: 5px;
}
.btns {
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: #f5f5f5;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
}
button {
  height: 30px;
  background-color: #ecf5ff;
  border: 1px solid lightskyblue;
  font-size: 12px;
  padding: 0 20px;
}
.main-content {
  margin-top: 10px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  height: 45px;
  line-height: 45px;
  background-color: #a0a0a0;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #eee;
  line-height: 35px;
  font-size: 12px;
}

th {
  background-color: #ddd;
}
</style>
