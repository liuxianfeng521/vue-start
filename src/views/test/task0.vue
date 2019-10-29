<template>
  <div>
    <span v-loading="rollLoading" :data="roll" element-loading-text="拼命加载中">hello vue</span>
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
        debugger
        this.roll = response.data
        this.rollLoading = false
      })
    }

  }
}
</script>
