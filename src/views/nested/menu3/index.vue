<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 3" />
    <!--声明式-->
    <router-link :to="{ name:'Menu2'}">menu 2</router-link>
    <router-link to="/nested/menu1/menu1-2/menu1-2-1">menu1-2-1</router-link>
    <div @click="goTo">goTomenu4</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: '1223'
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('this.$router menu3', this.$router)
      console.log('this.$route menu3', this.$route)
    },
    goTo() {
      console.log('this.$router', this.$router)
      console.log('this.$route', this.$route)
      // 编程式
      this.$router.push(`/nested/menu4/${this.id}`)
    }
  }
}
</script>
