import Layout from '../views/layout/Layout'

const baseName = `distributionManagement`

const distributionManagement = [{
  path: `/${baseName}`,
  component: Layout,
  name: baseName,
  redirect: `/${baseName}/${baseName}Index`,
  // hidden: false,
  // alwaysShow: false,
  children: [{
    path: `${baseName}Index`,
    name: `${baseName}Index`,
    meta: {
      title: `分销商管理`,
      icon: `icon-success`,
      img: require(`@/assets/images/fxsgl.png`),
      imgActive: require(`@/assets/images/fxsgl2.png`),
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}/index`)
  }, {
    path: `${baseName}Details`,
    name: `${baseName}Details`,
    hidden: true,
    meta: {
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}Details`)
  }]
}]

export default distributionManagement
