<template>
  <div>
    <el-button type="danger" @click="batchDeleted()">批量删除</el-button>
    <el-button type="primary" @click="addClick()">新增</el-button>
    <el-button type="primary" @click="handleChoose()">选择</el-button>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        prop="hostname"
        label="主机名"
        width="200"
      >
        <template slot-scope="{row}">
          <el-button type="text" @click="addClick(row)">{{ row.hostname }} </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="condition"
        label="状态"
        width="200"
      >
        <template slot-scope="{row}">
          <span v-if="row.condition==='开机'"> <i class="el-icon-success" />{{ row.condition }} </span>
          <span v-if="row.condition==='关机'"> <i class="el-icon-error" />{{ row.condition }} </span>
          <span v-if="row.condition==='待机'"> <i class="el-icon-warning" />{{ row.condition }} </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="small"
            @click="deleteRow(scope)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <orderForm
      v-if="dialogFormVisible"
      :dialog-form-visible.sync="dialogFormVisible"
      :row-data="curRow"
      :is-modify="isModify"
      @closeIt="closeIt"
      @shut="shut"
    />
    <orderTable
      v-if="dialogTableVisible"
      :dialog-table-visible.sync="dialogTableVisible"
      @closeIt2="closeIt2"
      @shut2="shut2"
    />
  </div>
</template>
<script>
import orderForm from '@/views/test/orderForm'
import orderTable from '@/views/test/orderTable'
import { bringTableData3 } from '@/api/took'
export default {
  components: {
    orderForm,
    orderTable
  },
  data() {
    return {
      curRow: {},
      dialogFormVisible: false,
      dialogTableVisible: false,
      tableData3: [],
      tableChecked: []
    }
  },
  created() {
    this.bringData()
  },
  methods: {
    handleSelectionChange(val) {
      this.tableChecked = val
    },
    batchDeleted() {
      const val = this.tableChecked
      if (val.length === 0) {
        this.$notify({
          title: '警告',
          message: '请至少选中一行',
          type: 'warning'
        })
      } else {
        this.$confirm('确定删除选中主机名吗？', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            if (val) {
            // 将选中数据遍历
              val.forEach((val) => {
                this.tableData3.forEach((v, i) => {
                  if (val.id === v.id) {
                    this.tableData3.splice(i, 1)
                  }
                })
              })
            }
          })
      }
    },
    addClick(row) {
      if (row) {
        // 取到row值,打开编辑页面
        this.isModify = false
        this.curRow = Object.assign({}, row)
      } else {
        // 为空值,打开增加页面
        this.isModify = true
        this.curRow = {
          id: new Date().getTime(),
          hostname: '',
          username: '',
          condition: ''
        }
      }

      this.dialogFormVisible = true
    },
    handleChoose() {
      this.dialogTableVisible = true
    },
    closeIt(obj) {
      this.dialogFormVisible = false
      this.tableData3.push(obj)
    },
    closeIt2(arr) {
      if (arr.length === 0) {
        this.$notify({
          title: '警告',
          message: '主机名已存在',
          type: 'warning'
        })
      } else {
        // 遍历数组
        arr.forEach((value) => {
          const curIndexed = this.tableData3.findIndex((item) => {
            return value.hostname === item.hostname
          })
          if (curIndexed > -1) {
            this.$notify({
              title: '警告',
              message: '主机名已存在，请重新选择',
              type: 'warning'
            })
          } else {
            this.tableData3.push(value)
          }
        })
      }
      this.dialogTableVisible = false
    },
    bringData() {
      // 从后端获取数据
      bringTableData3().then(response => {
        this.tableData3 = response.data.tableData3
      }).catch(err => {
        console.log('err===============', err)
      })
    },
    deleteRow({ $index }) {
      this.$confirm('确定删除当前主机名吗？', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData3.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
    },
    shut() {
      this.dialogFormVisible = false
    },
    shut2() {
      this.dialogTableVisible = false
    }
  }
}

</script>

<style scoped>
.el-icon-success{
  color: #71da1c;
}
.el-icon-error{
  color: #c00d0b;
}
.el-icon-warning{
  color: #dac124;
}
</style>
