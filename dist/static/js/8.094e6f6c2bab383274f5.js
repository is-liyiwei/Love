webpackJsonp([8],{"2DVy":function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,'\n@charset "UTF-8";\n/*字体颜色*/\n/*font-family: "Microsoft YaHei Light";*/\n/*font-family: \'Microsoft YaHei\';*/\n/*字体大小*/\n/*这个在很多表格用到这个类,定义为全局,表格的html为row-class-name="table-column-lyw"*/\n/*表格每一行的样式*/\n.table-column-lyw {\n  height: 50px;\n}\n/*这个在很多表格用到这个类,定义为全局,表格的html为header-cell-class-name="table-header-lyw"*/\n/*主要是表头的每个单元格的样式*/\n.table-header-cell-lyw {\n  background: rgba(241, 241, 241, 0.8) !important;\n  height: 50px !important;\n}\n@-webkit-keyframes slideInUp {\nfrom {\n    -webkit-transform: translate3d(-50%, -40%, 0);\n    transform: translate3d(-50%, -40%, 0);\n    opacity: 0;\n}\nto {\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    transform: translate3d(-50%, -50%, 0);\n    opacity: 1;\n}\n}\n@keyframes slideInUp {\nfrom {\n    -webkit-transform: translate3d(-50%, -40%, 0);\n    transform: translate3d(-50%, -40%, 0);\n    opacity: 0;\n}\nto {\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    transform: translate3d(-50%, -50%, 0);\n    opacity: 1;\n}\n}\n#integralManagementRule .divider {\n  border-top: 1px solid #f1f1f1;\n  margin: 26px 0 20px 0;\n}\n#integralManagementRule .ctrl {\n  margin-top: 60px;\n  font-size: 0.4375rem;\n  height: 34px;\n  border-bottom: 1px solid #f1f1f1;\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#integralManagementRule .ctrl .btn-ctrl {\n    color: #383838;\n}\n#integralManagementRule .ctrl .el-input__inner {\n    height: 34px;\n}\n',""])},"4Ycv":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=[{points:"1312356",level:"一级A"},{points:"1312356",level:"一级A"},{points:"1312356",level:"一级A"},{points:"1312356",level:"一级A"},{points:"1312356",level:"四级B"},{points:"1312356",level:"一级A"},{points:"1312356",level:"一级C"},{points:"1312356",level:"一级A"},{points:"1312356",level:"二级A"},{points:"1312356",level:"三级A"}],l={name:"integralManagementRule",components:{pageName:n("l6yZ").a},mixins:[],data:function(){return{tableData:a,pageNum:0}},props:{},computed:{},watch:{},methods:{},beforeCreated:function(){},created:function(){this.changePageName("分销规则设计")},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",attrs:{id:"integralManagementRule"}},[a("pageName"),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","header-cell-class-name":"table-header-cell-lyw","row-class-name":"table-column-lyw"}},[a("el-table-column",{attrs:{prop:"level",align:"center",label:"等级",width:"549"}}),t._v(" "),a("el-table-column",{attrs:{prop:"points",align:"center",label:"积分",width:"548"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tag",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{cursor:"pointer",position:"relative",top:"5px"},attrs:{src:n("Rxo9")}})]}}])})],1),t._v(" "),a("div",{staticClass:"ctrl"},[a("div",{staticStyle:{"margin-right":"20px"}},[t._v("共计15个记录分为1页，当前第 1 页")]),t._v(" "),a("el-button",{staticClass:"btn-ctrl"},[t._v("第一页")]),t._v(" "),a("el-button",{staticClass:"btn-ctrl"},[t._v("上一页")]),t._v(" "),a("el-button",{staticClass:"btn-ctrl"},[t._v("下一页")]),t._v(" "),a("el-button",{staticClass:"btn-ctrl"},[t._v("最末页")]),t._v(" "),a("div",{staticStyle:{margin:"0 18px 0 22px"}},[t._v("跳转到")]),t._v(" "),a("el-input",{staticStyle:{width:"50px"},attrs:{placeholder:"0"},model:{value:t.pageNum,callback:function(e){t.pageNum=e},expression:"pageNum"}}),t._v(" "),a("el-button",{staticClass:"btn-ctrl",staticStyle:{color:"#FFF","margin-left":"10px"},attrs:{type:"primary"}},[t._v("确认")])],1)],1)},staticRenderFns:[]};var i=n("/Xao")(l,r,!1,function(t){n("iz9y")},null,null);e.default=i.exports},iz9y:function(t,e,n){var a=n("2DVy");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("1891815e",a,!0)}});