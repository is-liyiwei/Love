<template>
  <div id="menu-wrapper" class="menu-wrapper" style="padding-top: 50px;">
    <template v-for="item in routes" v-if="!item.hidden && item.children">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children && !item.alwaysShow" :to="item.path + '/' + item.children[0].path" :key="item.children[0].name">
        <el-menu-item @click="changeSidebar(item)" :index="item.path + '/' + item.children[0].path" :class="{'submenu-title-noDropdown': !isNest, active: sidebarName == item.name}" class="border-left">
          <!-- <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon> -->
          <!-- <div class="icon-box"><i class="iconfont" v-if="item.children[0].meta && item.children[0].meta.icon" :class="item.children[0].meta.icon"></i></div> -->
          <!-- <img class="icon-img" src="../../../../assets/images/pj.png" alt=""> -->
          <img class="icon-img" v-if="item.children[0].name.indexOf(sidebarName) != -1" :src="item.children[0].meta.imgActive" alt="">
          <img class="icon-img" v-else="item.children[0].meta.img" :src="item.children[0].meta.img" alt="">
          <span v-if="item.children[0].meta && item.children[0].meta.title" slot="title" :class="{'txt-color': sidebarName == item.name}" class="slide-txt">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <div v-else>
        <el-submenu :index="item.name || item.path" :key="item.name">
          <template slot="title" class="border-left">
            <img class="icon-img" v-if="sidebarName.indexOf(item.name) != -1" :src="item.meta.imgActive" alt="">
            <img class="icon-img" v-else="item.meta.img" :src="item.meta.img" alt="">
            <!-- <img class="icon-img" v-if="item.meta.img" :src="item.meta.img" alt=""> -->
            <span v-if="item.meta && item.meta.title" slot="title" class="slide-txt">{{item.meta.title}}</span>
          </template>

          <template v-for="child in item.children" v-show="!child.hidden">
            <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children && child.children.length > 0" :routes="[child]" :key="child.path"></sidebar-item>

            <router-link :style="{display: !child.hidden ? '' : 'none'}" v-else :to="item.path + '/' + child.path" :key="child.name">
              <el-menu-item @click="changeSidebar(child)" :index="item.path + '/' + child.path" class="border-left item-bg" style="padding-left: 48px">
                <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
                <!-- <div class="icon-box"><i class="iconfont icon-success"></i></div> -->
                <!-- <img class="icon-img" v-if="child.meta.img" :src="child.meta.img" alt=""> -->
                <span v-if="child.meta && child.meta.title" slot="title" :class="{'txt-color': sidebarName == child.name}" class="slide-txt-sub">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </div>
    </template>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'SidebarItem',
  data() {
    return {

    }
  },
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    changeSidebar(item) {
      // 这个方法暂时没用了，之前一个版本用来控制侧边栏的
      // 好像是本田项目有个侧边item，既要下拉，又要转页面才用的
      // console.log(item.name)
      // this.$store.commit('SET_SIDEBAR_NAME', item.name)
    }
  },
  computed: {
    sidebarName() {
      return this.$store.state.sidebarData.sidebarActiveName
    }
  },
  created() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/sidebarByOrder.scss";
</style>
