import Layout from '../views/layout/Layout'

const baseName = `systemSettings`

const systemSettings = [{
  path: `/${baseName}`,
  component: Layout,
  name: baseName,
  redirect: `/${baseName}/${baseName}Index`,
  hidden: false,
  alwaysShow: false,
  meta: {
    title: `系统设置`,
    icon: `icon-success`,
    img: require(`@/assets/images/xtss.png`),
    imgActive: require(`@/assets/images/xtss2.png`),
    fixSideBarName: baseName
  },
  children: [{
    path: `${baseName}Index`,
    name: `${baseName}Index`,
    meta: {
      title: `系统设置`,
      icon: `icon-success`,
      fixSideBarName: baseName
      // img: require(`@/assets/images/shanchu.png`)
    },
    component: () => import(`@/views/${baseName}`)
  }, {
    path: `${baseName}RoleGrouping`,
    name: `${baseName}RoleGrouping`,
    meta: {
      title: `角色分组`,
      icon: `icon-success`,
      fixSideBarName: baseName
      // img: require(`@/assets/images/shanchu.png`)
    },
    component: () => import(`@/views/${baseName}RoleGrouping`)
  }, {
    path: `${baseName}AdminList`,
    name: `${baseName}AdminList`,
    meta: {
      title: `管理员列表`,
      icon: `icon-success`,
      fixSideBarName: baseName
      // img: require(`@/assets/images/shanchu.png`)
    },
    component: () => import(`@/views/${baseName}AdminList`)
  }, {
    path: `${baseName}BannerManagement`,
    name: `${baseName}BannerManagement`,
    meta: {
      title: `banner广告管理`,
      icon: `icon-success`,
      fixSideBarName: baseName
      // img: require(`@/assets/images/shanchu.png`)
    },
    component: () => import(`@/views/${baseName}BannerManagement`)
  }]
}]

export default systemSettings
