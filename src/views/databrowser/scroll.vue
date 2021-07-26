<template>
      <div class="marquee_box">
        <!-- <ul class="marquee_list" :class="{marquee_top:animate}"> -->
        <ul class="marquee_list">
          <!-- 加几个空的li使画面显得比较流畅 -->
          <li></li>
          <li></li>
          <li></li>
          <li></li><!-- low:item.state=='1';high:item.state=='2' -->
          <li v-for="(item, index) in marqueeList" :key="item.name" :class="{high:item.state=='2',low:item.state=='1'}">
            <span>今天{{index}}</span>
            <span class="red">{{item.name}}</span>
            <span>特价，仅需</span>
            <span class="red"> {{item.value}}</span>
            <span>元一斤，赶快抢购吧！！！</span>
          </li>
        </ul>
      </div>
</template>

<script>
  export default {
    props: ['marqueeList'],
    data() {
      return {
      }
    },
    mounted: function() {
      this.setTotalTime();
    },
    methods: {
      setTotalTime() {
        var object = document.querySelector('.marquee_list');
        object.style.animationDuration = this.marqueeList.length + "s"; //根据数组长度设置滚动时间
      }
    }
  }
</script>

<style>
.marquee {
  width: 100%;
  height: 1.7rem;
  align-items: center;
  color: #3A3A3A;
  /*background-color: #b3effe;*/
  display: flex;
  box-sizing: border-box;
}

.marquee_title {
  padding: 0 1px;
  /* height: 30px; */
  font-size: 14px;
  /* border-right: 1px solid #d8d8d8; */
  align-items: center;
}

.marquee_box {
  display: block;
  position: relative;
  width: 60%;
  height: 150px;
  overflow: hidden;
}

.marquee_list {
  display: block;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  /* height: 200%; */
  list-style: none;
  animation-name: move;
  /* 1.名称 */
  /* animation-duration: 15s; */
  /* 2.耗时 */
  animation-iteration-count: infinite;
  /* 3.设置无线滚动 */
  /* -o-animation-timing-function: linear; */
  /* 4.设置时间函数 */
  animation-timing-function: linear;
}

.marquee_top {
  margin-top: 0
}

.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 1px;
  text-align: left;
}

.marquee_list li span {
  padding: 0 2px;
}

.red {
  color: #FF0101;
}

.normal {
  background-color: #00FF00;
}

.low {
  background-color: rgba(0,255,0,.4);
}

.high {
  background-color: rgba(255,0,0,.5);;

}

/* 鼠标经过停止滚动 */
.marquee_list:hover {
  cursor: pointer;
  animation-play-state: paused;
}

/* 添加动画 */
@keyframes move {
  from {
    transform: translateY(0%);
  }

  to {
    /* transform: translateY(-320px); */
    transform: translateY(-100%);
  }
}
</style>
