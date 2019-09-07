<template>
    <div>
        <div class="userbar">
        <img class="uimg" src="../../static/img/user.jpg" alt />
        <router-link to="/login"><span class="utext">请先登录</span></router-link>
        <span class="pencil"></span>
        <span class="photo"></span>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
/* 用户登录 */
.userbar {
  position: relative;
  /* overflow: hidden; */
  padding: 0.3rem 0.18rem 0.2rem 0.2rem;
  height: 0.4rem;
  border-bottom: 0.01rem solid #e8e8e8;
  font-size: 0;
}
.uimg {
  position: absolute;
  border-radius: 50%;
  width: 0.48rem;
  height: 0.48rem;
}
.utext {
  position: absolute;
  left: 0.7rem;
  padding-left: 0.1rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  color: #aaa;
}
.pencil {
  position: absolute;
  left: 2.4rem;
  display: block;
  width: 0.17rem;
  height: 0.17rem;
  padding: 0.08rem;
  margin-left: 0.08rem;
  background: url("../../static/img/pencil.svg") no-repeat;
  background-size: cover;
}
.photo {
  position: absolute;
  left: 3rem;
  display: block;
  width: 0.17rem;
  height: 0.17rem;
  padding: 0.08rem;
  margin-left: 0.08rem;
  background: url("../../static/img/photo.svg") no-repeat;
  background-size: cover;
}
</style>