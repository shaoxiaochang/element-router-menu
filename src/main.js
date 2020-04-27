import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'

import './permission' // permission control

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
