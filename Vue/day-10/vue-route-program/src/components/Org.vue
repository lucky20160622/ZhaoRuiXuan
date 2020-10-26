<template>
  <div @click="handleBack">
    太阳伞公司是做太阳伞的.
  </div>
</template>

<script>
export default {
  methods: {
    handleBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style></style>
