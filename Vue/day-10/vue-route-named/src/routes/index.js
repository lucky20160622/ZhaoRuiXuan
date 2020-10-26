// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import Home from "../components/Home";
import About from "../components/About";
// 2.定义路由(routes)
const routes = [
  // 如果要重定向 那么就直接在路由规则的上面添加一行
  // 当我们访问 /的时候 自动跳转到/home
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { name: "ab", path: "/about/:id", component: About, props: true }
];

// 3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});

// 4.导出路由
export default router;
