import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//C3donghua zhujian
import  loading from "@/components/Loading"
Vue.component('loading',loading)

//注册全局组件
import Scroller from "@/components/Scroller"
Vue.component('Scroller',Scroller)

//全局配置axios,之后能在所有页面使用axios
import axios from 'axios'
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
