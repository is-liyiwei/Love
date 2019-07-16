<template>
  <div class="app-component" id="dialogEditLyw">
    <div class="dialog" v-show="dialogVisible">

      <div class="content" :style="contentStyle">

        <div class="header">
          <div>权限编辑</div>
        </div>

        <div class="body">
          <slot name="body"></slot>
        </div>

        <div class="footer">
          <slot name="footer">
            <el-button class="btn-one" type="primary" @click="comfirm">确 定</el-button>
            <el-button class="btn-two" @click="dialogVisible = false">取 消</el-button>
          </slot>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'dialogEditLyw',
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      dialogVisible: false
    }
  },
  props: {
    width: {
      type: String,
      default: '831px'
    },
    height: {
      type: String,
      default: '316px'
    }
  },
  // 函数集，自己封装，便于开发使用
  methods: {
    comfirm () {
      this.dialogVisible = false
      this.$emit('comfirm')
    }
  },
  computed: {
    contentStyle () {
      return {
        'width': this.width,
        'height': this.height
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#dialogEditLyw {
  .dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(52, 52, 52, .5);
    .content {
      background: #FFF;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      padding-left: 162px;
      transform: translate3d(-50%, -50%, 0);
      .header {
        margin-top: 82px;
        margin-bottom: 58px;
        font-size: $fz20;
        color: $mainColor;
      }
      .body {

      }
      .footer {
        margin-bottom: 66px;
        .btn-one {
          width: 126px;
          height: 50px;
          font-size: $fz18;
          margin-right: 10px;
        }
        .btn-two {
          width: 126px;
          height: 50px;
          font-size: $fz18;
        }
      }
    }
  }
}
</style>
