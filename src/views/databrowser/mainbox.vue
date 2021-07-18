<template>
<div>
  <section class="mainbox">
    <div class="column">
      <panel></panel>
    </div>
    <div class="column">2</div>
    <div class="column">3</div>
  </section>
</div>
</template>

<script>
import panel from "./panel";
export default {
  name: "mainbox",
  components: {
    panel
  }
}
</script>

<style lang="less" scoped>
@import "~assets/css/mainbox.less";
</style>
