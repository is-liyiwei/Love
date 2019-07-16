<template>
<el-scrollbar wrapClass="scrollbar-wrapper">
  <el-menu :default-active="$route.path" id="slide-bar" mode="vertical" :show-timeout="200" :collapse="isCollapse" background-color="#FFF" text-color="#323232" active-text-color="#FF76AA" :router='false'>
  <!-- <el-menu mode="vertical" :show-timeout="200" :default-active="activePath" :collapse="isCollapse" background-color="#242628" text-color="#bfcbd9" active-text-color="#409EFF"> -->
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</el-scrollbar>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  data() {
    return {
      activePath: ''
    }
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#slide-bar {

}
</style>
