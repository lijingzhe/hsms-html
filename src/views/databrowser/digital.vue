<template>
<div class="digital">
  <ul class="ul">
    <li>
      <span :style="{fontSize:valueFontSize}" class = "value">{{data.value}}</span>
      <span :style="{fontSize:unitFontSize}" class = "unit">{{data.unit}}</span>
    </li>
    <li>
      <span :style = "{'border-left-width':valueWidth,fontSize:promptFontSize}" class = 'prompt'>{{data.prompt}}</span>
    </li>
  </ul>


</div>
</template>

<script>
export default {
  name: "digital",
  props:{
    data: {
      value: '',
      unit: '',
      prompt: '',
      valueSize: {
        type: Number,
        default: 70
      }
    }
  },
  computed:{
    valueWidth(){
      return this.data.value.length * this.data.valueSize / 8 + this.data.unit.length + 'px'
    },
    valueFontSize(){
      return this.data.valueSize + 'px'
    },
    unitFontSize(){
      return this.data.valueSize / 2 + 'px'
    },
    promptFontSize(){
      return this.data.valueSize / 4 + 'px'
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/digital.css";
</style>
