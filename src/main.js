import Vue from 'vue'
import App from './App.vue'
import 'muse-ui/dist/muse-ui.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './static/css/common.css'
import router from './router'
import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8080';
import VueCookies from 'vue-cookies'
import {
  post,
  get,
} from './utils/https'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;



Vue.use(VueCookies)
Vue.use(iView);
Vue.use(axios);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')