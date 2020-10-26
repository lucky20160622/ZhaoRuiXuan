// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import Home from "../components/Home";
import About from "../components/About";

// 导入About中的子组件
import Org from "../components/Org";
import Connect from "../components/Connect";

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

// 3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});

// 4.导出路由
export default router;
