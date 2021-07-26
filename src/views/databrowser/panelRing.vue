<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div id="RingPercent123" class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer">
  </div>

</div>
</template>

<script>

export default {
  name: "panelRing1",
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
      T1:0,
      T2:0,
      T3:0,
      T4:0
  },
  computed: {
    width(){
       return (this.param.width <= 0) ?'none' : this.param.width/3 + 'rem';
    },
    height(){
      return (this.param.height <= 0) ? '250px' : this.param.height + 'rem';
    },
    chartheight(){
      return (this.param.height <= 0) ? '200px' : this.param.height - 0.2 + 'rem';
    },
    title(){
      return this.param.title
    }
  },
  watch: {
    T1(newValue){
      this.ringPercent();
    }
  },
  methods: {
    ringPercent() {
      this.chartLine = this.$echarts.init(document.getElementById("RingPercent123"));
      let option = {
        tooltip: {
          show:false,
          trigger: 'item',
          formatter: "{a} : {c} ({d}%)"
        },
        //  color: ['#85b6b2', '#6d4f8d'],
        color: ['rgb(255,159,127)', 'rgb(50,197,233)','rgb(98,158,61)'],
        legend: {
          orient: 'vertical',
          x: '35%',
          top:'27%',
          itemHeight: 10,//图例的高度
          itemGap:8,//图例之间的间距
          textStyle: {
            color: ['rgb(255,159,127)', 'rgb(50,197,233)','rgb(98,158,61)']
          },
          data:['供热率'+this.T1+'%','面积率'+this.T2+'%','热效率'+this.T3+'%']
          //图例的名字需要和饼图的name一致，才会显示图例
        },
        series: [
          {
            name:'供热率'+this.T1+'%',
            type:'pie',
            radius: ['80%', '85%'],
            //环的位置
            label: {
              show: false,
              position: 'center',
              // normal: { // 显示的位置
              //     position: 'inner'
              // }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            data:[
              {
                value:this.T1, //需要显示的数据
                name: '供热率'+this.T1+'%',
                itemStyle: {
                  normal: {
                    color: 'rgb(255,159,127)'
                  }
                }
              },
              {
                value:100-this.T1,
                //不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          },
          {
            name:'面积率'+this.T2+'%',
            type:'pie',
            radius: ['70%', '75%'],
            label: {
              show: false,
              position: 'center',
              // normal: {
              //     position: 'inner'
              // }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            data:[
              {   name:'面积率'+this.T2+'%',
                value:this.T2,
                itemStyle: {
                  normal: {
                    color: 'rgb(50,197,233)'
                  }
                }
              },
              {
                value:100-this.T2,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          },
          {
            name:'热效率'+this.T3+'%',
            type:'pie',
            radius: ['60%', '65%'],
            label: {
              show: false,
              position: 'center',
              // normal: {
              //     position: 'inner'
              // }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            data:[
              {   name:'热效率'+this.T3+'%',
                value:this.T2,
                itemStyle: {
                  normal: {
                    color: 'rgb(98,158,61)'
                  }
                }
              },
              {
                value:100-this.T3,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          }
        ]
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
