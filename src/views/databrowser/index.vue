<template>
<div>
  <projheader></projheader>
  <digital></digital>
</div>
</template>

<script>
import projheader from "@/views/databrowser/projheader";
import digital from "@/views/databrowser/digital";

export default {

  name: "databrowser",

  data(){
    return {

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
