<template>
<div>
  <section class="mainbox">
    <div class="column">
      <panelSource :param="summary"></panelSource>
      <panelTempTrend :param="tempTrend"></panelTempTrend>
      <panel :param="flowTrend"></panel>
      <panel :param="stations"></panel>
    </div>

    <div class="column">
      <div class="mainarea">
        <Home></Home>
      </div>
      <panelBar :param="alarm"></panelBar>
    </div>

    <div class="column">
      <panelSource :param="summary"></panelSource>
      <panelTempTrend :param="tempTrend"></panelTempTrend>
      <panel :param="flowTrend"></panel>
      <panel :param="stations"></panel>
    </div>
  </section>
</div>
</template>

<script>
import panel from "./panel";
import panelSource from "./panelSource"
import panelTempTrend from "@/views/databrowser/panelTempTrend";
import panelBar from "@/views/databrowser/panelBar";
import heatmap from "@/views/databrowser/heatmap";
import heatmap2 from "@/views/databrowser/heatmap2";
import Home from "./Home";

export default {
  name: "mainbox",

  data(){
    return {
      summary:{
        title: '汇通首站一网',
        height: 1,
        width: 0
      },
      tempTrend:{
        title: '汇通首站一网温度',
        height: 1,
        width: 0
      },
      flowTrend:{
        title: '汇通首站一网流量',
        height: 1,
        width: 0
      },
      stations:{
        title: '换热站',
        height: 1.7,
        width: 0
      },
      alarm:{
        title: '小区热耗对比',
        height: 1,
        width: 0
      },
      main:{
        title: '',
        height: 5,
        width: 0
      }
    }
  },


  components: {
    panel,
    panelSource,
    panelTempTrend,
    panelBar,
    heatmap,
    heatmap2,
    Home
  }
}
</script>

<style lang="less" scoped>
@import "~assets/css/mainbox.less";
</style>
