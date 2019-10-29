import request from '@/utils/request'

export function bringRoll(array) {
  return request({
    url: '/took/roll',
    method: 'get',
    params: { array }
  })
}
