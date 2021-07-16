<template>
  <header>
    <h1 class="title">榆林市供热有限责任公司</h1>
    <div class="showTime">{{time}}</div>
  </header>
</template>

<script>
export default {
  name: "header",
  data(){
    return {
      time:""
    }
  },
  methods:{
    realTime() {
      let t = setTimeout(time, 1000); //開始运行
        let that = this;
        function time() {
          clearTimeout(t); //清除定时器
          let dt = new Date();
          var y = dt.getFullYear();
          var mt = dt.getMonth() + 1;
          var day = dt.getDate();
          var h = dt.getHours(); //获取时
          var m = dt.getMinutes(); //获取分
          var s = dt.getSeconds(); //获取秒
          that.time = "当前时间：" + y + "年" +
            (mt < 10 ? "0" + mt + "月" : mt + "月") +
            (day < 10 ? "0" + day + "日-" : day + "日-") +
            (h < 10 ? "0" + h + "时" : h + "时") +
            (m < 10 ? "0" + m + "分" : m + "分") +
            (s < 10 ? "0" + s + "秒" : s + "秒");
          t = setTimeout(time, 1000); //设定定时器，循环运行
      }
    }
  },
  created(){
    this.realTime();
  }
}
</script>

<style scoped>
@import "../../assets/css/projheader.css";
</style>
