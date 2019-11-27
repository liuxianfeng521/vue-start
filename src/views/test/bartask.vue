<template>
  <div class="dashboard-editor-container">
    <el-row style="background:#fff;padding:10px 10px 0;margin-bottom:12px;">
      <line-chart :chart-data="newVisitis" />
    </el-row>
    <el-row class="box" :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <radarChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <roseChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">  <!-- xs最小屏 sm 小屏 md中屏 lg大屏  -->
        <div class="chart-wrapper">
          <BarChart :barchartdata="barData" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import radarChart from '@/views/test/echarts/radarchart'
import roseChart from '@/views/test/echarts/rosechart'
import BarChart from '@/views/test/echarts/barchart'
import LineChart from '@/views/test/echarts/linechart'
import { bringBarTask, bringlineTask } from '@/api/took'
export default {
  name: 'Bartask',
  components: {
    BarChart,
    LineChart,
    radarChart,
    roseChart
  },
  data() {
    return {
      barData: {},
      newVisitis: {}
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
      bringlineTask().then(response => {
        this.newVisitis = JSON.parse(JSON.stringify(response.data.newVisitis)) // 深复制对象
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard-editor-container {
    background-color: rgb(240, 242, 245);
    height: 100%;
    padding: 12px;
    position: relative;
  }
    .box{
      display: flex;
      padding: 10px;
    .chart-wrapper {
      display: flex;
      flex: 1;
      min-width: 200px;
      background: #fff;
      padding: 10px;
    }
    }
  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>
