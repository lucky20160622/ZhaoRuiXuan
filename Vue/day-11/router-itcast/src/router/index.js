import { createRouter, createWebHashHistory } from "vue-router";

import Users from "../components/Users";

const routes = [
  {
    // 路由规则
    path: "/",
    // 要重定向到哪个路由
    redirect: "/users"
  },
  {
    // 路由规则
    path: "/users",
    // 要展示的组件
    component: Users
  },
  {
    path: "/userinfo/:id",
    // 当path中的路由被触发的时候,动态的懒加载该组件 而不是当应用启动的时候就去加载。
    component: () => import("../components/UserInfo.vue"),
    props: true
  },
  {
    path: "/rights",
    // 当path中的路由被触发的时候,动态的懒加载该组件 而不是当应用启动的时候就去加载。
    component: () => import("../components/Rights.vue")
  },
  {
    path: "/goods",
    // 当path中的路由被触发的时候,动态的懒加载该组件 而不是当应用启动的时候就去加载。
    component: () => import("../components/Goods.vue")
  },
  {
    path: "/orders",
    // 当path中的路由被触发的时候,动态的懒加载该组件 而不是当应用启动的时候就去加载。
    component: () => import("../components/Orders.vue")
  },
  {
    path: "/settings",
    // 当path中的路由被触发的时候,动态的懒加载该组件 而不是当应用启动的时候就去加载。
    component: () => import("../components/Settings.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
