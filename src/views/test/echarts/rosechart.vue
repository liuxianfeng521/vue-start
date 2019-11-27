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
          text: '玫瑰图',
          left: 'center', // 标题水平居中
          textStyle: {
            // 文字样式
            color: '#3398DB'
          }
        },
        tooltip: {
          trigger: 'item', // 触发类型
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        /* 图标组件 */
        legend: {
          left: 'center',
          bottom: '50', // 图标组件离容器下侧的距离
          data: ['行业', '技术', '外汇', '黄金', '预测']
        },
        series: [
          {
            name: '周报',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95], // 外半径值
            center: ['50%', '38%'], // 横坐标容器的宽度 纵坐标容器的高度
            data: [
              { value: 320, name: '行业' },
              { value: 240, name: '技术' },
              { value: 149, name: '外汇' },
              { value: 100, name: '黄金' },
              { value: 59, name: '预测' }
            ]
          }
        ]
      })
    }
  }
}
</script>
