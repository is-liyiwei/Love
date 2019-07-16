import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import app from './modules/app'
import tagsView from './modules/tagsView'
import sidebarData from './modules/sidebarData'
import pageName from './modules/pageName'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    sidebarData,
    pageName
  },
  getters
})

export default store
