
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  viewType: state => state.app.viewType,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}

export default getters
