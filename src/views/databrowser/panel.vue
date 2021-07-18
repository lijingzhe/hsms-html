<template>
<div class="panel">
  <ul>
    <li>
      <digital :data = "$store.state.supplyT" class = "li"></digital>
      <digital :data = "$store.state.heat" class = "li"></digital>
      <digital :data = "$store.state.returnT" class = "li"></digital>
      <digital :data = "$store.state.flow" class = "li"></digital>
    </li>
  </ul>

</div>
</template>

<script>
import digital from "./digital";

export default {
  name: "panel",
  props: {
    digit1: {
      value: "429.98",
      unit: "t/h",
      prompt: "瞬时流量",
      valueSize: 70
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
