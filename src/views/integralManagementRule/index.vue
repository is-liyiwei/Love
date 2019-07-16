<template>
  <div class="app-container" id="integralManagementRule">
    <pageName></pageName>

    <div class="divider"></div>

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%;">
      <el-table-column
        prop="level"
        align="center"
        label="等级"
        width="549">
      </el-table-column>
      <el-table-column
        prop="points"
        align="center"
        label="积分"
        width="548">
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <img style="cursor: pointer;position: relative;top: 5px;" src="../../assets/images/bianji.png">
        </template>
      </el-table-column>
    </el-table>

    <div class="ctrl">
      <div style="margin-right: 20px;">共计15个记录分为1页，当前第 1 页</div>
      <el-button class="btn-ctrl">第一页</el-button>
      <el-button class="btn-ctrl">上一页</el-button>
      <el-button class="btn-ctrl">下一页</el-button>
      <el-button class="btn-ctrl">最末页</el-button>
      <div style="margin: 0 18px 0 22px;">跳转到</div>
      <el-input v-model="pageNum" placeholder="0" style="width: 50px;"></el-input>
      <el-button type="primary" class="btn-ctrl" style="color: #FFF;margin-left: 10px;">确认</el-button>
    </div>
  </div>
</template>

<script>

const tableData = [{
  points: '1312356',
  level: '一级A'
}, {
  points: '1312356',
  level: '一级A'
}, {
  points: '1312356',
  level: '一级A'
}, {
  points: '1312356',
  level: '一级A'
}, {
  points: '1312356',
  level: '四级B'
}, {
  points: '1312356',
  level: '一级A'
}, {
  points: '1312356',
  level: '一级C'
}, {
  points: '1312356',
  level: '一级A'
}, {
  points: '1312356',
  level: '二级A'
}, {
  points: '1312356',
  level: '三级A'
}]

import pageName from '@/components/pageName'
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'integralManagementRule',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      tableData,
      pageNum: 0
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
    this.changePageName('分销规则设计')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#integralManagementRule {
  .divider {
    border-top: 1px solid $borderColor;
    margin: 26px 0 20px 0;
  }

  .ctrl {
    margin-top: 60px;
    font-size: $fz14;
    height: 34px;
    border-bottom: 1px solid $borderColor;
    padding-bottom: 20px;
    @include flexBox(flex, flex-end, center);
    .btn-ctrl {
      color: $txtColor2;
    }
    .el-input__inner {
      height: 34px;
    }
  }
}
</style>
