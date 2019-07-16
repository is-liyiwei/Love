<template>
<div class="app-wrapper" :class="classObj">
  <div class="header">
    <div class="title">相册书后台管理</div>
    <img class="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536647643492&di=3758bf17e9e262fa6813524156ae0559&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2FG1%2FM00%2F11%2F3C%2FrBACFFQieDKAtNgfAAAhDA8uzzY475.jpg" alt="">
    <div class="user-name">13146131310</div>
    <button class="logout">退出</button>
  </div>
  <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
  <sidebar class="sidebar-container"></sidebar>
  <div class="main-container">
    <navbar v-if="hasNavBar"></navbar>
    <tags-view v-if="isTags"></tags-view>
    <app-main :class="appMainClass" :style="appMainViewTop"></app-main>
  </div>
</div>
</template>

<script>
import {
  Navbar,
  Sidebar,
  AppMain,
  TagsView
} from './components'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  data() {
    return {
      isTags: false,
      hasNavBar: false
    }
  },
  // mixins: [ResizeMixin],
  computed: {
    appMainClass() {
      return {
        mobile: this.device === 'mobile',
        hideSidebar: !this.sidebar.opened,
        isTags: this.isTags
      }
    },
    appMainViewTop() {
      const tags_top = this.isTags ? 34 : 0
      // const navBar_top = this.hasNavBar ? 50 : 0
      const navBar_top = this.hasNavBar ? 50 : 90
      return {
        top: tags_top + navBar_top + 'px'
      }
    },
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', {
        withoutAnimation: false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
@import "src/styles/lyw/index.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    min-width: 1280px;
    .header {
      height: 90px;
      border-bottom: 10px solid #f8f8f8;
      background: #4d4d4d;
      @include flexBox(flex, flex-end, center);
      position: relative;
      .avatar {
        height: 58px;
        width: 58px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .title {
        position: absolute;
        top: 50%;
        left: 2%;
        transform: translate3d(0, -50%, 0);
        font-size: .7rem;
        color: #FFF;
      }
      .user-name {
        font-size: .5rem;
        color: #FFF;
      }
      .logout {
        display: inline-block;
        white-space: nowrap;
        cursor: pointer;
        background: transparent;
        border: 1px solid #dcdfe6;
        color: #FFF;
        -webkit-transition: .3s;
        transition: .3s;
        font-size: .4rem;
        border-radius: 2px;
        width: 68px;
        height: 28px;
        margin-left: 46px;
        margin-right: 50px;
        outline: 0;
        &:hover {
          color: #FF76AA;
          border-color: #FF76AA;
          /*background-color: #FF76AA;*/
        }
      }
    }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
