import request from '@/utils/request'

/**
 * 查
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api_user/users',
    method: 'get',
    params: query
  })
}
/**
 * 增
 * @param data
 */
export function createUser(data) {
  return request({
    url: '/api_user/create',
    method: 'post',
    data
  })
}

/**
 * 删
 * @param id
 */
export function deleteUser(id) {
  return request({
    url: '/api_user/detail',
    method: 'get',
    params: { id }
  })
}

/**
 * 改
 * @param data
 */
export function updateUser(data) {
  return request({
    url: '/api_user/update',
    method: 'post',
    data
  })
}
