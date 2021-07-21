<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div id="FlowTrend2" class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer" style="color: #f6ff7f">
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
    T1: [],
    T2: [],
    T3: [],
    T4: []
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
    T1(newValue){
      this.tempTrend();
    }
  },
    components: {
    },
  methods: {
    tempTrend() {
      this.chartLine = echarts.init(document.getElementById("FlowTrend2"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '二网温度',
          textStyle: {
            fontSize: 12
          }
        },
        color: ['red','#bbff7f','#663D71','#908343'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['流量1', '流量2', '流量3', '流量4']
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
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '流量1',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.T1,
            // itemStyle: {
            //   normal: {
            //     areaStyle: {type: 'default'},
            //     color: new echarts.graphic.LinearGradient(
            //       0, 0, 0, 1,
            //       [
            //         {offset: 0, color: '#ea3f15'},
            //         {offset: 0.5, color: 'rgba(201,29,29,0.51)'},
            //         {offset: 1, color: 'rgba(160,12,12,0.22)'}
            //       ]
            //     ),
            //     borderColor:'#e52b1b',//拐点边框颜色
            //     borderWidth:2//拐点边框大小
            //   }},
          },
          {
            name: '流量2',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.T2
          },
          {
            name: '流量3',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.T3
          },
          {
            name: '流量4',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: this.T4
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
