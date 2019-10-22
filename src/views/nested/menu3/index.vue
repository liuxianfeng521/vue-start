<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 3" />
    <router-link to="menu2">menu 2</router-link>
    <router-link to="/nested/menu1/menu1-2/menu1-2-1">menu1-2-1</router-link>
    <div @click="goTo">goTo menu1-2-1</div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo() {
      console.log('this.$router', this.$router)
      console.log('this.$route', this.$route)
      this.$router.push('/nested/menu1/menu1-2/menu1-2-1')
    }
  }
}
</script>
