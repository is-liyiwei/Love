import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'

import '@/styles/element-variables.scss'

import '@/styles/index.scss' // global css

import plugins from '@/plugins/'

Vue.use(plugins)

import App from './App'
import router from './router'
import store from './store'

import '@/permission' // permission control

Vue.use(ElementUI, {
  size: 'small', // small or medium
  zIndex: 3000
})

import http from '@/api/request'

Vue.prototype.$http = http

// import appLog from './appLog'

// appLog()

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
