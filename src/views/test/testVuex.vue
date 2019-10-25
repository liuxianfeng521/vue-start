<template>
  <div>
    <span>  djf33333iuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</span>
    <span> {{ msg }}</span>
    <el-input v-model="input" />
    <el-button @click="action1">mapActions 方式 action</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  name: 'TestVuex',
  data() {
    return {
      input: 'ddduxj'
    }
  },
  computed: {
    ...mapGetters([
      'msg'
    ])

  },
  methods: {
    ...mapActions('test', ['setMsg']),
    action1() {
      this.setMsg(this.input)
    }
  }
}
</script>

<style scoped>

</style>
