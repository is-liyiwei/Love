const app_message = [{
  msg_zym: `上传用户，测试的时候，上传完了，我给你返回一个数组，里面包含所有的上传资料，需要给他一个弹窗，或者一个新的页面，然后一条一条勾选，然后他勾选了的，按确认，上传&右上角的文案“分数”，改成“总分数”`,
  msg_lyw: `题目顺序&题库可以多选删除&正确答案显示A B C D这样的选择&主观题需要显示正确答案&判断题可以自定义可选答案文字，只能单选`,
  version: `version: 2018-09-04 15:40 build for lyw`
}, {
  msg_zym: ``,
  msg_lyw: `批量删除页面需要给他一个筛选的下拉菜单，根据题型筛选&导入试题时，所有答案选择前面加一个A. B. C D.这样的标识，正确答案用A B C D 表示就行，不显示内容&然后试题导入成功以后，提示我的是删除成功改为“导入成功”&判断题其实就是单选，可选答案最多2个&添加/修改试题的时候正确答案只提供字母选项&题材管理判断题显示答案选择和正确答案，并且是字母的方式&导入试题删除试题添加全选功能，添加按照题型筛选功能&批改题目的时候，主观题那里，正确答案也显示一下，其他题型答案使用ABCD显示&可以删除试卷功能`,
  version: `version: 2018-09-06 19:10 build for lyw`
}, {
  msg_zym: ``,
  msg_lyw: `导入试题时，主观题的正确答案直接显示就可以了`,
  version: `version: 2018-09-07 09:06 build for lyw`
}]

const version_color = 'red'
const msg_color = 'Blue'

const appLog = () => {
  setTimeout(() => {
    for (let i = 0; i < app_message.length; i++) {
      console.log('%c' + app_message[i].version, 'color:' + version_color)
      const zym = app_message[i].msg_zym.split('&')
      const lyw = app_message[i].msg_lyw.split('&')
      if ('' + zym[0] !== '') {
        for (let j = 0; j < zym.length; j++) {
          console.log('%c' + 'zym - ' + zym[j], 'color:' + msg_color)
        }
      }
      if ('' + lyw[0] !== '') {
        for (let k = 0; k < lyw.length; k++) {
          console.log('%c' + 'lyw - ' + lyw[k], 'color:' + msg_color)
        }
      }
    }
  }, 1000)
}

export default appLog
