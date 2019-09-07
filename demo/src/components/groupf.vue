<template>
    <div>
         <div class="group">
      <ul class="content">
    <div class="header">
        <h2>{{biao}}</h2>
      </div>
        <groupz
          v-for="(v,i) in sfuprops"
          :key="i"
          :atitle="v.title"
          :aimgurl="v.images.small"
          :atime="v.group_topic.time"
          :amember="v.group_member"
          :acontent="v.group_topic.title"
        ></groupz>
        </ul>
    </div>
      <div class="more"><a href="#">更多相关小组</a></div>
    </div>
</template>
<script>
import groupz from "../components/groupz";
export default {
    components:{
        groupz
    },
    data() {
        return {
        }
    },
     props:{
        sfuprops:{
            type:Array,
            required:true
        },
        biao:{
          type:String,
          required:true
        }
    }
}
</script>
<style  scoped>
.header h2 {
  font-size: 0.168rem;
  font-weight: 400;
  color: #111;
  margin-bottom: .2rem;
}
.group {
  padding: 0.34rem 0.18rem;
 
}
.more a{
    display: block;
    margin-bottom: .3rem;
    padding: .15rem 0;
    font-size: .16rem;
    line-height: .18rem;
    margin-left:1.3rem;
    color: #42bd56;
    text-decoration: none;
}
</style>