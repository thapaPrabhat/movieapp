import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.css';

Vue.config.productionTip = false
window.axios = require('axios').default;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
