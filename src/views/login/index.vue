<template>
  <div class="app-container" id="login" style="padding: 0;">
    <div class="header"></div>
    <div class="box">
      <div class="txt" style="margin: 60px 0 69px 0;">账号</div>
      <div class="input-effect">
        <input v-model="account" class="effect-16" type="text" :class="{'has-content': account != ''}">
        <!-- <label>First Name</label> -->
        <span class="focus-border"></span>
      </div>
      <div class="txt" style="margin: 63px 0 68px 0;">密码</div>
      <div class="input-effect">
        <input v-model="password" class="effect-16" type="password" :class="{'has-content': password != ''}">
        <!-- <label>First Name</label> -->
        <span class="focus-border"></span>
      </div>
      <el-button type="primary" class="login-btn">登录</el-button>
    </div>
  </div>
</template>

<script>
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'login',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {

  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      account: '',
      password: ''
    }
  },
  // 父组件传递过来的数据（两种方式声明：1.数组 2.对象）
  props: {

  },
  // 计算属性
  computed: {

  },
  // 监听
  watch: {

  },
  // 函数集，自己封装，便于开发使用
  methods: {

  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {

  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/lyw/index.scss";
@import "src/styles/lyw/effectInput.scss";
#login {
  background-color: #f8f8f8;
  .header {
    height: 280px;
    background-color: #ffdbe9;
  }
  .box {
    width: 500px;
    height: 656px;
    background-color: #FFF;
    box-shadow: 1px 1px 6px rgba(56, 56, 56, .2);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }
  .txt {
    font-size: $fz32;
    color: #999;
  }
  .login-btn {
    width: 100%;
    height: 66px;
    font-size: $fz32;
    margin-top: 85px;
  }

  .input-effect {
    position: relative;
  }
}
</style>
