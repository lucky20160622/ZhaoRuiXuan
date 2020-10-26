<template>
  <div>
    <h2>我是Home组件</h2>
    <!-- 点击按钮 让页面跳转到 /org路由下 -->

    <button @click="handleDump">点击按钮到公司介绍</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleDump() {
      // console.log(this);
      this.$router.push('/org')
    }
  }
};
</script>

<style></style>
