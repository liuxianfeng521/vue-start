import Mock from 'mockjs'


export default [
  {
    url: '/took/roll',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: ['CN', 'US', 'JP', 'EU']
      }
    }
  }]
