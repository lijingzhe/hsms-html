<template>
<div id="distributionDiv"></div>
</template>

<script>
import vueEcharts from "echarts";
import zaixian from "@/assets/img/zaixian.png";
import shangxian from "@/assets/img/shangxian.png";
import lixian from "@/assets/img/lixian.png";
// 注册山东省地图
const guizhouJson = require("@/assets/map/yulin.json");
vueEcharts.registerMap("guizhou", guizhouJson);
export default {
  name: "dynamicMap",
  data() {
    return {};
  },
  mounted() {
    this.getDistributionOptions();
  },
  methods: {
    getDistributionOptions() {
      // 获取经纬度数据
      const seriesList = [{
          image: zaixian,
          data: [{
              value: [106.9, 27.7]
            },
            {
              value: [105.29, 27.32]
            },
            {
              value: [106.04, 27.03]
            },
            {
              value: [104.82, 26.58]
            }
          ]
        },
        {
          image: shangxian,
          data: [{
            value: [107.43, 28.56]
          }]
        },
        {
          image: lixian,
          data: [{
            value: [107.5, 27.76]
          }]
        }
      ];
      // 自定义图标
      const series = seriesList.map(v => {
        return {
          type: "custom", //配置显示方式为用户自定义
          coordinateSystem: "geo",
          renderItem(params, api) {
            //具体实现自定义图标的方法
            return {
              type: "image",
              style: {
                image: v.image,
                x: api.coord([
                  v.data[params.dataIndex].value[0],
                  v.data[params.dataIndex].value[1]
                ])[0],
                y: api.coord([
                  v.data[params.dataIndex].value[0],
                  v.data[params.dataIndex].value[1]
                ])[1],
                width: "29",
                height: "35"
              }
            };
          },
          data: v.data
        };
      });
      // options
      const distributionOptions = {
        tooltip: {
          show: true, // 鼠标移入是否触发数据
          trigger: "item", // 触发方式
          triggerOn: "click",
          formatter: "名称:{b}<br />坐标:{c}"
        },
        series,
        geo: {
          //引入贵州省的地图
          map: "guizhou",
          layoutCenter: ["50%", "50%"], //设置后left/right/top/bottom等属性无效
          layoutSize: "90%",
          roam: false, //关闭鼠标缩放和拖动
          zoom: 1,
          label: {
            normal: {
              //静态的时候展示样式
              show: true, //是否显示地图省份得名称
              textStyle: {
                color: "#fff",
                // fontSize: 10,
                fontFamily: "Arial"
              }
            },
            emphasis: {
              show: true,
              //动态展示的样式
              color: "#fff"
            }
          },
          itemStyle: {
            // 设置地图块的相关显示信息
            normal: {
              areaColor: "#8db200",
              borderColor: "#6367ad",
              borderWidth: 1,
              textStyle: {
                color: "#fff"
              },
              // 地图块凸起
              // shadowBlur: 10,
              // shadowOffsetX: 10
              left: "5%",
              right: "5%",
              top: "5%",
              bottom: "5%"
            },
            emphasis: {
              areaColor: "#feb6aa", // hover效果
              color: "#fff"
            }
          }
        }
      };
      var myChart = vueEcharts.init(document.getElementById("distributionDiv"));
      myChart.setOption(distributionOptions);
      myChart.on("click", function (params) {
        console.log("获取当前市区：", params); //此处写点击事件内容
      }); //点击事件，此事件还可以用到柱状图等其他地图
      window.onresize = function () {
        myChart.resize();
      };
    }
  }
};
</script>

<style scoped>
#distributionDiv {
  width: 100%;
  height: 100%;
}
</style>
