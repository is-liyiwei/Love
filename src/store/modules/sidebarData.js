import Cookies from 'js-cookie'

const sidebarData = {
  state: {
    sidebarActiveName: Cookies.get('sidebarActiveName') || 'memberManagement'
  },
  mutations: {
    SET_SIDEBAR_NAME(state, name) {
      // console.log(name)
      Cookies.set('sidebarActiveName', name)
      state.sidebarActiveName = name
    }
  },
  actions: {

  }
}

export default sidebarData
