import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
  // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
