import Layout from '../views/layout/Layout'

const baseName = `financialManagement`

const financialManagement = [{
  path: `/${baseName}`,
  component: Layout,
  name: baseName,
  redirect: `/${baseName}/${baseName}Index`,
  // hidden: false,
  // alwaysShow: false,
  // meta: {
  //   title: `${baseName}`,
  //   icon: `icon-success`
  // },
  children: [{
    path: `${baseName}Index`,
    name: `${baseName}Index`,
    meta: {
      title: `财务管理`,
      icon: `icon-success`,
      img: require(`@/assets/images/cwgl.png`),
      imgActive: require(`@/assets/images/cwgl2.png`),
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}/index`)
  }]
}]

export default financialManagement
