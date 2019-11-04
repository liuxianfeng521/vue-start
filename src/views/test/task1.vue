<template>
  <div>
    <el-table
      :data="tableData4"
      style="width: 100%"
      max-height="100%"
    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="province"
        label="省份"
        width="120"
      />
      <el-table-column
        prop="city"
        label="市区"
        width="120"
      />
      <el-table-column
        prop="address"
        label="地址"
        width="300"
      />
      <el-table-column
        prop="zip"
        label="邮编"
        width="150"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <testVuex v-if="dialogFormVisible" :dialog-form-visible.sync="dialogFormVisible" :row-data="curRow" @closeIt="closeIt" />
  </div>
</template>
<script>
import testVuex from '@/views/test/testVuex'
import { bringTableData4 } from '@/api/took'
export default {
  components: {
    testVuex
  },
  data() {
    return {
      curRow: {},
      dialogFormVisible: false,
      tableData4: []
    }
  },
  created() {
    this.bringData()
  },
  methods: {
    handleClick(row) {
      const tmp = Object.assign({}, row)
      this.curRow = tmp
      this.dialogFormVisible = true
    },
    closeIt(obj) {
      const index = this.tableData4.findIndex((value) => { return value.id === obj.id })
      this.tableData4.splice(index, 1, obj)
      this.dialogFormVisible = false
    },
    bringData() {
      bringTableData4().then(response => {
        console.log(response)
        this.tableData4 = response.data.tableData4
      }).catch(err => {
        console.log('err===============', err)
      })
    }
  }
}

</script>

<style scoped>

</style>
