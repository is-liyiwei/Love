import getUrlByObject from './getUrlByObject'

function fixOpts (options) {
  if (!options.method || options.method === 'GET' || options.method === 'get') {
    options.url = options.url.split('?')[0]
    // 安卓上的不会对中文进行 encode 导致请求错误
    options.url += `?${getUrlByObject(options.data).map(encodeURI).join('&')}`
    delete options.data
    return options
  } else {
    return options
  }
}

export default fixOpts
