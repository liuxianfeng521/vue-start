import Mock from 'mockjs'

export default [
  {
    url: '/took/roll',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: ['CN', 'US', 'JP', 'EU']
      }
    }
  }
]
