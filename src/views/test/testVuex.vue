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
        <el-form-item label="年龄" prop="age" :label-width="formLabelWidth">
          <el-input-number v-model="rowData.age" :step="2" controls-position="right" placeholder="请输入你的年龄" @change="handleChange" />
        </el-form-item>
        <el-form-item label="日期" prop="date" :label-width="formLabelWidth">
          <el-date-picker
            v-model="rowData.date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          />
        </el-form-item>
        <el-form-item label="联系电话:" prop="Phone" :label-width="formLabelWidth" required>
          <el-input v-model="rowData.Phone" />
        </el-form-item>
        <el-form-item label="邮编号码:" prop="zip" :label-width="formLabelWidth" required>
          <el-input v-model="rowData.zip" />
        </el-form-item></el-form>
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
    // 自定义验证规则 phone age zip
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
      if (!value) {
        return callback(new Error('电话号码不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (phoneReg.test(value)) {
            callback()
          } else {
            callback(new Error('电话号码格式不正确'))
          }
        }
      }, 100)
    }
    var Age = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (value < 18) {
          callback(new Error('必须年满18岁'))
        } else {
          callback()
        }
      }, 1000)
    }
    var zip = (rule, value, callback) => {
      const zipReg = /^[1-9]\d{5}$/
      if (!value) {
        return callback(new Error('邮编不能为空'))
      }
      setTimeout(() => {
        if (zipReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮编号码'))
        }
      }, 100)
    }
    return {
      loading: false,
      visible: this.dialogFormVisible,
      ruleForm: {
        name: '', //
        date: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        Phone: '',
        zip: '',
        age: ''

      },
      // 验证规则
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
        ],
        Phone: [
          { validator: checkPhone, trigger: ['change', 'blur'] }
        ],
        zip: [
          { validator: zip, trigger: 'blur' }
        ],
        age: [
          { validator: Age, trigger: ['change', 'blur'] }
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
          this.loading = true
          setTimeout(() => {
            // 父组件调用此方法替换表格数据
            this.$emit('closeIt', this.rowData)
            this.loading = false
          }, 5000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 关闭列表
    close() {
      this.$emit('closeIt', this.dialogFormVisible)
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
