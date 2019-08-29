import Mock from 'mockjs'

Mock.setup({
  timeout: '200 - 400'
})

Mock.mock('/user?ID=12345', 'get', { code: 2, text: '验证码有误，登录失败' }) // 登录
