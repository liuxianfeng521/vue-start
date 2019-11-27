<template>
  <div>
    <div>
      <el-button type="primary" @click="mixinsFun">确定</el-button>
      <input v-model="testMix" type="test">
    </div>
    <div>{{ testMix2 }}</div>
  </div>
</template>
<script>
import { test } from '@/views/dashboard/admin/components/mixins/test'
export default {
  mixins: [test],
  data() {
    return {
      // testMix: '这是组件的数据'
    }
  },
  computed: {
    testMix2() {
      return this.testMix + '你好'
    }
  },
  watch: {
    testMix(newVal, oldVal) {
      console.log('组件的watch', newVal, oldVal)
    }
  },
  created() {
    console.log('这是组件的created')
  },
  methods: {
    mixinsFun() {
      console.log('这是组件的')
    }
  }
}
</script>
<style>

</style>
