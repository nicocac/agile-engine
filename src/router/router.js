import Vue from 'vue'
import Router from 'vue-router'
import Home from '../layouts/home'
import Error from '../components/UI/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],
  linkActiveClass: 'active'
})
