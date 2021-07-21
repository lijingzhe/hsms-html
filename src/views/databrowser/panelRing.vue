<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div id="RingPercent" class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer">
  </div>

</div>
</template>

<script>
import echarts from "echarts"

export default {
  name: "panelRing",
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
    ringData: {
      T1: 34,
      T2: 40,
      T3: 60,
      T4: 70
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
    ringData(newValue){
      this.ringPercent();
    }
  },
    components: {
    },
  methods: {
    ringPercent() {
      this.chartLine = echarts.init(document.getElementById("RingPercent"));
      // 指定图表的配置项和数据
      let option = {
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#464646'
            }
          },
          axisLine: {

            lineStyle: {
              width: 40
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [{
            value: this.ringData.T1,
            name: '流量',
            title: {
              offsetCenter: ['0%', '-50%']
            },
            detail: {
              offsetCenter: ['0%', '-48%']
            }
          },
            {
              value: this.ringData.T2,
              name: '机组效率',
              title: {
                offsetCenter: ['0%', '-51%']
              },
              detail: {
                offsetCenter: ['0%', '-49%']
              }
            },
            {
              value: this.ringData.T3,
              name: '供热面积',
              title: {
                offsetCenter: ['0%', '10%']
              },
              detail: {
                offsetCenter: ['0%', '20%']
              }
            },
            {
              value: this.ringData.T4,
              name: '供热量',
              title: {
                offsetCenter: ['0%', '-40%']
              },
              detail: {
                offsetCenter: ['0%', '-50%']
              }
            }
          ],
          title: {
            fontSize: 14
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'auto',
            borderColor: 'auto',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    }
  },
  mounted(){
    this.ringPercent()
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
