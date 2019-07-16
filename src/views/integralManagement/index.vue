<template>
  <div class="app-container" id="integralManagement">
    <pageName></pageName>

    <div class="divider"></div>

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%">
      <el-table-column
        prop="memberNumber"
        align="center"
        label="会员账号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="昵称"
        width="446">
      </el-table-column>
      <el-table-column
        prop="points"
        align="center"
        label="积分"
        width="190">
      </el-table-column>
      <el-table-column
        prop="exchangePoints"
        align="center"
        label="兑换积分"
        width="236">
      </el-table-column>
      <el-table-column
        prop="exchangeDate"
        align="center"
        label="兑换时间"
        width="234">
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <span class="exchange-btn" @click="exchange(scope)">兑换</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="流水记录">
        <template slot-scope="scope">
          <span class="water-record-btn" @click="waterRecord(scope)">查看</span>
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
  exchangeDate: '2016-05-02 08:30:00',
  name: '王小虎1王小虎1王小虎1',
  memberNumber: '1',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  exchangeDate: '2016-05-04 08:30:00',
  name: '王小虎2王小虎2王小虎2',
  memberNumber: '2',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  exchangeDate: '2016-05-01 08:30:00',
  name: '王小虎3王小虎3王小虎3',
  memberNumber: '3',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '4',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '5',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '6',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '7',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '8',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '9',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  exchangeDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '10',
  exchangePoints: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}]

import pageName from '@/components/pageName'
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'integralManagement',
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
    exchange (item) {
      console.log(item)
    },
    waterRecord (item) {
      console.log(item)
      this.$router.push({
        name: 'integralManagementDetails',
        query: {
          item
        }
      })
    }
  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {
    this.changePageName('积分兑换申请表')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#integralManagement {
  .divider {
    border-top: 1px solid $borderColor;
    margin: 20px 0 20px 0;
  }

  .exchange-btn {
    color: $mainColor;
    font-size: $fz14;
    @include cursorPointer;
  }
  .water-record-btn {
    color: #2ca1de;
    font-size: $fz14;
    @include cursorPointer;
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
