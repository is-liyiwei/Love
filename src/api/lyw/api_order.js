import { baseUrl } from '../serverConfig'

const api = {
  // 删除订单
  deleteOrder: {
    url: baseUrl + '/orders',
    method: 'delete'
  },
  // 创建订单
  createOrder: {
    url: baseUrl + '/orders',
    method: 'post'
  },
  // 根据订单号(不是订单ID)获取订单
  getOrderDetailsByOrderId: {
    url: baseUrl + '/orders/orderNumber',
    method: 'get'
  },
  // 根据用户id或用户名获取订单，只填其一
  getOrderDetailsByUserId: {
    url: baseUrl + '/orders/userId',
    method: 'get'
  }
}

export default api
