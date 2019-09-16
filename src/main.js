import Vue from 'vue'
import App from './App.vue'
import 'muse-ui/dist/muse-ui.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './static/css/common.css'

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')