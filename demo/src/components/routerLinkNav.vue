<template>
  <div>
      <div class="header">
    
          <router-link to="/index" class="title">豆瓣</router-link>
       
        <ul>
       <li class="movie"> <router-link to="/movies">电影</router-link></li>
        <li class="audio"> <router-link to="/audios">广播</router-link></li>
         <li class="book"><router-link to="/books">图书</router-link></li>
         <li class="group"><router-link to="/groups">小组</router-link></li>
        
        </ul>
        <router-link to="/others" class="other"><span ></span></router-link>
        
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
a{
    text-decoration: none;
}
.movie a{
    color: #2384e8;
}
.audio a{
    color: #9f7860;
}
.book a{
    color: #e4a813;
}
.group a{
    color: #2ab8cc;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  /* display: -ms-flexbox; */
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: .59rem;
  padding: 0 .18rem;
  background: #fff;
  border-bottom: 0.01rem solid #f3f3f3;
}

 .title {
    font-size:.3rem;
  margin: 0.67em 0;
  flex: 1;
  max-width:.55rem;
  max-height: .26rem;
  margin-right: .18rem;
  font-size: 0;
  line-height: .32rem;
  color: #00b600;
  background: url(../../static/img/logo.png) no-repeat;
  background-size: cover;
}
ul{
    display: flex;
    margin-left: .6rem;
}
ul>li{
    list-style: none;
    flex: 1;
    font-size: .16rem;
    margin-right: .12rem;
}
.other{
    font-size: 0;
    background: url(../../static/img/other.png) no-repeat;
    background-size: cover;
    width: .28rem;
    height:.22rem;
    margin-top: .04rem;
} 
</style>