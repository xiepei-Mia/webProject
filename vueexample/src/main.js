// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/') { // 当路由为login时就直接下一步操作
    next();
  } else { // 否则就需要判断
    if (sessionStorage.username) {  // 如果有用户名就进行下一步操作
      next()
    } else {
      next({ path: '/login' })  // 没有用户名就跳转到login页面
    };
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
