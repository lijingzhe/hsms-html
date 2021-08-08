<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div class="chart" :style="{height:chartheight,width:width}">
    <scroll :param="stations" :marqueeList="scrollList"></scroll>
  </div>

  <div class="footer">
  </div>

</div>
</template>

<script>
import scroll from "@/views/databrowser/scroll";

export default {
  name: "panel",
  data(){
    return {
      "scrollList": [
        {
          "name": "1号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "2号换热站",
          "流量": 0.27,
          "压力": 0.8,
          "供温": 66,
          "回温": 59,
          state: 1
        },
        {
          "name": "3号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        },
        {
          "name": "4号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        },
        {
          "name": "5号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 1
        },
        {
          "name": "6号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "7号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 1
        },
        {
          "name": "8号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "9号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        },
        {
          "name": "10号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        },
        {
          "name": "11号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "12号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 1
        },
        {
          "name": "13号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 1
        },
        {
          "name": "14号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "15号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 1
        },
        {
          "name": "16号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        },
        {
          "name": "17号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "18号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "19号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        },
        {
          "name": "20号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "21号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 0
        },
        {
          "name": "22号换热站",
          "流量": 0.25,
          "压力": 0.9,
          "供温": 60,
          "回温": 55,
          state: 2
        }
      ]
    }
  },
  props: {
    param:{
      title: String,
      width: Number,
      height: Number
    },
    stations:{},
  },
  watch:{
    param(newVal,oldVal){
      console.log(newVal,oldVal)
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
      scroll
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
