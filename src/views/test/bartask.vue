<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">  <!-- xs最小屏 sm 小屏 md中屏 lg大屏  -->
        <div class="chart-wrapper">
          <BarChart :barchartdata="barData" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarChart from '@/views/test/echarts/barchart'
import { bringBarTask } from '@/api/took'
export default {
  name: 'Bartask',
  components: {
    BarChart
  },
  data() {
    return {
      barData: {}
    }
  },
  mounted() {
    this.bringData()
  },
  methods: {
    bringData() {
      // 从后端获取数据
      bringBarTask().then(response => {
        this.barData = JSON.parse(JSON.stringify(response.data.barData)) // 深复制对象
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 20px;
    position: relative;
  .chart-wrapper {
    background: #fff;
    padding: 20px;
  }
  }
</style>
