import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contribute1 from '@/components/Contribute1'
import Contribute2 from '@/components/Contribute2'
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
      path: '/contribute-1',
      name: 'Contribute1',
      component: Contribute1
    },
    {
      path: '/contribute-2',
      name: 'Contribute2',
      component: Contribute2
    },
    {
    path: '/about',
    name: 'About',
    component: About
    }
  ]
})
