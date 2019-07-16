export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * 过滤条件表单对象
 * @param {Object} models 需要提取的对象
 */
export function getReqModel(models) {
  if (!models || !models || models <= 0) return
  const param = {}
  models.filterList.forEach(element => {
    for (const [key, item] of Object.entries(element)) {
      if (item === 'daterange' && element[element.dateProp]) {
        element[element.dateProp].forEach((dateItem, index) => {
          param[element.props[index]] = dateItem
        })
      }
      if (key === 'prop') param[item] = element[item]
    }
  })
  if (!models.noPage) {
    param.page = models.resData.number
    param.size = models.resData.size
  }
  return param
}

export function timeago(time) {
  time = new Date(time)
  const delta = parseInt((new Date() - time) / 1000, 10)
  if (delta <= 0) return 'just now'

  const minutes = delta / 60
  if (minutes < 1) return 'less than a minute ago'
  if (minutes < 2) return 'about a minute ago'

  const hours = minutes / 60
  if (hours < 1) return parseInt(minutes, 10) + ' minutes ago'
  if (hours < 1.5) return 'about an hour ago'

  const days = hours / 24
  if (days < 1) return Math.round(hours) + ' hours ago'
  if (days < 7) return parseInt(days, 10) + ' days ago'

  let month = time.getMonth() + 1
  if (month < 10) month = '0' + month
  let date = time.getDate()
  if (date < 10) date = '0' + date
  return [time.getFullYear(), month, date].join('-')
}

export function time(val) {
  if (!val) {
    return '-'
  }
  const data = new Date(val)
  const year = data.getFullYear()
  let month = data.getMonth() + 1
  const day = data.getDate()
  if (month < 10) month = '0' + month
  return year + '-' + month + '-' + day
}

export function day(val) {
  const data = new Date(val)
  const day = data.getDate()
  return day
}

export function timeFull(val) {
  if (!val) {
    return
  }
  const data = new Date(val)
  const year = data.getFullYear()
  const month = data.getMonth() + 1
  const day = data.getDate()
  const h = data.getHours()
  let m = data.getMinutes()
  if (m < 10) m = '0' + m
  return year + '-' + month + '-' + day + ' ' + h + ':' + m
}

export function hoursPeriod(val) {
  const data = new Date(val)
  const h = data.getHours()
  let m = data.getMinutes()
  if (m < 10) m = '0' + m
  return h + ':' + m
}

export function amp(val) {
  const data = new Date(val)
  const h = data.getHours()
  return h === 12 ? '下午' : '上午'
}

export function km(distance) {
  if (distance < 1000) return distance / 1000 + 'km'
  else if (distance > 1000) { return (Math.round(distance / 100) / 10).toFixed(1) + 'km' }
}

export function distancetime(val) {
  const endDate = new Date(val)
  const startDate = new Date()

  // let oneDayLong = 24 * 60 * 60 * 1000
  // let day = endDate.getDay()
  // let endTime = endDate.getTime()
  //
  // if(day==6){
  //   endTime=endTime+2*oneDayLong
  // }
  // if(day==0){
  //   endTime=endTime+oneDayLong
  // }

  const diff = endDate.getTime() - startDate.getTime() // 时间差的毫秒数

  if (diff > 0) {
    // 计算出相差天数
    const days = Math.floor(diff / (24 * 3600 * 1000))

    // 计算出小时数
    const leave1 = diff % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
    const hours = Math.floor(leave1 / (3600 * 1000))
    // 计算相差分钟数
    const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
    const minutes = Math.floor(leave2 / (60 * 1000))

    // 计算相差秒数
    // const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
    // const seconds = Math.round(leave3 / 1000)

    // let returnStr = seconds + "秒";
    let returnStr = ''
    if (minutes > 0) {
      returnStr = minutes + '分钟' + returnStr
    }
    if (hours > 0) {
      returnStr = hours + '小时' + returnStr
    }
    if (days > 0) {
      returnStr = days + '天' + returnStr
    }
    return returnStr
  } else {
    return 0
  }
}

// 计算未来某日期到现在距离天数
export function distanceDay(sDate2) {
  var aDate, oDate1, oDate2, iDays
  const data = new Date()
  const year = data.getFullYear()
  let month = data.getMonth() + 1
  let day = data.getDate()
  if (month < 10) month = '0' + month
  if (day < 10) day = '0' + day
  const sDate1 = year + '-' + month + '-' + day
  aDate = sDate1.split('-')
  // 转换为12-18-2002格式,即时间字符串的格式：月-日-年
  oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  aDate = sDate2.split('-')
  oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  // 把相差的毫秒数转换为天数
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)
  return iDays
}

// 根据生日计算年龄
export function getAge(dateString) {
  if (!dateString) return
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export function getSex(val) {
  return val === '1' ? '男' : '女'
}

export function getIndexOfJsonArr(arr, prop, value) {
  let testIndex = -1
  arr.some((item, i) => {
    if (item[prop] === value) {
      testIndex = i
      return true
    }
  })
  return testIndex
}
