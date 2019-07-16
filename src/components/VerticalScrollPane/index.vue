<template>
  <div id="verticalScrollPane">

    <div class="pane-container" ref="autoHeightPane" :style="paneStyle">
      <p v-if="dataName === 'name'" class="item" :class="{active: k === itemIndex}" v-for="(v, k) in dataList" :key="k" @click="changeItem(v, k)">{{v.name}}</p>
      <p v-if="dataName === 'team'" class="item" :class="{active: k === itemIndex}" v-for="(v, k) in dataList" :key="k" @click="changeItem(v, k)">{{v.team}}</p>
    </div>

  </div>
</template>

<script>
import autoHeightPane from '@/mixins/autoHeightPane'
import scrollReachBottom from '@/mixins/scrollReachBottom'
export default {
  name: 'verticalScrollPane',
  components: {

  },
  mixins: [autoHeightPane, scrollReachBottom],
  data() {
    return {
      itemIndex: 0
    }
  },
  props: {
    dataList: {
      type: Array,
      default: function() {
        return []
      }
    },
    dataName: {
      default: 'name'
    }
  },
  methods: {
    changeItem(val, idx) {
      this.itemIndex = idx
      this.$emit('clickHandle', val, idx)
    }
  },
  computed: {

  },
  beforeCreate() {

  },
  mounted() {
    console.log(this.dataList)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/variables.scss";
@import "src/styles/lyw/cursorPointer.scss";
#verticalScrollPane {
  .pane-container {
    /*height: 80px;*/
    width: 134px;
    background-color: #FFF;
    overflow-y: scroll;
    .item {
      width: 100%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border-bottom: 1px solid $divideLineColor;
      @include cursorPointer;
      &.active {
        background-color: $deputyBlue;
        color: #FFF;
      }
    }
  }
}

/*滚动条凹槽的颜色，还可以设置边框属性*/

.pane-container::-webkit-scrollbar-track-piece {
  background-color:#f8f8f8;
}

/*滚动条的宽度*/
.pane-container::-webkit-scrollbar {
  width:9px;
  height:9px;
}

/*滚动条的设置*/
.pane-container::-webkit-scrollbar-thumb {
  background-color:#dddddd;
  background-clip:padding-box;
  min-height:28px;
}

.pane-container::-webkit-scrollbar-thumb:hover {
  background-color:#bbb;
}
</style>
