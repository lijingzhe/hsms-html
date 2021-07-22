<template>
  <div class="map-content-box">
    <div id="baidu-map" style="width: 100%;height: 3.85rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'baiduMapTest',
  data() {
    //这里存放数据
    return {}
  },
  created() {},
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      _this.initMap();
    })
  },
  methods: {
    changeMapStyle(map,style){
      var mapStyle ={
        features: ["road","building","water","land"],//隐藏地图上的"poi",
        style : style,
      };
      map.setMapStyle(mapStyle);
    },
    initMap(){
      // 创建地图实例  个性化地图遵照官网步骤
      const map = new BMap.Map("baidu-map");

      this.changeMapStyle(map,'bluish')

      // 创建点坐标
      const point = new BMap.Point(109.73473, 38.27843);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 15);
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      // JSAPI商用授权挂件默认开启，关闭需要修改调用JSAPI的代码。方式有两种
      map.disableBizAuthLogo(); //关闭
      // map.enableBizAuthLogo(); //开启

      // 控件类型（百度地图自带的） 自定义控件遵照官网平时比较少用到
      // type: BMAP_NAVIGATION_CONTROL_SMALL 平移缩放控件的类型 const opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}
      // const opts = {anchor: BMAP_ANCHOR_TOP_RIGHT, offset: new BMap.Size(100, 10)}; // 偏移量
      // map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT})); // PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
      // map.addControl(new BMap.ScaleControl()); // 默认位于地图左下方，显示地图的比例关系
      // map.addControl(new BMap.OverviewMapControl()); // 默认位于地图右下方，是一个可折叠的缩略地图
      // map.addControl(new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT})); // 地图类型
      // map.addControl(new BMap.CopyrightControl(opts)); // 默认位于地图左下方
      // map.addControl(new BMap.GeolocationControl(opts)); // 定位 针对移动端开发，默认位于地图左下方
      // map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

      // 标注（自定义标注图标 默认是类似尖头圆形红点---可以放置自己图片） 默认情况下标注不支持拖拽
      const marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.addEventListener("click", function(){
        alert("您点击了点标注");
      })
      // 支持拖拽
      marker.enableDragging();
      marker.addEventListener("dragend", function(e){
        alert("当前位置：" + e.point.lng + ", " + e.point.lat);
      })
      // 标注折线 自定义这些线段的颜色、粗细和透明度。颜色可以是十六进制数字形式（比如：#ff0000）或者是颜色关键字（比如：red）
      const polyline = new BMap.Polyline([
          new BMap.Point(116.399, 39.910),
          new BMap.Point(116.405, 39.920)
        ],
        {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
      );
      map.addOverlay(polyline);

      // 提供的信息窗口  自定义信息窗口类 BMapLib.InfoBox
      const winOpts = {
        width : 100,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title : "首站"  // 信息窗口标题

      }
      // World是信息窗口内容可以用 const htmlContent = `html模板替换掉或者动态自定义内容`
      const infoWindow = new BMap.InfoWindow("热量：3329.2kwh","温度：44.6℃", winOpts);  // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口

      // 路况图层 添加和移除图层 地图可以包含一个或多个图层，每个图层在每个级别都是由若干张图块组成的
      const ctrl = new BMapLib.TrafficControl({
        showPanel: false //是否显示路况提示面板
      });
      map.addControl(ctrl);
      ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);

      const traffic = new BMap.TrafficLayer(); // 创建交通流量图层实例
      map.addTileLayer(traffic);  // 将图层添加到地图上
      map.removeTileLayer(traffic); // 将图层移除

      // 事件 每个API对象提供了removeEventListener用来移除事件监听函数
      map.addEventListener("click", function(e){
        alert("点击事件，你点击了一下地图");
        console.log(e)
      })
      map.addEventListener("dragend", function(){
        const center = map.getCenter();
        alert("地图中心点变更为：" + center.lng + ", " + center.lat);
      })
      map.addEventListener("zoomend", function(){
        alert("地图缩放至：" + this.getZoom() + "级");
      })

      // 检索POI方法 城市检索、圆形区域检索、矩形区域检索 配置搜索请看官方文档
      const local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
      });
      local.search("天安门"); // 关键字“天安门”检索POI
      // 圆形区域检索
      const local2 = new BMap.LocalSearch(map,{ renderOptions:{map: map, autoViewport: true}});
      local2.searchNearby("小吃", "前门"); // 根据中心点、半径与检索词发起周边检索。当keyword为数组时将同时执行多关键字的检索，最多支持10个关键字
      // 矩形区域检索
      const local3 = new BMap.LocalSearch(map, { renderOptions:{map: map}});
      local3.searchInBounds("银行", map.getBounds());

      // 注意：在调用Geocoder.getPoint()方法时您需要提供地址解析所在的城市（本例为“北京市”）。
      // 创建地址解析器实例 逆地址解析服务
      // 将地址解析结果显示在地图上，并调整地图视野
      const myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint("北京市海淀区上地10街10号", function(point){
        if (point) {
          map.centerAndZoom(point, 16);
          map.addOverlay(new BMap.Marker(point));
        }
      },"北京市")
      // 驾车路线规划 DrivingRoute 公交路线规划 TransitRoute 步行路线规划 WalkingRoute 骑行线路规划 RidingRoute
      const driving = new BMap.DrivingRoute(map, {
        renderOptions: {
          map: map,
          autoViewport: true
        }
      })
      const start = new BMap.Point(116.310791, 40.003419);
      const end = new BMap.Point(116.486419, 39.877282);
      driving.search(start, end);

      // 全景图
      const Panorama = new BMap.PanoramaControl();
      Panorama.setOffset(new BMap.Size(200, 20));
      map.addControl(Panorama);
      // 自定义绘制
      const styleOptions = {
        strokeColor:"red",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
      }
      //实例化鼠标绘制工具 画多边形时候画完双击即可停止绘画  更多参考这里：http://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary
      const drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
          anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
          offset: new BMap.Size(400, 20), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
      })
    }
  },
};
</script>
<style  scoped>
</style>

<!--地图风格-->
<!--<select id="stylelist" onchange="changeMapStyle(this.value)">-->
<!--<option value="normal">默认地图样式</option> //系统默认-->
<!--<option value="light">清新蓝风格</option> //不需要第三方库-->
<!--<option value="dark">黑夜风格</option> //不需要第三方库-->
<!--<option value="redalert">红色警戒风格</option>-->
<!--<option value="googlelite">精简风格</option>-->
<!--<option value="grassgreen">自然绿风格</option>-->
<!--<option value="midnight">午夜蓝风格</option>-->
<!--<option value="pink">浪漫粉风格</option>-->
<!--<option value="darkgreen">青春绿风格</option>-->
<!--<option value="bluish">清新蓝绿风格</option>-->
<!--<option value="grayscale">高端灰风格</option>-->
<!--<option value="hardedge">强边界风格</option>-->
<!--</select>-->
