import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueProgressBar from 'vue-progressbar'
import VueAnalytics from 'vue-analytics';

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

//Google analytics
Vue.use(VueAnalytics, {
  id: 'UA-114580823-3',
  router,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
