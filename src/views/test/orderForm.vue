<template>
  <div>
    <el-dialog
      :title="isModify?'新增主机名':'查看主机详情'"
      :visible.sync="visible"
      @close="close()"
    >
      <el-form ref="ruleForm" :model="rowData" :disabled="!isModify" :rules="rules" class="demo-ruleForm">
        <el-form-item label="主机名" prop="hostname" :label-width="formLabelWidth">
          <el-input v-model="rowData.hostname" auto-complete="off" />
        </el-form-item>
        <el-form-item label="状态" prop="condition" :label-width="formLabelWidth">
          <el-select v-model="rowData.condition" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="rowData.username" placeholder="请输入用户名" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-if="isModify" type="primary" @click="submitForm()">确认</el-button>
        <el-button @click="close()">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
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
    },
    isModify: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    var hostname = (rule, value, callback) => {
      const reg = /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/
      if (!value) {
        return callback(new Error('主机名不能为空'))
      }
      setTimeout(() => {
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('格式不正确，'))
        }
      }, 100)
    }
    var checkusername = (rule, value, callback) => {
      const reg = /^[-_a-zA-Z0-9]{4,15}$/
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('用户名格式4到16位，字母数字下划线，减号'))
        }
      }, 100)
    }
    return {
      options: [{
        value: '开机'
      }, {
        value: '关机'
      }, {
        value: '待机'
      }],
      value: '',
      visible: this.dialogFormVisible,
      ruleForm: {
        hostname: '', //
        username: '',
        condition: ''
      },
      // 验证规则
      rules: {
        hostname: [
          { validator: hostname, trigger: 'change' }
        ],
        username: [
          { validator: checkusername, trigger: ['change', 'blur'] }
        ],
        condition: [
          { required: true, message: '状态为必选项', trigger: 'change' }
        ]
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    // 点击确定提交验证
    submitForm() {
      // 检查拿到的valid值是否通过验证
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // 父组件调用此方法替换表格数据
          this.$emit('closeIt', this.rowData)
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
