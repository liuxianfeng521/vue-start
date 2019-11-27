import request from '@/utils/request'

export function bringRoll(query) {
  return request({
    url: '/took/roll',
    method: 'get',
    params: query
  })
}

export function bringTableData4(query) {
  return request({
    url: '/took/tableData4',
    method: 'get',
    params: query
  })
}
export function bringBarTask(query) {
  return request({
    url: '/task/barTaskDate',
    method: 'get',
    params: query
  })
}
export function bringlineTask(query) {
  return request({
    url: '/task/lineTaskDate',
    method: 'get',
    params: query
  })
}
export function bringVerifyPhone(params) {
  return request({
    url: '/task/verifyPhone',
    method: 'post',
    params: params
  })
}
