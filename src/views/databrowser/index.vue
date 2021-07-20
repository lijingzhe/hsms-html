<template>
<div>
<!--  <banner></banner>-->
<!--  <mainbox></mainbox>-->
  <heatmap2></heatmap2>
</div>
</template>

<script>
import banner from "@/views/databrowser/banner";
import digital from "@/views/databrowser/digital";
import mainbox from "@/views/databrowser/mainbox";
import heatmap2 from "@/views/databrowser/heatmap2";

export default {

  name: "databrowser",

  data(){
    return {

    }
  },

  components: {
    banner,
    digital,
    mainbox,
    heatmap2
  }
}
</script>

<style scoped>
@import "../../assets/css/normalize.css";
</style>
