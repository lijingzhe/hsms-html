<template>
<div id="main7" class="main1">

</div>
</template>

<script>
import echarts from "echarts"
// import mapjson from "@/views/databrowser/mapjson";
import {request} from "@/network/request";

export default {
  name: "map12",
  methods: {
    maprender(){
      var app = {};
      var chartDom = document.getElementById('main7');
      var myChart = echarts.init(chartDom);
      var option = {
        animation: false,
        bmap: {
          center: [120.13066322374, 30.240018034923],
          zoom: 14,
          roam: true
        },
        visualMap: {
          show: false,
          top: 'top',
          min: 0,
          max: 5,
          seriesIndex: 0,
          calculable: true,
          inRange: {
            color: ['blue', 'blue', 'green', 'yellow', 'red']
          }
        },
        series: [{
          type: 'heatmap',
          coordinateSystem: 'bmap',
          data: "",
          pointSize: 5,
          blurSize: 6
        }]
      };

      request({
        url: '/data/asset/data/hangzhou-tracks.json'
      }).then(res => {
        var points = [].concat.apply([], res.map(function (track) {
          return track.map(function (seg) {
            return seg.coord.concat([1]);
          });
        }));

        option.series.data=points;
        myChart.setOption(option);

        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
      }).catch(err => {
        console.log(err);
      });

      console.log(option);
      console.log(myChart);
      option && myChart.setOption(option);

      // myChart.setOption(option = {
      //   animation: false,
      //   bmap: {
      //     center: [120.13066322374, 30.240018034923],
      //     zoom: 14,
      //     roam: true
      //   },
      //   visualMap: {
      //     show: false,
      //     top: 'top',
      //     min: 0,
      //     max: 5,
      //     seriesIndex: 0,
      //     calculable: true,
      //     inRange: {
      //       color: ['blue', 'blue', 'green', 'yellow', 'red']
      //     }
      //   },
      //   series: [{
      //     type: 'heatmap',
      //     coordinateSystem: 'bmap',
      //     data: points,
      //     pointSize: 5,
      //     blurSize: 6
      //   }]
      // })
    }
  },
  mounted() {
    this.maprender()
  }
  }
</script>

<style scoped>
.main1 {
  height: 600px;
  width: 600px
}
</style>
