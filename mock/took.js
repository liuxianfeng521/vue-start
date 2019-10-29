
export default [
  {
    url: '/took/roll',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          array: ['CN', 'US', 'JP', 'EU']
        }
      }
    }
  }
]
