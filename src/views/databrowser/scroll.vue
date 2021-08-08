<template>
  <div class="marquee_box">
      <ul class="marquee_list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li v-for="item in marqueeList" :key="item.name" :class="{high:item.state=='2',low:item.state=='1'}">
          <span>{{item.name}}&nbsp;&nbsp;流量{{item.流量}}&nbsp;&nbsp;压力{{item.压力}}&nbsp;&nbsp;供温{{item.供温}}&nbsp;&nbsp;回温{{item.回温}} </span>
        </li>
      </ul>
  </div>
</template>





<style>
  .marquee_list {
    display: block;
    width: 100%;
    margin: 0;
/*    position: absolute;
    top: 0;
    left: 0; */
    padding: 0;
    list-style: none;
    animation-name: move;
    /* 1.名称 */
    /* animation-duration: 15s; */
    /* 时间参数已经用js设置 */
    /* 2.耗时 */
    animation-iteration-count: infinite;
    /* 3.设置无线滚动 */
    -o-animation-timing-function: linear;
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
    padding-left: 20px;
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
    /* color: #000000; */
    background-color: rgba(0, 255, 0, .4);
  }

  .high {
    /* color: #000000; */
    background-color: rgba(255, 0, 0, .5);
    ;

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

<script>
  // import animate from '@/node_modules/animate.css/animate.css'
  // Vue.use(animate);

  export default {
    props: ['marqueeList'],
    data() {
      return {}
    },
    mounted: function() {
      console.log(marqueeList);
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
