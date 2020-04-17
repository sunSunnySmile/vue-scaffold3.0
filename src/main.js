import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import './config/rem'
// 按需引入element
import "./plugins/element.js";
import "./assets/iconfont/iconfont.css";//引入字体图标样式
import ECharts from 'echarts'
Vue.prototype.$echarts = ECharts

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
