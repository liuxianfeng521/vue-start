<template>
  <div class="icons-container">
    <chinaEchart />
  </div>
</template>

<script>
import chinaEchart from './wizard/china-chart'
import svgIcons from './svg-icons'
import elementIcons from './element-icons'

export default {
  name: 'Echarts',
  components: {
    chinaEchart
  },
  data() {
    return {
      svgIcons,
      elementIcons
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;
  .disabled {
    pointer-events: none;
  }
}
</style>
