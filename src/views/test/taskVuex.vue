<template>
  <div>
    <span>  你好 </span>
    <span> {{ row }}</span>
    <el-input v-model="input" />
    <el-button @click="mutations1">mapMutations方式 mutations</el-button>
    <el-button @click="mutations2">store 对象 mutations</el-button>
    <el-button @click="action1">mapActions 方式 action</el-button>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'TaskVuex',
  data() {
    return {
      input: 'hello world'
    }
  },
  computed: {
    ...mapGetters([
      'row'
    ])

  },
  methods: {
    ...mapMutations('task', ['SET_ROW']), // 非模块下第一个参数不要
    ...mapActions('task', ['setRow']),
    mutations1() {
      this.SET_ROW(this.input)
    },
    mutations2() {
      this.$store.commit('task/SET_ROW', this.input)
    },
    action1() {
      this.setRow(this.input)
    }
  }
}
</script>

<style scoped>

</style>
