import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/took/roll',
    method: 'get',
    params: query
  })
}
