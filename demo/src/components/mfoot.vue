<template>

      <li><a href="#"><p>{{mname}}</p> <span class="jiantou"> </span></a></li>
    
</template>
<script>
export default {
    components:{},
   props:["mname"]
}
</script>
<style scoped>
li{
    width: 50%;
    float: left;
    font-size: 0;
    box-sizing: border-box;
    border-top: .01rem solid #eee;
    border-right: .01rem solid #eee;
    height: .42rem;
    line-height: .42rem;
    padding-right:.18rem;
}
li a{
    font-size: .16rem;
    height: .42rem;
    color: #42bd56;
    text-decoration: none;
}
li a p{
    float: left;
    margin-left: .12rem;
}
.jiantou{
    float: right;
    background-image: url("../../static/img/jiantou.png");
    width: .2rem;
    height: .2rem;
    margin-top: .01rem;
    margin-top: .1rem;
}
</style>