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
