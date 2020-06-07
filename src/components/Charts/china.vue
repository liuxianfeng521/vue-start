<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    chartData: {
      type: Array,
      default() {
        return [
          { name: '北京', value: 199 },
          { name: '天津', value: 42 },
          { name: '河北', value: 102 },
          { name: '山西', value: 81 },
          { name: '内蒙古', value: 47 },
          { name: '辽宁', value: 67 },
          { name: '吉林', value: 82 },
          { name: '黑龙江', value: 123 },
          { name: '上海', value: 24 },
          { name: '江苏', value: 92 },
          { name: '浙江', value: 114 },
          { name: '安徽', value: 109 },
          { name: '福建', value: 116 },
          { name: '江西', value: 91 },
          { name: '山东', value: 119 },
          { name: '河南', value: 137 },
          { name: '湖北', value: 116 },
          { name: '湖南', value: 114 },
          { name: '重庆', value: 91 },
          { name: '四川', value: 125 },
          { name: '贵州', value: 62 },
          { name: '云南', value: 83 },
          { name: '西藏', value: 9 },
          { name: '陕西', value: 80 },
          { name: '甘肃', value: 56 },
          { name: '青海', value: 10 },
          { name: '宁夏', value: 18 },
          { name: '新疆', value: 180 },
          { name: '广东', value: 123 },
          { name: '广西', value: 59 },
          { name: '海南', value: 14 }
        ]
      }
    }
  },
  data() {
    return {
      chart: null,
      geoCoordMap: {}
    }
  },
  mounted() {
    this.geoCoordMap = this.getGeoCoordMap('china')
    console.log('convertData', this.convertData(this.chartData, this.geoCoordMap))
    console.log('geoCoordMap', this.geoCoordMap)
    this.initChart()
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
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        backgroundColor: '#394056',
        title: {
          top: 20,
          text: 'Requests',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: '1%'
        },
        tooltip: {
          show: true,
          formatter: function(params) {
            console.log(params)
            var tipHtml = ''
            tipHtml = '<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
              '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' + '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' + '</i>' +
              '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>' +
              '<div style="padding:20px">' +
              '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>' +
              '单位总数：' + '<span style="color:#11ee7d;margin:0 6px;">' + params.value[2] + '</span>' + '个' + '</p>' +
              '</div>' + '</div>'
            return tipHtml
          }

        },
        grid: {
          top: '2%',
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: false, // 不开启缩放和平移
          label: {
            normal: {
              show: false, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [{
          type: 'effectScatter',
          coordinateSystem: 'geo', // 对应上方配置
          data: this.convertData(this.chartData, this.geoCoordMap),
          symbolSize: function(val) {
            return val[2] / 10
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true
        },
        {
          name: '启动次数', // 浮动框的标题
          type: 'map',
          coordinateSystem: 'geo',
          data: this.chartData // 这里就是数据，即数组可以单独放在外面也可以直接写
        }]
      })
      this.chart.on('click', (params) => {
      // 鼠标点击事件
        this.$emit('chartCallback', params)
      })
    },
    getGeoCoordMap(mapName) {
      var mapFeatures = echarts.getMap(mapName).geoJson.features
      console.log('mapFeatures', mapFeatures, echarts.getMap(mapName).geoJson)
      var geoCoordMap = []
      mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp
        geoCoordMap[name].id = v.id
      })
      return geoCoordMap
    },
    convertData(data, geoCoordMap) {
      var res = []
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          console.log('geoCoord', geoCoord)
          res.push({
            name: data[i].name,
            id: geoCoord.id,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }
  }

}
</script>
