<template>
  <div class="grid">
    <div>
      <h1>图书管理</h1>
      <div class="book">
        <div>
          <label for="id"> 编号： </label>
          <input type="text" id="id" v-model="id" :disabled="flag" />
          <label for="name"> 名称： </label>
          <input type="text" id="name" v-model="name" />
          <button @click="handleAdd" :disabled="submitFlag">提交</button>
        </div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>
            <a href="" @click.prevent="handleEdit(item.id)">修改</a>
            <span>|</span>
            <a href="" @click.prevent="handleDel(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      // 定义一个boolean遍历
      submitFlag: false,
      flag: false,
      id: "",
      name: "",
      books: "",
    };
  },
  created() {
    // 当打开页面的时候 渲染数据 调用 handleSearch方法
    // console.log(this);
    this.handleSearch();
  },
  methods: {
    // 查询图书
    async handleSearch() {
      // 通过axios的get方法获取数据
      let res = await this.$axios.get("books");
      // console.log(res);
      this.books = res.data;
    },
    // 添加图书
    async handleAdd() {
      // 如果id的那个input能用代表是添加 如果不能用代表是修改
      // 所以要判断flag的值是true还是false
      if (this.flag) {
        // 修改
        // 通过axios根据id把书籍名称进行更新
        let res = await this.$axios.put(`books/${this.id}`, {
          name: this.name,
        });
        // console.log(res);
        if (res.data.status == 200) {
          this.handleSearch();
          // 清空给输入框
          this.id = "";
          this.name = "";
        }
        // 让输入框还可以输入
        this.flag = false;
      } else {
        // 添加
        let res = await this.$axios.post("books", {
          // 根据接口文档 要求我们传 书籍名称
          name: this.name,
        });
        if (res.data.status == 200) {
          // 那么就要刷新页面
          this.handleSearch();
          // 6.清空输入框
          this.id = "";
          this.name = "";
        }
      }
    },
    // 删除图书
    async handleDel(id) {
      // 通过axios的delete方式通过id删除书籍
      let res = await this.$axios.delete(`books/${id}`);
      // 判断状态是不是200 如果是200 代表书籍删除成功
      if (res.data.status == 200) {
        // 那么就要刷新页面
        this.handleSearch();
      }
    },
  },
  watch: {
    async name() {
      let res = await this.$axios.get(`books/book/${this.name}`);
      console.log(res.data.status);
      if (res.data.status == 1) {
        this.submitFlag = true;
      } else {
        this.submitFlag = false;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  margin: auto;
  width: 530px;
  text-align: center;
}

.grid table {
  border-top: 1px solid #c2d89a;
  width: 100%;
  border-collapse: collapse;
}

.grid th,
td {
  padding: 10;
  border: 1px dashed orange;
  height: 35px;
  line-height: 35px;
}

.grid th {
  background-color: orange;
}

.grid .book {
  padding-bottom: 10px;
  padding-top: 5px;
  background-color: orange;
}
</style>
