<template>
  <div id="app">
    <databrowser></databrowser>
  </div>
</template>

<script>
import databrowser from "views/databrowser/index";
export default {
  name: 'app',
  components: {
    databrowser
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
