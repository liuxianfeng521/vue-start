<template>
  <div>
    <el-dialog
      title="选择主机"
      :visible.sync="visible1"
      @close="close()"
    >
      <el-table
        :data="tableData2"
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
        />
        <el-table-column
          prop="condition"
          label="状态"
          width="200"
        />
        <el-table-column
          prop="username"
          label="用户名"
        />
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm()">确认</el-button>
        <el-button @click="close()">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogTableVisible: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      tableData2: [{
        id: 4,
        hostname: 'PC201708231106',
        condition: '关机',
        username: 'A12306'
      }, {
        id: 5,
        hostname: 'PC201708231104',
        condition: '关机',
        username: 'A12306'
      }, {
        id: 6,
        hostname: 'PC201708231105',
        condition: '关机',
        username: 'A12306'
      }],
      visible1: this.dialogTableVisible,
      tableChecked1: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.tableChecked1 = val
    },
    submitForm() {
      this.$emit('closeIt2', this.tableChecked1)
    },
    // 关闭列表
    close() {
      this.$emit('shut2')
    }
  }

}

</script>

<style scoped>

</style>
