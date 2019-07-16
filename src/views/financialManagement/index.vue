<template>
  <div class="app-container" id="financialManagement">
    <pageName></pageName>

    <div class="header-ctrl">
      <div class="left">
        <div class="txt" style="margin: 0 12px 0 10px;">订单时间</div>
        <el-date-picker
          style="width: 150px;"
          v-model="search"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <el-button type="primary" class="btn">查看</el-button>
      </div>
      <div class="right">
        <el-button-group>
          <el-button @click="changNav(k)" v-for="(v, k) in dateNavArr" :key="k" :style="{color: dateIndex == k ? '#ff76aa' : ''}">{{v}}</el-button>
        </el-button-group>
      </div>
    </div>

    <div style="display: flex;">

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%;margin-right: 25px;">
      <el-table-column
        prop="createDate"
        align="center"
        label="订单时间"
        width="399">
      </el-table-column>
      <el-table-column
        prop="priceInPennies"
        align="center"
        label="金额">
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%;margin-left: 25px;">
      <el-table-column
        prop="createDate"
        align="center"
        label="订单时间"
        width="399">
      </el-table-column>
      <el-table-column
        prop="priceInPennies"
        align="center"
        label="金额">
      </el-table-column>
    </el-table>

    </div>

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
  createDate: '2016-05-02 08:30:00',
  priceInPennies: '1'
}, {
  createDate: '2016-05-04 08:30:00',
  priceInPennies: '2'
}, {
  createDate: '2016-05-01 08:30:00',
  priceInPennies: '3'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '4'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '5'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '6'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '7'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '8'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '9'
}, {
  createDate: '2016-05-03 08:30:00',
  priceInPennies: '10'
}]
import pageName from '@/components/pageName'

// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'financialManagement',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      search: '',
      pageNum: 0,
      tableData,
      dateNavArr: ['日', '周', '月', '季度', '年'],
      dateIndex: 0
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
    changNav (idx) {
      this.dateIndex = idx
    }
  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {
    // this.log(this)
    this.changePageName('财务管理')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#financialManagement {
  .header-ctrl {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 23px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid $borderColor;
    .left {
      display: flex;
      align-items: center;
      .el-input__inner {
        height: 50px;
        line-height: 50px;
      }
      .el-button--primary {
        height: 50px;
      }
      .el-range-editor--small .el-range-separator {
        line-height: 41px;
      }
      .txt {
        font-size: $fz16;
        color: #999999;
      }
      .btn {
        margin: 0 20px;
        font-size: $fz18;
      }
    }
    .el-button {
      width: 111px;
      height: 50px;
      font-size: $fz18;
    }
  }

  .icons {
    @include flexBox(flex, center, center);
    img {
      width: 16px;
      height: 16px;
      @include cursorPointer;
    }
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
