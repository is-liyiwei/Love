<template>
  <div class="app-container" id="systemSettingsRoleGrouping">
    <pageName></pageName>
    <el-button type="primary" class="add-group" @click="addGroup">+ 添加分组</el-button>

    <div class="divider"></div>

    <div style="display: flex;">

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%;margin-right: 25px;">
      <el-table-column
        prop="id"
        align="center"
        label="ID"
        width="265">
      </el-table-column>
      <el-table-column
        prop="groupName"
        align="center"
        label="组名"
        width="265">
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <div class="cell-ctrl">
            <div @click="edit(scope)" class="edit">权限编辑</div>
            <img @click="del(scope)" src="../../assets/images/shanchu.png">
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      border
      header-cell-class-name="table-header-cell-lyw"
      row-class-name="table-column-lyw"
      style="width: 100%;margin-left: 25px;">
      <el-table-column
        prop="id"
        align="center"
        label="ID"
        width="265">
      </el-table-column>
      <el-table-column
        prop="groupName"
        align="center"
        label="组名"
        width="265">
      </el-table-column>
      <el-table-column
        prop="tag"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <div class="cell-ctrl">
            <div @click="edit(scope)" class="edit">权限编辑</div>
            <img @click="del(scope)" src="../../assets/images/shanchu.png">
          </div>
        </template>
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

    <dialogLyw ref="dialogLyw" height="406px">
      <div slot="header" class="title">添加分组</div>
      <div slot="body" class="body-group">
        <div>分组名称：</div>
        <el-input v-model="search" placeholder="输入查找内容" style="width: 590px;margin-left: 30px;"></el-input>
      </div>
    </dialogLyw>

    <dialogLywDel ref="dialogLywDel">
      <div slot="header">删除之后将不能恢复，是否确认删除?</div>
    </dialogLywDel>

    <dialogEditLyw ref="dialogEditLyw" height="620px">
      <div slot="body" class="checkbox-container">
        <label :for="k" class="jelly-checkbox" v-for="(v, k) in 5">
          <input type="checkbox" :id="k" v-model="checkboxTest[k]">
          <span class="jelly-icon-check"></span>
          <span class="msg">123</span>
        </label>
      </div>
    </dialogEditLyw>

  </div>
</template>

<script>

const tableData = [{
  id: '2016-05-02 08:30:00',
  groupName: '1'
}, {
  id: '2016-05-04 08:30:00',
  groupName: '2'
}, {
  id: '2016-05-01 08:30:00',
  groupName: '3'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '4'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '5'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '6'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '7'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '8'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '9'
}, {
  id: '2016-05-03 08:30:00',
  groupName: '10'
}]

import pageName from '@/components/pageName'

import dialogLyw from '@/components/dialogLyw'
import dialogEditLyw from '@/components/dialogEditLyw'

