const class2type = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object Object]': 'object',
  '[object Error]': 'error'
}

const checkType = (obj) => {
  return class2type[toString.call(obj)]
}

const joinByStr = (target, fixStr = '、') => {
  return target.join(fixStr)
}

// ['1', '2', '3'] => '1、2、3、'
// 注意：引用类型会对影响原始值

const arr2str = (arr) => {
  arr.map(v => {
    for (const i in v) {
      if (checkType(v[i]) === 'array') {
        v[i] = joinByStr(v[i])
      }
    }
    return v
  })
  return arr
}

export default arr2str
