<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div id="TempTrend" class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer">
  </div>

</div>
</template>

<script>
import digital from "./digital";
import echarts from "echarts"

export default {
  name: "panel",
  data(){
    return {
      chartLine:""
    }
  },
  props: {
    param:{
      title: String,
      width: Number,
      height: Number
    }
  },
  computed: {
    width(){
       return (this.param.width <= 0) ?'none' : this.param.width + 'rem';
    },
    height(){
      return (this.param.height <= 0) ? '200px' : this.param.height + 'rem';
    },
    chartheight(){
      return (this.param.height <= 0) ? '160px' : this.param.height - 0.2 + 'rem';
    },
    title(){
      return this.param.title
    }
  },
    components: {
      digital
    },
  methods: {
    tempTrend() {
      this.chartLine = echarts.init(document.getElementById("TempTrend"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '一网温度'
        },
        color: ['red','white'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['供温', '回温']
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '20%',
          bottom: '1%',
          containLabel: true,
          show: false
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            lineStyle: {
              color: '#3b3836'
            }
          },
          data: ['8:3:3', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: '#312f2f'
            }
          }
        },
        series: [
          {
            name: '供温',
            type: 'line',
            data: [87, 85, 79, 83, 88, 90, 86]
          },
          {
            name: '回温',
            type: 'line',
            data: [65, 60, 58, 62, 67, 69, 65]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    }
  },
  mounted(){
    this.tempTrend()
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
