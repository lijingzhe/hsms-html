<template>
<div id="main711" class="main111">

</div>
</template>

<script>
import echarts from "echarts"
import {request} from "@/network/request";

require("echarts/extension/bmap/bmap");
const CUSTOM_MAP_CONFIG = require("../../assets/map/style/custom_map_config.json");
const DARK_MAP_CONFIG = {}

// import data from "@/assets/json/mapjson.json";

export default {
  name: "map12",

  methods: {
    maprender(){
      var app = {};
      var chartDom = document.getElementById('main711');
      var myChart = echarts.init(chartDom);
      var option;
      // var option = {
      //   animation: false,
      //   bmap: {
      //     center: [120.13066322374, 30.240018034923],
      //     zoom: 14,
      //     roam: true,
      //     mapStyle: {
      //       features: ["road","building","water","land"],//隐藏地图上的"poi",
      //       style:'dark'
      //     }
      //
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
      //     data: '',
      //     pointSize: 5,
      //     blurSize: 6
      //   }]
      // };

      request({
        url: '/data/asset/data/hangzhou-tracks.json'
      }).then(res =>
      {
        var points = [].concat.apply([], res.data.map(function (track) {
          return track.map(function (seg) {
            return seg.coord.concat([1]);
          });
        }));
        myChart.setOption(option = {
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
            data: points,
            pointSize: 5,
            blurSize: 6
          }]
        });
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());

        setTimeout(() => {
          console.log(CUSTOM_MAP_CONFIG);
          bmap.setMapStyleV2({styleJson:CUSTOM_MAP_CONFIG})
          // bmap.setMapStyle({features: ["road","building","water","land"],
          //   style:'midnight'})
        } ,500);

      }
      );
    }
  },
  mounted() {
    this.maprender()
  }
  }
</script>

<style scoped>
.main111 {
  height: 3.85rem;
  width: 100%;
}
</style>
