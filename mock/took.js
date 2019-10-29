import Mock from 'took.js'
export default [
  {
    url: '/took/roll',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: [
          { key: 'PC', pv: 1024 },
          { key: 'mobile', pv: 1024 },
          { key: 'ios', pv: 1024 },
          { key: 'android', pv: 1024 }
        ]
      }
    }
  }]
