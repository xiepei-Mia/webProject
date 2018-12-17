import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import main from '@/components/main'
import firstpage from '@/components/firstpage'
import more from '@/components/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/main',
      name:'main',
      component: main
    },
    {
      path:'/firstpage',
      name:'firstpage',
      component: firstpage
    },
    {
      path:'/more',
      name:'more',
      component: more
    },
  ]
})

