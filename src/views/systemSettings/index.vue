<template>
  <div class="app-container" id="systemSettings">
    <pageName></pageName>
    <div class="list" style="margin-top: 35px;">
      <div class="txt">小程序名称：</div>
      <el-input placeholder="输入查找内容" style="width: 410px;"></el-input>
    </div>
    <div class="list">
      <div class="txt">关于我的介绍：</div>
      <el-input
      type="textarea"
      placeholder="输入查找内容"
      :autosize="{ minRows: 3, maxRows: 5}"
      style="width: 410px;">
      </el-input>
    </div>
    <div class="list">
      <div class="txt">客服电话：</div>
      <el-input placeholder="输入查找内容" style="width: 410px;"></el-input>
    </div>
    <div class="list">
      <div class="txt">客服微信：</div>
      <el-input placeholder="输入查找内容" style="width: 410px;"></el-input>
    </div>
    <el-button type="primary" class="btn-save">保存</el-button>
  </div>
</template>

<script>
import pageName from '@/components/pageName'
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'systemSettings',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName
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
    this.changePageName('系统设置')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/lyw/index.scss";
#systemSettings {
  .list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .txt {
      width: 180px;
      font-size: $fz14;
      text-align: right;
      color: #575757;
      margin-right: 30px;
    }
  }
  .btn-save {
    margin-left: 210px;
    margin-top: 60px;
    width: 80px;
  }
}
</style>
