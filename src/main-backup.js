import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'

import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/element-variables.scss'

import '@/styles/index.scss' // global css

import './font_alibaba/iconfont.css'

import App from './App'
import router from './router'
import store from './store'

import '@/permission' // permission control
import * as filters from '@/utils/filters'

Vue.use(ElementUI, {
  size: 'small', // small or medium
  zIndex: 3000
}, {
  locale
})

// import waves from '@/plugins/waves'

// Vue.use(waves)

// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
// import '@/icons' // icon

// import VueAMap from 'vue-amap'

// Vue.use(VueAMap)

// VueAMap.initAMapApiLoader({
//   key: 'dd9579a90de2169a0e81083311e80cfb',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.Geocoder'],
//   uiVersion: '1.0', // 版本号
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// })

// 系统错误捕获
// const errorHandler = (error, vm)=>{
//   console.error('抛出全局异常');
//   console.error(vm);
//   console.error(error);
// }

// Vue.config.errorHandler = errorHandler;
// Vue.prototype.$throw = (error)=> errorHandler(error, this);

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
