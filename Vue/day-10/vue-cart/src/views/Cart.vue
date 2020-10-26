<template>
  <div class="cart">
    <CartTitle :uname="uname"></CartTitle>
    <CartList :list="list" @change-num="changeNum"></CartList>
    <CartTotal :list="list"></CartTotal>
  </div>
</template>

<script>
// 引入购物车标题组件
import CartTitle from "../components/CartTitle";
// 引入购物车列表组件
import CartList from "../components/CartList";
// 引入购物车结算组件
import CartTotal from "../components/CartTotal";
export default {
  name: "Cart",
  data() {
    return {
      uname: "张三一",
      list: [
        {
          id: 1,
          name: "TCL彩电",
          price: 1000,
          num: 1,
          img: "/image/a.jpg"
        },
        {
          id: 2,
          name: "机顶盒",
          price: 1000,
          num: 1,
          img: "/image/b.jpg"
        },
        {
          id: 3,
          name: "海尔冰箱",
          price: 1000,
          num: 1,
          img: "/image/c.jpg"
        },
        {
          id: 4,
          name: "小米手机",
          price: 1000,
          num: 1,
          img: "/image/d.jpg"
        },
        {
          id: 5,
          name: "PPTV电视",
          price: 1000,
          num: 2,
          img: "/image/e.jpg"
        }
      ]
    };
  },
  methods: {
    // 无论是输入值还是点击增加 还是点击减少都是在改变值
    changeNum(val) {
      // 如果type为change 意味着input中是在改变值 直接输入的
      if (val.type == "change") {
        // 遍历数组
        this.list.some(item => {
          // 判断 id和传过来的id一样的那一项 把num设置进去
          if (item.id == val.id) {
            // 把传过来的num赋值给list中的num
            item.num = val.num;
            // 为了让some方法有返回值 返回一个true
            return true;
          }
        });
      } else if (val.type == "add") {
        // 如果type为add 则表示用户点击了+号
        this.list.some(item => {
          // 找到改变的那个商品
          if (item.id == val.id) {
            // 让商品的数量增加
            item.num++;
            // 怕出现负数 所以重置为0
            item.num = item.num < 0 ? 0 : item.num;
            return true;
          }
        });
        // 让值增加
      } else if (val.type == "sub") {
        // 如果type为sub 则表示用户点击了-号
        // 让值减少
        this.list.some(item => {
          // 找到改变的那个商品
          if (item.id == val.id) {
            item.num--;
            item.num = item.num < 0 ? 0 : item.num;
            return true;
          }
        });
      }
    },
    // 父元素定义的自定义事件的回调函数
    delCart(id) {
      // console.log(val)
      let index = this.list.findIndex(item => item.id == id);
      // console.log(index);
      this.list.splice(index, 1);
    }
  },
  components: {
    CartTitle,
    CartList,
    CartTotal
  }
};
</script>

<style></style>
