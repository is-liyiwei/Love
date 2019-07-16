<template>
  <div class="app-container" id="distributionManagementDetails">
    <pageName></pageName>
    <div class="details-container">
      <img class="avatar" :src="memberDetails.imageUrl">
      <div class="info">

        <div class="item" v-for="(v, k) in msg">
          <div class="msg">{{v}}:</div>
          <div class="txt">{{memberDetails[k] || 'null'}}</div>
        </div>

        <div style="width: 1200px;" class="superior-table">
          <div class="txt">上级</div>
          <div class="superior-info">
            <img class="avatar" :src="memberDetails.imageUrl">
            <div class="msg">会员账号：<span style="font-weight: bold;">{{memberDetails.id}}</span></div>
            <div class="msg">昵称：<span style="font-weight: bold;">{{memberDetails.name}}</span></div>
          </div>
        </div>

        <div style="width: 1200px;" class="lower-table">
          <div class="txt">下级</div>
          <div>
            <el-table
              :data="tableData"
              border
              header-cell-class-name="table-header-cell-lyw"
              row-class-name="table-column-lyw"
              style="width: 100%;">
              <el-table-column
                prop="index"
                align="center"
                label="下级"
                width="147">
              </el-table-column>
              <el-table-column
                prop="id"
                align="center"
                label="会员账号"
                width="169">
              </el-table-column>
              <el-table-column
                prop="name"
                align="center"
                label="昵称"
                width="351">
              </el-table-column>
              <el-table-column
                prop="imageUrl"
                align="center"
                label="头像"
                width="256">
                <template slot-scope="scope">
                  <img style="width: 34px;height: 34px;border-radius: 34px;" :src="scope.row.imageUrl" alt="">
                </template>
              </el-table-column>
              <el-table-column
                prop="points"
                align="center"
                label="积分">
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
  'points': '当前积分',
  'phoneNumber': '手机号'
  // 'createdDate': '注册时间',
  // 'bankName': '银行卡名称',
  // 'bankAccountNumber': '银行卡号',
  // 'bankAccountHolderName': '持卡人名称',
}

const tableData = [{
  index: 1,
  name: '王小虎1王小虎1王小虎1',
  id: '1',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 2,
  name: '王小虎2王小虎2王小虎2',
  id: '2',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 3,
  name: '王小虎3王小虎3王小虎3',
  id: '3',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 4,
  name: '王小虎4王小虎4王小虎4',
  id: '4',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 5,
  name: '王小虎4王小虎4王小虎4',
  id: '5',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 6,
  name: '王小虎4王小虎4王小虎4',
  id: '6',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 7,
  name: '王小虎4王小虎4王小虎4',
  id: '7',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 8,
  name: '王小虎4王小虎4王小虎4',
  id: '8',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 9,
  name: '王小虎4王小虎4王小虎4',
  id: '9',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}, {
  index: 10,
  name: '王小虎4王小虎4王小虎4',
  id: '10',
  imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
  points: '1312356'
}]

import pageName from '@/components/pageName'
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'distributionManagementDetails',
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
    this.changePageName('上下级关系')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#distributionManagementDetails {
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
      .superior-table {
        position: relative;
        left: 40px;
        margin-bottom: 38px;
        .txt {
          font-size: $fz14;
          margin-bottom: 20px;
          color: $mainColor;
          border-left: 4px solid $mainColor;
          padding-left: 9px;
        }
        .superior-info {
          display: flex;
          align-items: center;
          background-color: #f1f1f1;
          height: 76px;
          .avatar {
            width: 56px;
            height: 56px;
            border-radius: 56px;
            margin-left: 26px;
          }
          .msg {
            color: #575757;
            font-size: $fz14;
            width: 100px;
            &:nth-of-type(1) {
              margin-left: 17px;
            }
            &:nth-of-type(2) {
              margin-left: 184px;
            }
          }
        }
      }
      .lower-table {
        position: relative;
        left: 40px;
        .txt {
          font-size: $fz14;
          margin-bottom: 20px;
          color: $mainColor;
          border-left: 4px solid $mainColor;
          padding-left: 9px;
        }
      }
    }
  }
}
</style>
