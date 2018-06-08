import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contribute from '@/components/Contribute'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contribute',
      name: 'Contribute',
      component: Contribute

    },
    {
    path: '/about',
    name: 'About',
    component: About
    }
  ]
})
