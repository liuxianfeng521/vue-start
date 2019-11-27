<template>
  <div id="app1">
    <input v-model="filter">
    <p>{{ filter }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'App',
  data() {
    return {
      filter: 'all'
    }
  },
  beforeCreate() {
    console.log('==============' + 'beforeCreated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  created() {
    console.log('==============' + 'created' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  beforeMount() {
    console.log('==============' + 'beforeMount' + '===================')
    console.log(this.$el)
    console.log(document.getElementById('app1'))
    console.log(this.$data)
    console.log(this.filter)
  },
  mounted() {
    console.log('==============' + 'mounted' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  beforeUpdate() {
    console.log('==============' + 'beforeUpdate' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  updated() {
    console.log('==============' + 'updated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  beforeDestroy() {
    console.log('==============' + 'beforeDestroy' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  destroyed() {
    console.log('==============' + 'destroyed' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  }
}
</script>
