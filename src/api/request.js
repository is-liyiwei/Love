import axios from 'axios'
import {
  Message
} from 'element-ui'
import fixOpts from './utils/fixOpts'

// 创建axios实例
const http = axios.create({
  timeout: 60000 // 请求超时时间
})

// request拦截器
http.interceptors.request.use(config => {
  return fixOpts(config)
}, error => {
  Promise.reject(error)
})

// respone拦截器
http.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    // const res = response.data
    // if (res.errorCode) {
    //   return Promise.reject('error')
    // } else {
    //   return response.data
    // }
    return response.data
  },
  error => {
    Message({
      message: `网络错误`,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default http
