<template>
<div>
  <section class="mainbox">
    <div class="column">
      <panelSource :param="summary" :value="digitValue"></panelSource>
      <panelTempTrend :param="tempTrend" :T1="T1Trend" :T2="T2Trend"></panelTempTrend>
      <panelFlowPressureTrend :param="flowTrend" :F1="F1" :pressure="pressure"></panelFlowPressureTrend>
      <panel :param="stations"></panel>
    </div>

    <div class="column">
      <div class="mainarea">
        <Home></Home>
      </div>
      <panelBar :param="alarm"></panelBar>
    </div>

    <div class="column">
      <panelTempTrend2 :param="tempTrend2" :T1="T1Trend" :T2="T2Trend" :T3="T3Trend2" :T4="T4Trend2"></panelTempTrend2>
      <panelFlowTrend :param="flowTrend2" :T1="T1Trend" :T2="T2Trend" :T3="T3Trend2" :T4="T4Trend2"></panelFlowTrend>
      <panel :param="flowTrend"></panel>
      <panelRing :param="panelRing" :ringData="ringData"></panelRing>
    </div>
  </section>
</div>
</template>

<script>
import utils from "@/common/utils";
import panel from "./panel";
import panelSource from "./panelSource"
import panelTempTrend from "@/views/databrowser/panelTempTrend";
import panelTempTrend2 from "@/views/databrowser/panelTempTrend2";
import panelBar from "@/views/databrowser/panelBar";
import heatmap from "@/views/databrowser/heatmap";
import heatmap2 from "@/views/databrowser/heatmap2";
import Home from "./Home";
import panelFlowPressureTrend from "@/views/databrowser/panelFlowPressureTrend";
import panelFlowTrend from "@/views/databrowser/panelFlowTrend";
import panelRing from "./panelRing";

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
      tempTrend2:{
        title: '汇通首站二网温度',
        height: 1,
        width: 0
      },
      flowTrend:{
        title: '汇通首站一网流量压力',
        height: 1,
        width: 0
      },
      flowTrend2:{
        title: '汇通首站二网网流量压力',
        height: 1,
        width: 0
      },
      stations:{
        title: '换热站',
        height: 1.7,
        width: 0
      },
      panelRing:{
        title: '经济指标分析',
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
      },
      //供回温曲线的时间和值
      now:'',
      T1Trend: [],
      T2Trend: [],
      T3Trend2: [],
      T4Trend2: [],

      //数码管显示
      digitValue: {
        data1: {
          value: "87.8",
          unit: "℃",
          prompt: "供水温度",
          valueSize:0.25
        },
        data2: {
          value: '581288',
          unit: "kwh",
          prompt: "热量",
          valueSize:0.25
        },
        data3: {
          value: "68.9",
          unit: "℃",
          prompt: "回水温度",
          valueSize:0.25
        },
        data4: {
          value: "588.9",
          unit: "t/h",
          prompt: "流量",
          valueSize:0.25
        },
      },
      //一网流量压力曲线
      F1:[],
      pressure: {
        P1:[],
        P2:[]
      },
      //技术指标百分比
      ringData: {
        T1: 33,
        T2: 40,
        T3: 60,
        T4: 80
      }
    }
  },
  methods:{

    randomT1(){
      let oneMinute = 60 * 1000;
      let T1Trend = (Math.random() * 10 + 80).toFixed(1);
      let T2Trend = (Math.random() * 10 + 50).toFixed(1);
      let T3Trend2 = (Math.random() * 10 + 60).toFixed(1);
      let T4Trend2 = (Math.random() * 10 + 55).toFixed(1);

      let F1Trend = (Math.random() * 10 + 180).toFixed(1);
      let P1Trend = (Math.random()/5.0 + 0.4).toFixed(3);
      let P2Trend = (Math.random()/5.0 + 0.1).toFixed(3);

      let T1Digit = (Math.random()  + 83).toFixed(1);
      let T2Digit = (Math.random()  + 56).toFixed(1);

      let number01 = Math.random().toFixed(1);
      let number1 = (Math.random()*10).toFixed(2);

      this.now = new Date(+this.now + oneMinute);

      this.T1Trend.push([utils.formatTime(this.now),T1Trend]);
      this.T2Trend.push([utils.formatTime(this.now),T2Trend]);

      this.T3Trend2.push([utils.formatTime(this.now),T3Trend2]);
      this.T4Trend2.push([utils.formatTime(this.now),T4Trend2]);

      this.T1Trend.length>600 && this.T1Trend.shift();
      this.T2Trend.length>600 && this.T2Trend.shift();
      this.T3Trend2.length>600 && this.T3Trend2.shift();
      this.T4Trend2.length>600 && this.T4Trend2.shift();

      this.F1.push([utils.formatTime(this.now),F1Trend]);
      this.pressure.P1.push([utils.formatTime(this.now),P1Trend]);
      this.pressure.P2.push([utils.formatTime(this.now),P2Trend]);

      this.F1.length>600 && this.F1.shift();
      this.pressure.P1.length>600 && this.pressure.P1.shift();
      this.pressure.P2.length>600 && this.pressure.P2.shift();

      this.digitValue.data1.value = T1Digit;
      this.digitValue.data3.value = T2Digit;
      this.digitValue.data2.value = (parseFloat(this.digitValue.data2.value) + parseFloat(number01)).toFixed(0);
    }

  },
  mounted() {
    this.now = new Date();
    setInterval(this.randomT1,1000)
  },
  components: {
    panel,
    panelSource,
    panelTempTrend,
    panelTempTrend2,
    panelBar,
    heatmap,
    heatmap2,
    Home,
    panelFlowPressureTrend,
    panelFlowTrend,
    panelRing
  }
}
</script>

<style lang="less" scoped>
@import "~assets/css/mainbox.less";
</style>
