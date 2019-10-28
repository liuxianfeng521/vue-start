<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/about1/1">about1</router-link> |
    <router-link to="/about/about2">about2</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'about'
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('init about')
    }
  }

}
</script>
