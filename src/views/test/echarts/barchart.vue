<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/views/dashboard/admin/components/mixins/resize' // 适应浏览器窗口大小
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
      default: '400px'
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
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons') // 通过 eCharts.init 方法初始化一个 eCharts 实例并通过 setOption 方法生成一个简单的柱状图
      // 使用刚指定的配置项和数据显示图表
      this.chart.setOption({
        // 标题title 主标题test
        title: {
          text: '近五天内cpu利用率',
          left: 'center', // 标题水平居中
          textStyle: {
            // 文字样式
            color: '#3398DB'
          }
        },
        tooltip: {
          // 图列提示框
          trigger: 'axis', // 触发类型
          formatter: '{a} <br/>{b} : {c}%', // {a}：series的name属性{b}：当前数据的name  {c}：当前数据的value
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {// 设置图标距离(grid 组件离容器的距离)
          top: 30,
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true // 是否包含坐标轴的刻度标签
        },
        xAxis: [{
          type: 'category', // 轴类型
          data: ['14日', '15日', '16日', '17日', '18日']
        }],
        yAxis: [{
          // Y轴百分比显示
          type: 'value',
          axisLabel: { // 坐标轴轴线
            show: true,
            textStyle: {
              color: '#3398DB',
              fontSize: '60%'
            },
            interval: 0, // 指定选择间隔
            showMinLabel: true,
            formatter: '{value} %'
          },
          min: 0,
          max: 100,
          splitNumber: 10 // 间隔为10
        }],
        series: [{ // 提示框信息
          name: 'CPU利用率',
          type: 'bar',
          barWidth: '40%', // 柱形的宽度
          data: [20, 35, 50, 80, 90]
        }]
      })
    }
  }
}
</script>
