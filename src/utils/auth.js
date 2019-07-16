import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const ADMIN_LEVEL = 'admin-level'
const USER_INFO = 'user-info'

const defaultExpires = {
  expires: 30
}

class CookieTool {
  constructor(name) {
    this.name = name
  }
  static instance(name) {
    this.i = this.i || new this(name)
    return this.i
  }
  get() {
    return Cookies.getJSON(this.name)
  }
  set(i) {
    return Cookies.set(this.name, i, defaultExpires)
  }

  remove() {
    return Cookies.remove(this.name)
  }
}

export const _c_admin_level = new CookieTool(ADMIN_LEVEL)

export const _c_user_info = new CookieTool(USER_INFO)

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, defaultExpires)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setId(id) {
  return Cookies.set('id', id)
}

export function getId() {
  return Cookies.get('id')
}

export function removeId() {
  return Cookies.remove('id')
}

