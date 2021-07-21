<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div id="FlowTrend" class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer" >
  </div>

</div>
</template>

<script>
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
    },
    F1: [],
    pressure:{
      P1: [],
      P2: []
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
  watch: {
    F1(newValue){
      this.flowPressureTrend();
    }
  },
    components: {
    },
  methods: {
    flowPressureTrend() {
      this.chartLine = echarts.init(document.getElementById("FlowTrend"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '一网流量压力',
          textStyle: {
            fontSize: 12
          }
        },
        color: ['white','#B67856FF','#1D5A3EFF'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['流量', '供压','回压']
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
          type: 'time',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#2d3439',
            formatter: (params,index) => {
              let time = new Date(params);
              let y = time.getFullYear();
              let m = time.getMonth();
              let d = time.getDate();
              let h =time.getHours();
              let mm = time.getMinutes();
              let s = time.getSeconds();
              return (h<10?'0'+h:h) + ':' + (mm<10?'0'+mm:mm);
                      // + ':' + (s<10?'0'+s:s) ;
                      // + '\n' +
                      // y + '-' + (m<10?'0'+m:m) + '-' + (d<10?'0'+d:d);
            }
          }
        },
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          }
        },
          {
          type: 'value',
          splitLine: {
            show: false
          }
        }],
        series: [
          {
            yAxisIndex: 0,
            name: '流量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.F1
          },
          {
            yAxisIndex: 1,
            name: '供压',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.pressure.P1
          },
          {
            yAxisIndex: 1,
            name: '回压',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.pressure.P2
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    }
  },
  mounted(){
    this.flowPressureTrend()
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
