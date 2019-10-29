<template>
  <div class="app-container">
    <el-button v-loading="rollLoading" :data="roll" element-loading-text="拼命加载中" border fit highlight-current-row />
  </div>
</template>
<script>
import { bringRoll } from '@/api/took'

export default {
  name: 'Task0',
  data() {
    return {
      roll: null,
      rollLoading: true
    }
  },

  created() {
    debugger
    this.bringData()
  },
  methods: {
    bringData() {
      this.rollLoading = true
      bringRoll().then(response => {
        this.roll = response.data.array
        this.rollLoading = false
      })
    }

  }
}
</script>
