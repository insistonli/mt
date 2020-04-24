import Vue from 'vue'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/Page/index'
import changeCity from '@/Page/changeCity'
import goodList from '@/Page/goodList'
import Login from '@/page/login'
import Register from '@/page/register'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: 's/:name',
        name: 'goods',
        component: goodList
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
