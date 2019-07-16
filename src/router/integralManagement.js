import Layout from '../views/layout/Layout'

const baseName = `integralManagement`

const integralManagement = [{
  path: `/${baseName}`,
  component: Layout,
  name: baseName,
  redirect: `/${baseName}/${baseName}Rule`,
  hidden: false,
  alwaysShow: false,
  meta: {
    title: `分销积分管理`,
    icon: `icon-success`,
    img: require(`@/assets/images/fxjfgl.png`),
    imgActive: require(`@/assets/images/fxjfgl2.png`),
    fixSideBarName: baseName
  },
  children: [{
    path: `${baseName}Rule`,
    name: `${baseName}Rule`,
    meta: {
      title: `分销规则设计`,
      icon: `icon-success`,
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}Rule/index`)
  }, {
    path: `${baseName}Index`,
    name: `${baseName}Index`,
    meta: {
      title: `积分管理`,
      icon: `icon-success`,
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}/index`)
  }, {
    path: `${baseName}Details`,
    name: `${baseName}Details`,
    hidden: true,
    meta: {
      title: `积分详情`,
      icon: `icon-success`,
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}Details/index`)
  }]
}]

export default integralManagement
