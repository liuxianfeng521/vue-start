<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 4" />
  </div>
</template>
<script>
export default {
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('this.$router menu4', this.$router)
      console.log('this.$route menu4', this.$route)
    }
  }
}
</script>

