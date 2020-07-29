import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局配置axios,之后能在所有页面使用axios
import axios from 'axios'
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
