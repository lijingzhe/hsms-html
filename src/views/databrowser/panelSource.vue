<template>
<div class="panel" :style="{height:height,width:width}">
  <div class="title">
     {{this.param.title}}
  </div>

  <div class="chart" :style="{height:chartheight,width:width}">
    <ul>
      <li>
        <digital :data = "value.data1" class = "li"></digital>
        <digital :data = "value.data2" class = "li"></digital>
        <digital :data = "value.data3" class = "li"></digital>
        <digital :data = "value.data4" class = "li"></digital>
      </li>
    </ul>
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
    },
    value: {
      data1: {},
      data2: {},
      data3: {},
      data4: {}
    }
  },
  computed: {
    width(){
       return (this.param.width <= 0) ?'none' : this.param.width + 'px';
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
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/panel.less";
</style>
