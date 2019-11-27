
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
  },
  {
    url: '/task/barTaskDate',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          barData: { xData: ['14日', '15日', '16日', '17日', '18日'],
            seriesData: [20, 35, 50, 80, 90]
          }
        }
      }
    }
  },
  {
    url: '/task/lineTaskDate',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          newVisitis: {
            expectedData: [100, 120, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145],
            xdata: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
          }
        }
      }
    }
  },
  {
    url: '/took/tableData4',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          tableData4: [{
            id: 1,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-01',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }, {
            id: 2,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-02',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }, {
            id: 3,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-03',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }, {
            id: 4,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-04',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }, {
            id: 5,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-05',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }, {
            id: 6,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-06',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }, {
            id: 7,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-07',
            movePhone: '18195642365',
            Phone: '0996-5957423',
            age: '22'
          }]
        }
      }
    }
  },
  {
    url: '/task/verifyPhone',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: true
      }
    }
  }

]
