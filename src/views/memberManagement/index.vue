<template>
  <div class="app-container" id="memberManagement">
    <pageName></pageName>

    <div class="search-box">
      <!-- <img src="../../assets/images/sousuo.png" class="search-icon"> -->
      <el-input v-model="search" placeholder="输入查找内容" prefix-icon="el-icon-search" style="width: 410px;"></el-input>
      <el-button type="primary" class="btn-search">查找</el-button>
      <el-button type="primary" class="add-member">+ 新增会员</el-button>
    </div>

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
        width="233">
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
        prop="photoNumber"
        align="center"
        label="手机号"
        width="236">
      </el-table-column>
      <el-table-column
        prop="createDate"
        align="center"
        label="注册时间"
        width="234">
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <div class="icons">
            <img @click="toPage('memberManagementMemberDetails')" src="../../assets/images/bianji.png" style="margin-right: 55px;">
            <img @click="openDialog(scope)" src="../../assets/images/shanchu.png">
          </div>
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

    <dialogLyw ref="dialogLyw">
      <div slot="header">删除之后将不能恢复，是否确认删除?</div>
    </dialogLyw>

  </div>
</template>

<script>

const tableData = [{
  createDate: '2016-05-02 08:30:00',
  name: '王小虎1王小虎1王小虎1',
  memberNumber: '1',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  createDate: '2016-05-04 08:30:00',
  name: '王小虎2王小虎2王小虎2',
  memberNumber: '2',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  createDate: '2016-05-01 08:30:00',
  name: '王小虎3王小虎3王小虎3',
  memberNumber: '3',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '4',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '5',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '6',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '7',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '8',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '9',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}, {
  createDate: '2016-05-03 08:30:00',
  name: '王小虎4王小虎4王小虎4',
  memberNumber: '10',
  photoNumber: '13012345678',
  points: '1312356',
  address: '上海市普陀区金沙江路 1516 弄'
}]

import api_order from '@/api/lyw/api_order'
import pageName from '@/components/pageName'
import dialogLyw from '@/components/dialogLyw'

// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'memberManagement',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName,
    dialogLyw
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      search: '',
      pageNum: 0,
      tableData,
      dialogActiveItem: {}
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
    toPage (pageName) {
      this.$router.push({
        name: pageName
      })
    },
    openDialog (item) {
      this.dialogActiveItem = item.row
      this.$refs.dialogLyw.dialogVisible = true
    }
  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {
    // this.log(this)
    this.changePageName('会员列表')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {
    this.$refs.dialogLyw.$on('comfirm', () => {
      console.log(this.dialogActiveItem)
    })
    this.$http({
      ...api_order.getOrderDetailsByUserId,
      data: {
        userId: 1
      }
    }).then(res => {
      // this.log(res)
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#memberManagement {
  .search-box {
    display: flex;
    margin-top: 23px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 20px;
    border-bottom: 1px solid $borderColor;
/*    .search-icon {
      position: absolute;
      top: calc(50% - 10px);
      left: 10px;
      z-index: 1888;
      width: 20px;
      height: 20px;
      transform: translate3d(0, -50%, 0);
    }*/
    .el-input__inner {
      height: 50px;
      line-height: 50px;
      /*padding-left: 40px;*/
    }
    .btn-search {
      margin-left: 20px;
      width: 84px;
      font-size: $fz18;
    }
    .add-member {
      width: 138px;
      height: 40px;
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: $fz16;
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
