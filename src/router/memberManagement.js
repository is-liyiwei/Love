import Layout from '../views/layout/Layout'

const baseName = `memberManagement`

const memberManagement = [{
  path: `/${baseName}`,
  component: Layout,
  name: baseName,
  redirect: `/${baseName}/${baseName}Index`,
  // hidden: true,
  alwaysShow: false,
  children: [{
    path: `${baseName}Index`,
    name: `${baseName}Index`,
    meta: {
      title: `会员管理`,
      icon: `icon-success`,
      img: require(`@/assets/images/hygl.png`),
      imgActive: require(`@/assets/images/hygl2.png`),
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}`)
  }, {
    path: `${baseName}MemberDetails`,
    name: `${baseName}MemberDetails`,
    hidden: true,
    meta: {
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}MemberDetails`)
  }]
}]

export default memberManagement
