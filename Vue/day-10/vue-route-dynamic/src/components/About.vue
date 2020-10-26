<template>
  <div>
    <h2>我是About组件</h2>
    <p>获取到的ID:{{ id }},我的名字叫{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style></style>
