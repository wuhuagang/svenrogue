import request from '@/utils/request'
const Qs = require('qs')

/**
 * 构造表单登录
 * @param userInfo
 */
export function login(userInfo) {
  return request({
    url: '/api-auth/oauth/token',
    method: 'post',
    data: Qs.stringify({
      username: userInfo.username.trim(),
      password: userInfo.password,
      grant_type: 'password',
      scope: 'app',
      client_id: 'webApp',
      client_secret: 'webApp',
      validCode: userInfo.validCode,
      deviceId: userInfo.deviceId
    }),
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 获取当前登录用户信息
 * @param token
 */
export function getInfo(token) {
  return request({
    url: 'api-user/users/current',
    method: 'get',
    params: { access_token: token }
  })
}

/**
 * 登出
 */
export function logout() {
  return request({
    url: 'api-auth/logout',
    method: 'POST'
  })
}

/**
 * 注册并绑定第三方账号
 */
export function signUp(userInfo) {
  return request({
    url: '/api-auth/signup',
    method: 'post',
    data: {
      username: userInfo.username,
      password: userInfo.password,
      email: userInfo.email
    }
  })
}
