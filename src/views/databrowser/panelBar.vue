<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div id="stationsBar" class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer">
  </div>

</div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "panel",
  data(){
    return {
      stationsBar:''
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
    },
  methods:{
    bar(){
      this.stationsBar = echarts.init(document.getElementById("stationsBar"));
      let option = {
        color: ['yellow'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          top:  '10%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['ly', 'dd', '和顺嘉园', '曼哈顿', '公园时光', '和顺贾府', '领秀山庄','越秀','绿源', '巨丰', '和顺嘉园', '曼哈顿',
              '公园时光', '和顺贾府', '领秀山庄','越秀','ly', 'dd', '和顺嘉园', '曼哈顿', '公园时光', '和顺贾府', '领秀山庄','越秀','绿源',
              '巨丰', '和顺嘉园', '曼哈顿', '公园时光', '和顺贾府', '领秀山庄','越秀','ly', 'dd', '和顺嘉园', '曼哈顿', '公园时光', '和顺贾府', '领秀山庄','越秀','绿源', '巨丰', '和顺嘉园', '曼哈顿',
              '公园时光', '和顺贾府', '领秀山庄','越秀','ly', 'dd', '和顺嘉园', '曼哈顿', '公园时光', '和顺贾府', '领秀山庄','越秀','绿源',
              '巨丰', '和顺嘉园', '曼哈顿', '公园时光', '和顺贾府', '领秀山庄','越秀'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              color: 'grey',
              fontSize: 12
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'KWh/㎡',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,120,33,34,66,45,56,33,54,66,10, 52, 200, 334, 390, 330, 220,120,33,34,
              66,45,56,33,54,66,10, 52, 200, 334, 390, 330, 220,120,33,34,66,45,56,33,54,66,10, 52, 200, 334, 390, 330, 220,120,33,34,66,45,56,33,54,66]
          }
        ]
      };
      this.stationsBar.setOption(option);
    }
  },
  mounted(){
    this.bar();
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
