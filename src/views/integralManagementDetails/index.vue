<template>
  <div class="app-container" id="integralManagementDetails">
    <pageName></pageName>
    <div class="details-container">
      <img class="avatar" :src="memberDetails.imageUrl">
      <div class="info">
        <div class="item" v-for="(v, k) in msg">
          <div class="msg">{{v}}:</div>
          <div class="txt">{{memberDetails[k] || 'null'}}</div>
        </div>
        <div class="item-table">
          <div class="msg">积分流水记录</div>
          <div style="width: 669px;">
            <el-table
              :data="tableData"
              border
              header-cell-class-name="table-header-cell-lyw"
              row-class-name="table-column-lyw"
              style="width: 100%;">
              <el-table-column
                prop="time"
                align="center"
                label="时间"
                width="334">
              </el-table-column>
              <el-table-column
                prop="exchangePoints"
                align="center"
                label="积分兑换"
                width="334">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const memberDetails = {
  'id': 3,
  'bankAccountNumber': 6234783534537831543,
  'bankName': '中国银行',
  'bankAccountHolderName': null,
  'points': 200,
  'imageUrl': 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  'name': 'LYW',
  'createdDate': '2018-09-12 10:10:00',
  'refererId': 0,
  'refererStatus': 'Approved',
  'phoneNumber': 13012354568
}

const msg = {
  'id': '会员账号',
  'name': '昵称',
  'points': '当前积分'
  // 'phoneNumber': '手机号',
  // 'createdDate': '注册时间',
  // 'bankName': '银行卡名称',
  // 'bankAccountNumber': '银行卡号',
  // 'bankAccountHolderName': '持卡人名称',
}

const tableData = [{
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}, {
  exchangePoints: '1312356',
  time: '2018-09-12 10:20:20'
}]

import pageName from '@/components/pageName'
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'integralManagementDetails',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      memberDetails,
      msg,
      tableData
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
    this.changePageName('积分流水记录')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#integralManagementDetails {
  .details-container {
    display: flex;
    margin-top: 58px;
    .avatar {
      width: 118px;
      height: 118px;
      border-radius: 118px;
      margin-left: 23px;
    }
    .info {
      width: 100%;
      .item {
        @include flexBox(flex, flex-start, center);
        margin-bottom: 33px;
        .msg {
          color: #575757;
          font-size: $fz14;
          text-align: right;
          width: 100px;
        }
        .txt {
          color: $txtColor;
          font-size: $fz16;
          margin-left: 30px;
          font-weight: bold;
        }
      }
      .item-table {
        position: relative;
        left: 40px;
        .msg {
          color: #575757;
          font-size: $fz14;
          width: 100px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
