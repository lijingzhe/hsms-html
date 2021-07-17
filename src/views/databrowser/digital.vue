<template>
<div class="digital">
  <ul>
    <li>
      <span class = "value">{{data.value}}</span>
      <span class = "unit">{{data.unit}}</span>
    </li>
    <li>
      <span :style = "{'border-left-width':valueWidth}" class = 'prompt'>{{data.prompt}}</span>
    </li>
  </ul>


</div>
</template>

<script>
export default {
  name: "digital",
  props:{
    data: {
      value: "",
      unit:"",
      prompt:""
    }
  },
  computed:{
    valueWidth(){
      // console.log(data.value.length);
      // console.log(this.data.unit.length);
      return this.data.value.length*8 + this.data.unit.length*5 + "px"
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/digital.css";
</style>
