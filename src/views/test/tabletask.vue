<template>
  <div>
    <el-button type="primary" @click="handleClick()">新增</el-button>
    <el-table
      :data="tableData4"
      style="width: 100%"
      max-height="100%"
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="age"
        label="年龄"
        width="120px"
      />
      <el-table-column
        prop="address"
        label="地址"
        width="300"
      />
      <el-table-column
        prop="Phone"
        label="联系电话"
        width="150"
      />
      <el-table-column
        prop="zip"
        label="邮编"
        width="150"
      />
      <el-table-column
        prop="date"
        label="日期"
        width="150"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button
            type="danger"
            size="small"
            @click="deleteRow(scope)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <orderEdit
      v-if="dialogFormVisible"
      :dialog-form-visible.sync="dialogFormVisible"
      :row-data="curRow"
      :is-modify="isModify"
      @closeIt="closeIt"
      @shut="shut"
    />
  </div>
</template>
<script>
import orderEdit from '@/views/test/orderEdit'
import { bringTableData4 } from '@/api/took'
export default {
  components: {
    orderEdit
  },
  data() {
    return {
      curRow: {},
      dialogFormVisible: false,
      isModify: false,
      tableData4: []
    }
  },
  created() {
    this.bringData()
  },
  methods: {
    handleClick(row) {
      // 同一方法执行不同操作
      if (row) {
        // 取到row值,打开编辑页面
        this.isModify = true
        this.curRow = Object.assign({}, row)
        console.log('bianjing---------5555555555', this.curRow)
      } else {
        // 为空值,打开增加页面
        this.isModify = false
        this.curRow = {
          id: new Date().getTime(),
          name: '',
          address: '',
          zip: 0,
          date: '',
          Phone: '',
          age: 0
        }
      }

      this.dialogFormVisible = true
    },
    shut() {
      this.dialogFormVisible = false
    },
    closeIt(obj) {
      this.dialogFormVisible = false
      // 调用子组件方法,并增加判断条件，为true则替换，false增加行
      if (this.isModify === true) {
        const index = this.tableData4.findIndex((value) => { return value.id === obj.id })
        this.tableData4.splice(index, 1, obj)
      } else {
        this.tableData4.push(obj)
      }
    },
    bringData() {
      // 从后端获取数据
      bringTableData4().then(response => {
        console.log(response)
        this.tableData4 = response.data.tableData4
      }).catch(err => {
        console.log('err===============', err)
      })
    },
    deleteRow({ $index }) {
      this.$confirm('确定删除当前行？', '请确认', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData4.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
    }
  }
}

</script>

<style scoped>

</style>
