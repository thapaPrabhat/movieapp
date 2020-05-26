import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

import './assets/styles/index.css';

Vue.config.productionTip = false
window.axios = require('axios').default;
window.axios.defaults.headers.common["Authorization"] = "Bearer " + process.env.VUE_APP_AUTH_KEY;

Vue.filter('yearFormat', function(value) {
  if (value) {
    return moment(String(value)).format('Y')
  }
})

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('M d, Y')
  }
})

Vue.filter('age', function(value) {
  if (value) {
    return moment().diff(value, 'years')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
