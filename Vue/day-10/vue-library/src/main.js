import * as Vue from 'vue'
// 导入根组件
import App from './App.vue'
import Axios from "axios";
Axios.defaults.baseURL ="http://localhost:3000"
// 创建实例对象
let vm =Vue.createApp(App);
// 把引入的Axios挂载到Vue实例上
vm.config.globalProperties.$axios = Axios;
vm.mount("#app");

