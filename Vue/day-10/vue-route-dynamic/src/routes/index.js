// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import Home from "../components/Home";
import About from "../components/About";
// 2.定义路由(routes)
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  // 根据不同的id 显示不同的内容
  // 你可以在组件中通过props属性获取id的值
  {
    path: "/about/:id",
    component: About,
    props: router => ({ id: router.params.id, name: "张三" })

    // props: (router) =>{
    //   return {
    //     id: router.params.id, name: "张三"
    //   }
    // }
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
