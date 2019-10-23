<template>
  <div class="HolyGrail">
    <div class="HolyGrail-body">
      <main class="HolyGrail-content">
        <el-button @click="dialogVisible = true">打开对话框</el-button>
        <div id="demo">
          <el-button @click="reserve">反转操作</el-button>
          <el-input v-model="input" placeholder="请输入内容" />
          <span>{{ input }}</span>
        </div>
      </main>
      <nav class="HolyGrail-nav">你</nav>
      <aside class="HolyGrail-ads">他</aside>
    </div>
    <edit :visible.sync="dialogVisible" @closeIt="closeIt()" />
  </div>
</template>
<script>
import edit from '../edit.vue'
export default {
  name: 'Index',
  components: {
    edit
  },
  data() {
    return {
      dialogVisible: false,
      input: ''
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    closeIt() {
      this.dialogVisible = false
    },
    getter() {
      console.log(this.reversedMessage)
    },
    reserve() {
      this.input = this.input.split('').reverse().join('')
    }
  }

}
</script>

<style scoped>
  .HolyGrail {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
  .HolyGrail-body {
    display: flex;
    flex: 1;
  }

  .HolyGrail-content {
    flex: 1;
    justify-content: center;
  }
  .HolyGrail-ads {
    width: 200px;
    background: #24da70;
  }

  .HolyGrail-nav {
    order: -1;
    background: #FFBA00;
    width: 200px;
  }
</style>
