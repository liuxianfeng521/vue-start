<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './resize'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

const animationDuration = 6000

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
      default: '300px'
    },
    chartData: {
      type: Array,
      default() {
        return [
          {
            name: '南海诸岛',
            value: 0
          },
          {
            name: '北京',
            value: 54
          },
          {
            name: '天津',
            value: 13
          },
          {
            name: '上海',
            value: 40
          },
          {
            name: '重庆',
            value: 75
          },
          {
            name: '河北',
            value: 13
          },
          {
            name: '河南',
            value: 83
          },
          {
            name: '云南',
            value: 11
          },
          {
            name: '辽宁',
            value: 19
          },
          {
            name: '黑龙江',
            value: 15
          },
          {
            name: '湖南',
            value: 69
          },
          {
            name: '安徽',
            value: 60
          },
          {
            name: '山东',
            value: 39
          },
          {
            name: '新疆',
            value: 4
          },
          {
            name: '江苏',
            value: 31
          },
          {
            name: '浙江',
            value: 104
          },
          {
            name: '江西',
            value: 36
          },
          {
            name: '湖北',
            value: 1052
          },
          {
            name: '广西',
            value: 33
          },
          {
            name: '甘肃',
            value: 7
          },
          {
            name: '山西',
            value: 9
          },
          {
            name: '内蒙古',
            value: 7
          },
          {
            name: '陕西',
            value: 22
          },
          {
            name: '吉林',
            value: 4
          },
          {
            name: '福建',
            value: 18
          },
          {
            name: '贵州',
            value: 5
          },
          {
            name: '广东',
            value: 98
          },
          {
            name: '青海',
            value: 1
          },
          {
            name: '西藏',
            value: 0
          },
          {
            name: '四川',
            value: 44
          }
        ]
      }
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

      this.chart.setOption(
        {
          geo: {
            map: 'china',
            aspectScale: 0.75, // 长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
              normal: {
                areaColor: '#013C62',
                shadowColor: '#182f68',
                shadowOffsetX: 0,
                shadowOffsetY: 25
              },
              emphasis: {
                areaColor: '#2AB8FF',
                borderWidth: 0,
                color: 'green',
                label: {
                  show: false
                }
              }
            }
          },
          series: [{
            type: 'map',
            roam: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },

            itemStyle: {
              normal: {
                borderColor: '#2ab8ff',
                borderWidth: 1.5,
                areaColor: '#12235c'
              },
              emphasis: {
                areaColor: '#2AB8FF',
                borderWidth: 0,
                color: 'green'
              }
            },
            zoom: 1.1,
            // eslint-disable-next-line no-dupe-keys
            roam: false,
            map: 'hanzhou' // 使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#ffff',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: this.chartData
          }

          ]
        })
    }
  }
}
</script>
