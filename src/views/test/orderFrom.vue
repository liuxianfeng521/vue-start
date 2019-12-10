<template>
  <div>
    <el-dialog
      title="新增主机名"
      :visible.sync="visible"
      @close="close()"
    >
      <el-form ref="ruleForm" :model="rowData" :rules="rules" class="demo-ruleForm">
        <el-form-item label="主机名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="rowData.name" auto-complete="off" />
        </el-form-item>
        <el-form-item label="状态" prop="address" :label-width="formLabelWidth">
          <el-input v-model="rowData.address" placeholder="请选择收货地址" />
        </el-form-item>
        <el-form-item label="用户名" prop="age" :label-width="formLabelWidth">
          <el-input-number v-model="rowData.age" :step="2" controls-position="right" placeholder="请输入你的年龄" @change="handleChange" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="loading" @click="submitForm()">确认</el-button>
        <el-button @click="close()">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {

  data() {
    return {
      visible: this.dialogFormVisible,
      ruleForm: {
        name: '', //
        date: '',
        resource: '',
        desc: '',
        age: ''

      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 15, message: '输入字段的长度', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/gi, message: '姓名只能为中文英文字母数字', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date: [{ required: true, message: '选择订单日期', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击确定提交验证
    submitForm() {
      // 检查拿到的valid值是否通过验证
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            // 父组件调用此方法替换表格数据
            this.$emit('closeIt', this.rowData)
            this.loading = false
          }, 50)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 关闭列表
    close() {
      this.$emit('shut')
    },
    // 打印验证
    handleChange(value) {
      console.log(value)
    }
  }

}
</script>

<style scoped>

</style>
