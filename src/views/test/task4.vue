<template>
  <div id="watch-example">
    <el-radio v-model="radio" label="1">电脑
    </el-radio>
    <el-radio v-model="radio" label="3">手机</el-radio>
    <span v-if="isShow1">电脑信息</span>
    <span v-else>手机信息</span>
  </div>
</template>

<script>
export default {
  name: 'Task4',
  data() {
    return {
      radio: '1',
      isShow1: true
    }
  },
  watch: {
    radio: function(newVal) {
      console.log('newVal', newVal)
      if (newVal === '1') this.isShow1 = true
      else this.isShow1 = false
    }
  }
}
</script>

<style scoped>

</style>

