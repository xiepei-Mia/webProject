import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import menu from '@/components/menu'
import shopcart from '@/components/shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    }
  ]
})
