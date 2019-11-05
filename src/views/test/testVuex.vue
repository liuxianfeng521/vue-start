<template>
  <div>
    <el-dialog
      title="编辑订单"
      :visible.sync="visible"
      @close="close()"
    >
      <el-form ref="ruleForm" :model="rowData" :rules="rules" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="rowData.name" auto-complete="off" />
        </el-form-item>
        <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
          <el-input v-model="rowData.address" placeholder="请选择收货地址" />
        </el-form-item>
        <el-form-item label="日期" prop="date" :label-width="formLabelWidth">
          <el-date-picker
            v-model="rowData.date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          />
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
  name: 'TestVuex',
  props: {
    dialogFormVisible: {
      type: Boolean,
      default() {
        return false
      }
    },
    rowData: {
      type: Object,
      default() {
        return {}
      }
    }

  },
  data() {
    return {
      loading: false,
      visible: this.dialogFormVisible,
      ruleForm: {
        name: '',
        date: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.$emit('closeIt', this.rowData)
            this.loading = false
          }, 5000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    close() {
      this.$emit('closeIt', this.dialogFormVisible)
    }
  }

}

</script>

<style scoped>

</style>
