import Vue from 'vue'
import App from './App.vue'
import 'muse-ui/dist/muse-ui.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './static/css/common.css'
import router from './router'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(iView);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')