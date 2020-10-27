<template>
  <h3>用户详情页面---用户id为:{{ id }}</h3>
  <button @click="handleBack">返回</button>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    handleBack(){
      // this.$router.go(-1);
       this.$router.back();
    }
  }
};
</script>

<style></style>
