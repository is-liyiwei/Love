<template>
  <div class="app-container" id="orderManagement">
    <pageName></pageName>

    <div class="header-ctrl">
      <div class="txt" style="margin: 0 12px 0 10px;">订单号</div>
      <el-input style="width: 162px;"></el-input>
      <div class="txt" style="margin: 0 12px 0 30px;">用户名</div>
      <el-input style="width: 289px;"></el-input>
      <div class="txt" style="margin: 0 12px 0 30px;">收货电话</div>
      <el-input style="width: 130px;"></el-input>
      <div class="txt" style="margin: 0 12px 0 30px;">订单时间</div>
      <el-date-picker
        v-model="value6"
        type="daterange"
        range-separator="——"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" class="btn">搜索</el-button>
      <el-button type="primary" class="btn">导出订单</el-button>
    </div>

    <div class="nav">
      <div @click="changNav(k)" v-for="(v, k) in navArr" :class="navIndex == k ? 'active' : ''">{{v}}(50)</div>
    </div>

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%">
      <el-table-column
        prop="orderNumber"
        align="center"
        label="订单号"
        width="146">
      </el-table-column>
      <el-table-column
        prop="createdDate"
        align="center"
        label="订单时间"
        width="170">
      </el-table-column>
      <el-table-column
        prop="priceInPennies"
        align="center"
        label="金额"
        width="100">
        <template slot-scope="scope">
          {{scope.row.priceInPennies / 100}}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="收货地址"
        width="490">
        <template slot-scope="scope">
          {{scope.row.address.province}}{{scope.row.address.city}}{{scope.row.address.district}}{{scope.row.address.detailAddress}}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="收货人"
        width="102">
        <template slot-scope="scope">
          {{scope.row.address.recipientName}}
        </template>
      </el-table-column>
      <el-table-column
        prop="user.phoneNumber"
        align="center"
        label="收货电话"
        width="130">
      </el-table-column>
      <el-table-column
        prop="user.id"
        align="center"
        label="会员账号"
        width="163">
      </el-table-column>
      <el-table-column
        prop="status"
        align="center"
        label="状态"
        width="120">
        <template slot-scope="scope">
          {{scope.row.status}}
        </template>
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <span class="send-btn">发货</span>
          <span class="download-btn">下载相册</span>
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

const tableData = [
  {
    'id': 30,
    'user': {
      'id': 3,
      'openId': 'oGEfz0LkwhskcrqbX2McZtRJB4dc',
      'bankAccountNumber': null,
      'bankName': null,
      'bankAccountHolderName': null,
      'points': 200,
      'imageUrl': 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
      'name': 'LYW',
      'createdDate': 1536630495,
      'refererId': 0,
      'refererStatus': 'Approved',
      'phoneNumber': 13094135168
    },
    'address': {
      'id': 30,
      'detailAddress': '新港中路397号',
      'city': '广州市',
      'province': '广东省',
      'district': '海珠区',
      'userId': 0,
      'recipientName': '张三',
      'recipientPhone': '020-81167888'
    },
    'status': 'Paid',
    'imageUrls': [
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/e2ce357b-8edd-43d2-9b9d-da8d694e7d6c',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/d927b74d-74b5-485c-9a70-ffe4c37cd10a',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/8ce07d53-b908-4b68-a836-3a0dad7d9ffa',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/070f4132-cb96-4e7b-965b-1cee8764ab01',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/6925f61a-faaa-4f80-8367-d2f588ace91b',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/0198823d-a74c-492e-ab41-6fcef983b9a9',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/e8967b0f-f57f-4d23-9302-a6dfeb65ed66',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/230f9d9e-fad5-4d18-be0d-c156e611a272'
    ],
    'createdDate': 1536634025,
    'orderNumber': 1536634017,
    'priceInPennies': 1
  },
  {
    'id': 32,
    'user': {
      'id': 3,
      'openId': 'oGEfz0LkwhskcrqbX2McZtRJB4dc',
      'bankAccountNumber': null,
      'bankName': null,
      'bankAccountHolderName': null,
      'points': 200,
      'imageUrl': 'https://wx.qlogo.cn/mmopen/vi_32/9YRh0gX8z9wIiaokibYvvAr5P7R5pXv4FIJjlDxOpTnSxfcW75iajgkvS4NKibAg8zOcNbH2QMmszjXSFCuvPCjvlQ/132',
      'name': 'LYW',
      'createdDate': 1536630495,
      'refererId': 0,
      'refererStatus': 'Approved',
      'phoneNumber': null
    },
    'address': {
      'id': 32,
      'detailAddress': '新港中路397号',
      'city': '广州市',
      'province': '广东省',
      'district': '海珠区',
      'userId': 0,
      'recipientName': '张三',
      'recipientPhone': '020-81167888'
    },
    'status': 'Ordered',
    'imageUrls': [
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/6081445b-87d5-4953-9423-1fbd7c0b3dcc',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/984cfc0c-fa67-42e8-9f41-6f6a41c98433',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/4fb52c06-1067-4ac9-85d1-6d867fed3385',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/4affe29e-6e48-4d64-ab35-a0dbae761e22',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/d0e9e6da-a35a-4414-9f45-3318830a554b',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/1d89cb23-747d-4a67-80c8-b5c1c5d6e0c9',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/19e35205-95ef-485c-b803-77ac3d415b86',
      'https://puzzle.blob.core.chinacloudapi.cn:443/images/3d355432-d2ee-46cc-a48c-f687b05a7a16'
    ],
    'createdDate': 1536648338,
    'orderNumber': 1536648334,
    'priceInPennies': 1
  }
]

import pageName from '@/components/pageName'
// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'orderManagement',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      value6: '',
      navIndex: 0,
      navArr: ['全部', '待发货', '已完成', '已发货'],
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
    changNav (idx) {
      this.navIndex = idx
    }
  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {
    this.changePageName('订单列表')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#orderManagement {
  .header-ctrl {
    display: flex;
    margin-top: 23px;
    margin-bottom: 20px;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid $borderColor;
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

  .nav {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #e8e8e8;
    margin-bottom: 10px;
    div {
      width: 160px;
      height: 100%;
      font-size: $fz18;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      @include cursorPointer;
      &:before {
        content: '';
        width: 1px;
        height: 60%;
        background-color: #c8c8c8;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate3d(0, -50%, 0);
      }
    }
    .active {
      color: $mainColor;
    }
  }

  .send-btn {
    color: $mainColor;
    font-size: $fz14;
    @include cursorPointer;
    margin-right: 38px;
  }
  .download-btn {
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
  }
}
</style>
