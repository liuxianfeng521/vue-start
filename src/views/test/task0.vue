<template>
  <div class="app-container">
    <input v-model="msg" v-loading="rollLoading" :data="roll" element-loading-text="拼命加载中" border fit highlight-current-row>
    <span>
      {{ msg }}
      {{ $t('guide.description') }}
    </span>
  </div>
</template>
<script>
import { bringRoll } from '@/api/took'

export default {
  name: 'Task0',
  data() {
    return {
      msg: 'xxxxxxxxxxx',
      roll: null,
      rollLoading: true,
      arr: ['1', '2']
    }
  },

  created() {
    debugger
    this.bringData()
  },
  methods: {
    bringData() {
      this.$t('guide.description')
      this.rollLoading = true
      bringRoll().then(response => {
        this.roll = response.data.array
        this.rollLoading = false
      })
    }
  }}
</script>
