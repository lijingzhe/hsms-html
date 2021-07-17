<template>
<div>
  <projheader></projheader>
  <digital :data = 'digit1'></digital>
</div>
</template>

<script>
import projheader from "@/views/databrowser/projheader";
import digital from "@/views/databrowser/digital";

export default {

  name: "databrowser",

  data(){
    return {
      digit1:{
        value: "12212",
        unit: "t/h",
        prompt: "瞬时流量"
      }
    }
  },

  components: {
    projheader,
    digital
  }
}
</script>

<style scoped>

</style>
