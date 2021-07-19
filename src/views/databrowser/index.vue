<template>
<div>
  <banner></banner>
  <mainbox></mainbox>
</div>
</template>

<script>
import banner from "@/views/databrowser/banner";
import digital from "@/views/databrowser/digital";
import mainbox from "@/views/databrowser/mainbox";

export default {

  name: "databrowser",

  data(){
    return {

    }
  },

  components: {
    banner,
    digital,
    mainbox
  }
}
</script>

<style scoped>
@import "../../assets/css/normalize.css";
</style>
