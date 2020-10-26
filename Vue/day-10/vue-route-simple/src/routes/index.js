// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import Home from "../components/Home";
import About from "../components/About";
// 2.定义路由(routes)
const routes = [
  { path: "/home", component: Home },
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
