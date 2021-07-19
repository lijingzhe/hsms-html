<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div class="chart" :style="{height:chartheight,width:width}">
  </div>

  <div class="footer">
  </div>

</div>
</template>

<script>
import digital from "./digital";

export default {
  name: "panel",
  props: {
    param:{
      title: String,
      width: Number,
      height: Number
    }
  },
  watch:{
    param(newVal,oldVal){
      console.log(newVal,oldVal)
    }
  },
  computed: {
    width(){
       return (this.param.width <= 0) ?'none' : this.param.width + 'px';
    },
    height(){
      return (this.param.height <= 0) ? '200px' : this.param.height + 'px';
    },
    chartheight(){
      return (this.param.height <= 0) ? '160px' : this.param.height - 40 + 'px';
    },
    title(){
      return this.param.title
    }
  },
    components: {
      digital
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
