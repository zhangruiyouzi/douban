<template>
   <div class="slider">
        <li v-for="(v,i) in slid" :key="i" :style="v.line?'display: block; border: none;padding: 0;':''">
                <a v-if="!v.line" :href="v.href" :style="{color:v.color}">{{v.title}}</a>
            </li>
</div>
    
</template>
<script>
export default {
      components:{},
props:{
    slid:{
        type:Array,
        required:true
    }
}
}
</script>
<style  scoped>
li{
    display: inline-block;
    margin: 0 0 .08rem .16rem;
    font-size: .16rem;
    border: .01rem solid rgb(255, 172, 45);
    border-radius: .04rem;
    vertical-align: middle;
}
li a{
    height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    letter-spacing: .016rem;
    overflow: auto;
    display: block;
    text-align: center;
    text-decoration: none;
}
.slider {
  overflow-x: auto;
  white-space: nowrap;
  padding: 0.08rem 0;
  font-size: 0
}
/* li:nth-child(5){
    display: block;
    padding: 0;
    border:none;
} */
</style>