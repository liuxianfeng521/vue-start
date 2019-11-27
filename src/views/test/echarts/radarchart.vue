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
    }
  },
  data() {
    return {
      chart: null
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
      this.chart.setOption({
        title: {
          text: '雷达图',
          left: 'center', // 标题水平居中
          textStyle: {
            // 文字样式
            color: '#3398DB'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 雷达图坐标系组件 只适用于雷达图
        radar: {
          radius: '66%', // 外半径值
          center: ['50%', '42%'], // 横坐标容器的宽度 纵坐标容器的高度
          splitNumber: 8, // 雷达图圈数
          splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示
            areaStyle: { // 分隔区域的样式设置
              color: 'rgba(127,95,132,.3)', // 图表背景颜色
              opacity: 1,
              shadowBlur: 45, // 图形阴影的模糊大小，以下三个属性 一起设置图形的阴影效果。
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [ // 指定雷达图中的多个变量（维度）max 指示器的最大值，可选，建议设置
            { name: '销售额', max: 10000 },
            { name: '管理', max: 20000 },
            { name: '信息技术', max: 20000 },
            { name: '客户支持', max: 20000 },
            { name: '发展', max: 20000 },
            { name: '营销', max: 20000 }
          ]
        },
        /* 图标组件 */
        legend: {
          left: 'center',
          bottom: '50',
          data: ['分配预算', '预计支出', '实际支出']
        },
        series: [{
          type: 'radar', // tooltip中的标题
          symbolSize: 0, // 图元的大小
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: '分配预算'
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: '预计支出'
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: '实际支出'
            }]
        }]
      })
    }
  }
}
</script>
