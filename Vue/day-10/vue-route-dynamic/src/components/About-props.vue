<template>
  <div>
    <h2>我是About组件</h2>
    <p>获取到的ID:{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style></style>
