<template>
  <el-dialog
    title="提示"
    :visible.sync="visible"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Edit',
  props: {
    visible: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClose() {
      this.$emit('closeIt')
    }
  }
}
</script>

<style scoped>

</style>
