let vm = Vue.createApp({
  data() {
    return {
      id: "",
      name: "",
      searchName: "",
      brandlist: [
        {
          id: 1,
          name: "奔驰",
          ctime: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          name: "宝马",
          ctime: new Date().toLocaleDateString(),
        },
        {
          id: 3,
          name: "长安奔奔",
          ctime: new Date().toLocaleDateString(),
        },
        {
          id: 4,
          name: "千里马",
          ctime: new Date().toLocaleDateString(),
        },
      ],
    };
  },
  methods: {
    add() {
      //   console.log(this.id);
      //   console.log(this.name);
      // 判断是否为空
      if (this.id == "" || this.name == "") {
        alert("请输入内容");
        // 阻止代码继续执行
        return false;
      }
      //   新建对象
      const newobj = {
        id: this.id,
        name: this.name,
        cting: new Date().toLocaleDateString,
      };
      //添加到数组对象中
      this.brandlist.push(newobj);
      //  还原初始状态
      this.id = this.name = "";
    },
    remove(removeId) {
      // console.log(removeId);
      //得到索引删除
      this.brandlist.splice(removeId, 1);
    },
    search() {
      //   console.log(this.searchName);
      let result = this.brandlist.filter((value) => {
        // console.log(value.name == this.searchName);

        // 查看输入的字符串是否在数组对象之中
        return value.name.includes(this.searchName);
      });
      //   console.log(result);
      return result;
    },
  },
}).mount("#app");
