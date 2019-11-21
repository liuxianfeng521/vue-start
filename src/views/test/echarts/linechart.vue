<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/views/dashboard/admin/components/mixins/resize'
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default() {
        return {
          xdata: [],
          expectedData: [],
          actualData: []
        }
      }
    }
  },
  data() {
    return {
      chart: null,
      data: this.chartData.xdata
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.initChart()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData, actualData, xdata } = {}) {
      this.chart.setOption({
        title: {
          text: '本周指标完成情况',
          textStyle: {
            // 文字样式
            color: '#3398DB'
          }
        },
        xAxis: {
          data: xdata,
          type: 'category', // 轴类型
          boundaryGap: false, // 两边是否留白
          axisLabel: { // 控制x轴标签的显示间隔
            interval: 0
          },
          axisTick: {
            show: false
          }
        },
        /* 图像四周边距设置 */
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 50,
          containLabel: true // 决定是否包括了坐标轴标签在内的所有内容的吧显示
        },
        // 提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器配置项设置为 'cross'，坐标系会自动选择显示哪个轴的 axisPointer
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: { // 是否显示坐标轴刻度
            show: false
          }
        },
        /* 图例说明 */
        legend: {
          data: ['预计指标', '实际指标']
        },
        series: [{
          name: '预计指标',
          itemStyle: {// 折线拐点标志的样式
            normal: {
              color: '#FF005A',
              lineStyle: {
                // 折线样式
                color: '#FF005A',
                width: 2 // 设置线宽
              }
            }
          },
          smooth: true,
          type: 'line',
          data: expectedData
        },
        {
          name: '实际指标',
          smooth: true, // 是否平滑曲线
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: { // 线条样式
                color: '#3888fa',
                width: 2
              },
              areaStyle: { // 区域填充样式
                color: '#f3f8ff'
              }
            }
          },
          data: actualData
        }]
      })
    }
  }
}
</script>
