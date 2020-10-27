import { createApp } from "vue";
import App from "./App.vue";
// 引入 index.js
// 把导出的对象 重命名为op
// import { minus }  from "./assets/js/index";
// import op  from "./assets/js/index";
// console.log(op.add(2,3));
// console.log(op);
// console.log(minus(4,2))

import * as index from './assets/js/index';


console.log(index.add(2,3));



createApp(App).mount("#app");
