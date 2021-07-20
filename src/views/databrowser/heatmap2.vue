<template>
  <div>
    <button class="btn" @click="loadHeatmap">热力图</button>
  </div>
</template>
<script>
import h337 from 'heatmap.js'

export default {
  name: 'Heatmap',
  methods: {
    loadHeatmap() {
      var viewer = window.Viewer
      // 第一个热力图
      var coordinate1 = [-109.0, 10.0, -80.0, 35.0]
      var heatMap1 = this.createHeatMap(this.getData(1000).max, this.getData2(1000).data)
      console.log(heatMap1)
      this.createRectangle(viewer, coordinate1, heatMap1)
    },
    // 动态数据 [{x: -97.6433525165054, y: 45.61443064377248, value: 11.409122369106317}]
    getData(length) {
      var data = []
      for (var i = 0; i < length; i++) {
        var x = Math.random() * (-109 + 80) - 80
        var y = Math.random() * (50 - 30) + 30
        var value = Math.random() * 100
        data.push({ x: x, y: y, value: value })
      }
      return data
    },
    createHeatMap(max, data) {
      // 创建元素
      var heatDoc = document.createElement('div')
      heatDoc.setAttribute('style', 'width:1000px;height:1000px;margin: 0px;display: none;')
      document.body.appendChild(heatDoc)
      // 创建热力图对象
      var heatmap = h337.create({
        container: heatDoc,
        radius: 20,
        maxOpacity: 0.5,
        minOpacity: 0,
        blur: 0.75,
        gradient: {
          '0.9': 'red',
          '0.8': 'orange',
          '0.7': 'yellow',
          '0.5': 'blue',
          '0.3': 'green'
        }
      })
      // 添加数据
      heatmap.setData({
        max: max,
        data: data
      })
      return heatmap
    },
    // 创建正方形 绑定热力图
    createRectangle(viewer, coordinate, heatMap) {
      viewer.entities.add({
        name: 'Rotating rectangle with rotating texture coordinate',
        show: true,
        rectangle: {
          coordinates: Cesium.Rectangle.fromDegrees(coordinate[0], coordinate[1], coordinate[2], coordinate[3]),
          material: heatMap._renderer.canvas // 核心语句，填充热力图
        }
      })
    },
    // 生成len个随机数据
    getData2(len) {
      //构建一些随机数据点
      var points = []
      var max = 0
      var width = 1000
      var height = 1000
      while (len--) {
        var val = Math.floor(Math.random() * 1000)
        max = Math.max(max, val)
        var point = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          value: val
        }
        points.push(point)
      }
      return { max: max, data: points }
    }
  }
}
</script>
<style scoped>
.btn {
  width: 80px;
  height: 30px;
  position: absolute;
  top: 150px;
  right: 280px;
  z-index: 999;
  border: 1px solid #66e4f2;
  background: rgba(102, 228, 242, 0.8);
}
</style>
