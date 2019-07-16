<template>
  <div class="app-container" id="systemSettingsBannerManagement">
    <pageName></pageName>
    <el-button type="primary" class="add-banner" @click="addBanner('banner')">+ 添加banner</el-button>
    <el-button type="primary" class="add-banner" @click="addBanner('advertising')">+ 添加广告banner</el-button>

    <div class="divider"></div>

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%">
      <el-table-column
        prop="id"
        align="center"
        label="ID"
        width="190">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="名称"
        width="330">
      </el-table-column>
      <el-table-column
        prop="imageUrl"
        align="center"
        label="图片"
        width="221">
        <template slot-scope="scope">
          <img style="width: 30px;height: 22px;" :src="scope.row.imageUrl">
        </template>
      </el-table-column>
      <el-table-column
        prop="imageUrl"
        align="center"
        label="链接"
        width="652">
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <div class="icons">
            <img @click="edit(scope)" src="../../assets/images/bianji.png" style="margin-right: 55px;">
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

    <dialogLyw ref="dialogAddLyw" height="500px" width="610px" :footerStyle="{left: '35px'}" @comfirm="comfirm">
      <div slot="header">添加banner</div>
      <div slot="body">

        <div class="list">
          <div class="txt">名称</div>
          <el-input v-model="msg" placeholder="输入名称" style="width: 350px;"></el-input>
        </div>

        <div class="list" v-show="uploadType === 'banner'">
          <div class="txt">图片</div>
          <el-upload
            accept="image/*"
            action="https://puzzleback.chinacloudsites.cn/api/v1/blob"
            :show-file-list="false"
            :on-change="uploadImgFileFn">
            <el-button class="upload-btn">选择图片</el-button>
          </el-upload>
        </div>

        <div class="list" v-show="uploadType === 'advertising'">
          <div class="txt">链接</div>
          <el-input v-model="advertisingUrl" @input="advertisingChange" placeholder="输入外部链接" style="width: 350px;"></el-input>
        </div>

        <div class="list">
          <div class="txt"></div>
          <img style="width: 130px;height: 80px;" :src="uploadImgFile" alt="">
        </div>

      </div>
    </dialogLyw>

  </div>
</template>

<script>
import pageName from '@/components/pageName'
import dialogLyw from '@/components/dialogLyw'

const tableData = [{
  name: '王小虎1王小虎1王小虎1.png',
  id: '1',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎2王小虎2王小虎2.png',
  id: '2',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎3王小虎3王小虎3.png',
  id: '3',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '4',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '5',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '6',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '7',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '8',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '9',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}, {
  name: '王小虎4王小虎4王小虎4.png',
  id: '10',
  imageUrl: 'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'
}]

// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'systemSettingsBannerManagement',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName,
    dialogLyw
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      tableData,
      pageNum: 0,
      dialogActiveItem: {},
      uploadType: '',
      uploadImgFile: '',
      advertisingUrl: '',
      msg: ''
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
    addBanner (type) {
      this.uploadType = type
      this.msg = ''
      this.uploadImgFile = ''
      this.$refs.dialogAddLyw.dialogVisible = true
    },
    advertisingChange (inputVal) {
      this.uploadImgFile = inputVal
    },
    openDialog (item) {
      this.dialogActiveItem = item.row
      this.$refs.dialogLyw.dialogVisible = true
    },
    uploadImgFileFn (item) {
      this.uploadImgFile = item.response
    },
    edit (item) {
      this.uploadType = 'noType'
      this.msg = item.row.name
      this.uploadImgFile = item.row.imageUrl
      this.$refs.dialogAddLyw.dialogVisible = true
    },
    comfirm () {
      console.log(this.msg)
    }
  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {
    this.changePageName('系统设置-banner广告管理')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#systemSettingsBannerManagement {
  .add-banner {
    font-size: $fz18;
    margin-top: 23px;
  }

  .divider {
    border-top: 1px solid $borderColor;
    margin: 20px 0 20px 0;
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

  .list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .el-input__inner {
      height: 50px;
    }
    .txt {
      font-size: $fz14;
      text-align: right;
      color: #575757;
      margin-right: 30px;
      width: 60px;
    }
  }

  .upload-btn {
    height: 50px;
    font-size: $fz16;
    color: $mainColor;
    border-color: $mainColor;
  }
}
</style>
