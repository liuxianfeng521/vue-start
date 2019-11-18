
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
            Phone: '18195642365',
            age: '22'
          }, {
            id: 2,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-02',
            Phone: '18195642365',
            age: '22'
          }, {
            id: 3,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-03',
            Phone: '18195642365',
            age: '22'
          }, {
            id: 4,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-04',
            Phone: '18195642365',
            age: '22'
          }, {
            id: 5,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-05',
            Phone: '18195642365',
            age: '22'
          }, {
            id: 6,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-06',
            Phone: '18195642365',
            age: '22'
          }, {
            id: 7,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            date: '2016-05-07',
            Phone: '18195642365',
            age: '22'
          }]
        }
      }
    }
  }
]
