<template>
  <div>
   
        <li>
        <a href="#" class="text">
          <div class="top">
            <div class="img">
              <img :src="aimgurl" alt />
            </div>
            <p>{{atitle}}</p>
            <span>{{amember}}人</span>
          </div>
          <div class="bottom">
              <span>{{atime}}</span>
              <span>{{acontent}}</span>
          </div></a>
        </li> 
      
      
  </div>
</template>
<script>
export default {
  components:{

  },
   props:["atitle","aimgurl","atime","amember","acontent"]
};
</script>
<style  scoped>
ul li {
  list-style: none;

} 
a{
    text-decoration: none;
}
li .text{
    display: block;
    padding: .15rem .18rem .18rem 0;
    
    border-bottom: .001rem solid #e8e8e8;
}

.group {
  padding: 0.34rem 0.18rem;
 
}

.top {
  display: flex;
  align-items: center;
}
.img {
  font-size: 0;
}
.top img {
  width: 0.48rem;
  height: 0.48rem;
}
.top p {
  font-size: 0.18rem;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  padding: 0 0.1rem;
}
.top span {
  display: block;
  color: #ccc;
  font-size: 0.15rem;
}
.bottom{
    margin-top: .1rem;
    font-size:.15rem;
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
}

</style>