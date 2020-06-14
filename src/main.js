import Vue from 'vue'
import App from './App'
import router from './router'//注意啊模块查找规则index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) 
 
