<template>
    <div>
        <div class="banner">
        <span class="openh">打开App, 浏览更多</span>
        <a class="down" href="#">极速下载</a>
        <a class="open" href="#">打开</a>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 0.8rem;
  background: url("../../static/img/banner.jpg") no-repeat;
  background-size: cover;
}
.openh {
  position: absolute;
  font-size: 0.14rem;
  font-weight: 400;
  left: 0.4rem;
  line-height: 0.8rem;
  color: #2ca532;
}
.banner a {
  position: absolute;
  display: inline-block;
  width: auto;
  padding: 0 0.14rem;
  font-size: 0.13rem;
  font-weight: 700;
  line-height: 2;
  border: 0.01rem solid #42bd56;
  border-radius: 0.03rem;
  text-decoration: none;
  top: 0.26rem;
}
.down {
  left: 2.21rem;
  color: #fff;
  background: #42bd56;
}
.open {
  left: 3.1rem;
  color: #42bd56;
}
</style>