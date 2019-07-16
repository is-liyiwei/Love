const pageName = {
  state: {
    title: ''
  },
  mutations: {
    SET_PAGE_NAME(state, name) {
      console.log(name)
      state.title = name
    }
  }
}

export default pageName
