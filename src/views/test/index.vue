<template>
  <div>
    <el-button @click="dialogVisible = true">打开对话框</el-button>
    <edit :visible.sync="dialogVisible" @closeIt="closeIt()" />
  </div>
</template>

<script>
import edit from '../edit.vue'
export default {
  name: 'Index',
  components: {
    edit
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    closeIt() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
