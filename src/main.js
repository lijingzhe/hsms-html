import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import animate from 'animate.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(animate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
