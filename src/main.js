import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueProgressBar from 'vue-progressbar'
import VueAnalytics from 'vue-ua'

import './assets/styles/index.css';

Vue.config.productionTip = false
window.axios = require('axios').default;
window.axios.defaults.headers.common["Authorization"] = "Bearer " + process.env.VUE_APP_AUTH_KEY;

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

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
//Google analytics scripts
Vue.use(VueAnalytics, {
  appName: 'Vue Movie App',
  // [Required] The version of your app.
  appVersion: 'V1',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-114580823-3',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
