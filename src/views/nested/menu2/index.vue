<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 2" />
    <div>获取方式一 mapState {{ stateSize }}</div>
    <div>获取方式二 mapGetters {{ size }}</div>
    <div>获取方式三 store 对象 {{ this.$store.state.app.size }}</div>
    <div> msg=================== {{ msg }}</div>
    <el-input v-model="input" />
    <el-button @click="mutations1">mapMutations方式 mutations</el-button>
    <el-button @click="mutations2">store 对象 mutations</el-button>
    <el-button @click="action1">mapActions 方式 action</el-button>
    <el-button @click="action2">store对象 方式 action</el-button>
    <router-view />
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex' // 用来导入具体模块，避免使用麻烦
// const { mapState, mapMutations, mapActions, mapGetters } = createNamespacedHelpers('app')
export default {
  name: 'Menu2',
  data() {
    return {
      input: 'sate Size'
    }
  },
  computed: {
    ...mapGetters([
      'size',
      'msg'
    ]),
    ...mapState({
      stateSize: state => {
        console.log('state', state)
        return state.app.size
      }
    })
  },
  mounted() {
    console.log('mapGetters size', this.size)
    console.log('mapState stateSize', this.stateSize)
    console.log('this.$store', this.$store)
  },
  methods: {
  // 将this.SET_SIZE(size) this.$store.commit('app/SET_SIZE',size)
  // 将非模块下this.SET_SIZE(size) this.$store.commit('SET_SIZE',size)
    ...mapMutations('app', ['SET_SIZE']), // 非模块下第一个参数不要
    // 将this.setSize(size) this.$store.dispatch('app/setSize',size)
    ...mapActions('app', ['setSize']),
    mutations1() {
      this.SET_SIZE(this.input)
    },
    mutations2() {
      this.$store.commit('app/SET_SIZE', this.input)
    },
    action1() {
      this.setSize(this.input)
    },
    action2() {
      this.$store.dispatch('app/setSize', this.input)
    }
  }
}
</script>
