import Layout from '../views/layout/Layout'

const baseName = `orderManagement`

const orderManagement = [{
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
      title: `订单管理`,
      icon: `icon-success`,
      img: require(`@/assets/images/ddgl.png`),
      imgActive: require(`@/assets/images/ddgl2.png`),
      fixSideBarName: baseName
    },
    component: () => import(`@/views/${baseName}/index`)
  }]
}]

export default orderManagement
