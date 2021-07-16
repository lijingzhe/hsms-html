<template>
<div class="digital">
  <span class = "value">1233.54</span>
  <span class="unit">℃</span>
  <ul>
    <li>
      <span class = "value">1233.54</span>
      <span class = "unit">℃</span>
    </li>
    <li>
      <span class = 'prompt'>提示</span>
    </li>
  </ul>


</div>
</template>

<script>
export default {
  name: "digital",
  props:{
    value: "",
    unit:""
  }
}
</script>

<style scoped>
@import "../../assets/css/digital.css";
</style>