// import module from './module'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: 'systemSettingsRoleGrouping',
  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    pageName,
    dialogLyw,
    dialogLywDel: dialogLyw,
    dialogEditLyw
  },
  mixins: [],
  // 组件私有数据（必须是function，而且要return对象类型）
  data() {
    return {
      tableData,
      pageNum: 0,
      search: '',
      dialogDelActiveItem: {},
      dialogEditActiveItem: {},
      checkboxTest: [false, false, false, false, false]
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
    // checkboxTest (newVal, oldVal) {
    //   console.log(oldVal)
    //   console.log(newVal)
    // }
  },
  // 函数集，自己封装，便于开发使用
  methods: {
    addGroup () {
      this.$refs.dialogLyw.dialogVisible = true
    },
    edit (item) {
      this.dialogEditActiveItem = item.row
      this.$refs.dialogEditLyw.dialogVisible = true
    },
    del (item) {
      this.dialogDelActiveItem = item.row
      this.$refs.dialogLywDel.dialogVisible = true
    }
  },
  // 生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated() {

  },
  // 生命周期钩子：组件实例完成创建之后调用
  created() {
    this.changePageName('角色分组')
  },
  // 生命周期钩子：组件实例渲染完成时调用
  mounted() {
    this.$refs.dialogLyw.$on('comfirm', () => {
      console.log(this.search)
    })
    this.$refs.dialogLywDel.$on('comfirm', () => {
      console.log(this.dialogDelActiveItem)
    })
    this.$refs.dialogEditLyw.$on('comfirm', () => {
      console.log(this.checkboxTest)
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/lyw/index.scss";
#systemSettingsRoleGrouping {
  .add-group {
    font-size: $fz18;
    margin-top: 23px;
  }

  .checkbox-container {
    display: flex;
    flex-wrap: wrap;
    .msg {
      font-size: $fz16;
      color: #txtColor;
      margin-left: 20px;
    }
    .jelly-checkbox {
      cursor: pointer;
      width: 50%;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }

    .jelly-checkbox > input[type = checkbox] {
      -moz-appearance: none;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      display: none;
    }

    .jelly-checkbox > input[type = checkbox] + .jelly-icon-check {
      width: 20px;
      height: 20px;
      display: inline-block;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NkI1MDEwNEVBMzExRThCQzc0OTVGMzA3MTY0QzRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5NkI1MDExNEVBMzExRThCQzc0OTVGMzA3MTY0QzRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Nzk2QjUwMEU0RUEzMTFFOEJDNzQ5NUYzMDcxNjRDNEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk2QjUwMEY0RUEzMTFFOEJDNzQ5NUYzMDcxNjRDNEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7j57CYAAAArklEQVR42mLcv38/AxCoAnEHELsAMR8DaeATEO8B4gogvs0EJNSB+AgQHwRiRSBmJBErQvWCzFBnBLpwLZBxCIgnMlAGyoHYDGTgR6gt7yg0UAiIHzJBw4xSwxigZvAwMVAZjBo4auCogcQa+AmasRmoUDh8YYIWjrFUMDAFiHexAIlqaAH5H4gXA/F7Eg0ShDqoGIjtQS68AcR2IA6oPIMaTAp+CNULMuMGQIABAE2SL6lo/QoXAAAAAElFTkSuQmCC);
    }

    .jelly-checkbox > input[type = checkbox]:checked + .jelly-icon-check {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMzdGNTRBQTc0QzExRTg5Q0I0OTQ0NDMzOUM4MDU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMzdGNTRCQTc0QzExRTg5Q0I0OTQ0NDMzOUM4MDU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUzN0Y1NDhBNzRDMTFFODlDQjQ5NDQ0MzM5QzgwNTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUzN0Y1NDlBNzRDMTFFODlDQjQ5NDQ0MzM5QzgwNTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5x/W1rAAABVUlEQVR42qTUzysEYRzH8ZlpHGQTW5SU2qJNOTg4OBGRk5LkoNzkD6BQSqT8OKDcnHGRcpeU2sOe5MSW014dViQust5PfdS0dnfmmfnWa+pp9vns83Pc8sqFQ/VgD2NoduzqHTdYw7PHI4sc7pCBaymjviYj6/PYkWMnXpXUt9HkuEz5Tf9ScpJVGkVPaxYnrA+HFSNNeTFHM4E8uipf+DHCBnGlNfs3M9sRduBSYabakwaeoDPQbrEJTKE/0J7BZKC9idGogVN4xJl+04DdwPslbOEnyqYcqMNfzaIN3Wqv46jWtKoFruIF2xrZBpr07ly3qmZVm/I39jGui9+r8/aAxbBdq7cp5sKPwFzNL8zhMyww7GDfYxoDeIpyrnxNK13nPt9KlI/Dh6eP47yTvBZw7esYmPUq4xSvlkGtGtAyhs0ICxgyDfM9U7CNovqajMKvAAMAeyZMzxX807MAAAAASUVORK5CYII=);
    }
  }

  .divider {
    border-top: 1px solid $borderColor;
    margin: 20px 0 20px 0;
  }

  .cell-ctrl {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .edit {
      @include cursorPointer;
      color: #2ca1de;
    }
    img {
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

  .body-group {
    display: flex;
    align-items: center;
    .el-input__inner {
      height: 50px;
      line-height: 50px;
    }
    .title {
      font-size: $fz20;
      color: $txtColor;
    }
    div {
      font-size: $fz16;
      color: #666;
    }
  }
}
</style>
