import axios from '../util/axios'
// 为给定 ID 的 user 创建请求
const getUser = () => axios.get('/user?ID=12345')

export default {
  getUser
}
