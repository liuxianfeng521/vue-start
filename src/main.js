import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import * as filters from './filters' // global filters
// 引入mockjs
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV !== 'production') {
  mockXHR()
}
Vue.config.productionTip = false
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
