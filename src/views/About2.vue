<template>
    <div>
      <span>水果类型</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
import apiService from '../../src/api/api.js'
export default {
  name: 'test',
  data () {
    return {
      msg: 'sssssssss22222ss',
      value: '',
      options: [{
        value: 'pingguo',
        label: '苹果'
      }, {
        value: 'juzi吧',
        label: '橘子'
      }]
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      console.log('created')
      apiService.getUser().then((res) => {
        console.log('getUser', res)
      }).catch((err) => {
        console.log('catch getUser', err)
      })
    }
  }

}
</script>

<style scoped>

</style>
