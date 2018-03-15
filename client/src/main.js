import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// Axios
Vue.prototype.$http = axios;

// 라우터
Vue.prototype.$ro = router;

// BACKEND_URL
Vue.prototype.$backend = process.env.BACKEND_URL;
Vue.config.productionTip = true

// EventBus 사용
Vue.prototype.$EventBus = new Vue();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
