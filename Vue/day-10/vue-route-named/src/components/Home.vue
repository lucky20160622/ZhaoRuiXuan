<template>
  <div><h2 @click="handleClick">我是Home组件</h2></div>
</template>

<script>
export default {
  methods: {
    handleClick(){
      console.log(this);
    }
  }
};
</script>

<style></style>
