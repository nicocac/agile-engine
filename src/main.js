import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

Vue.config.productionTip = false
App.router = router
App.store = store

new Vue({
  render: h => h(App),
}).$mount('#app')
