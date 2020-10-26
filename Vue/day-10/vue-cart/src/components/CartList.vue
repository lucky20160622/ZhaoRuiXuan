<template>
  <div>
    <div class="item" v-for="item in list" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{ item.name }}</div>
      <div class="change">
        <a href="" @click.prevent="sub(item.id)">－</a>
        <input type="text" class="num" v-model="item.num" />
        <a href="" @click.prevent="add(item.id)">＋</a>
      </div>
      <div class="del" @click="del(item.id)">×</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: ["list"],
  methods: {
    add(id) {
      this.$emit("change-num", {
        id: id,
        type: "add"
      });
    },
    sub(id) {
      this.$emit("change-num", {
        id: id,
        type: "sub"
      });
    },
    del(id) {
      this.$emit("del", id);
    }
  }
};
</script>

<style></style>
