import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/pos'
import Stock from "@/components/pages/Stock";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },{
      path:'/stock',
      name:'Stock',
      component:Stock
    }
  ]
})
