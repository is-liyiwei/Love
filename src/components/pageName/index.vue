<template>
  <div class="app-components" id="pageName">
    <div class="title">{{$store.state.pageName.title}}</div>
  </div>
</template>

<script>
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'pageName',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {

  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {

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
#pageName {
  .title {
    font-size: .5625rem;
    color: $txtColor;
    padding: 20px 0 0 10px;
    font-weight: bold;
  }
}
</style>
