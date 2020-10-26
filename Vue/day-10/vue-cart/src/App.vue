<template>
  <div class="container">
    <Cart></Cart>
  </div>
</template>

<script>
// 引入购物车组件
import Cart from "./views/Cart";
export default {
  name: "App",
  components: {
    Cart
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
