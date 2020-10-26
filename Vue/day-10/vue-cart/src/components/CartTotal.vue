<template>
  <!-- 总价 -->
  <div class="total">
    <span>总价：{{ price }}</span>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  name: "CartTotal",
  props: ["list"],
  computed: {
    price() {
      // 2.3.1 总价
      let sum = 0;
      // console.log(this.list);
      // 2.3.2 遍历每个商品的数据
      this.list.forEach(ele => {
        // console.log(ele)
        // 总价 = 每个商品的数量 * 单价
        sum += ele.num * ele.price;
      });
      // 返回总价
      return sum;
    }
  }
};
</script>

<style></style>
