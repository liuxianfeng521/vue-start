import request from '@/utils/request'

export function bringRoll(query) {
  return request({
    url: '/took/roll',
    method: 'get',
    params: query
  })
}
