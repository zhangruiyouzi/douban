<template>
    <div>
         <ul class="content">
        <li class="every" v-for="(v,i) in other" :key="i">
            <a href="">
                <span :style="{color:v.color}">{{v.title}}</span>
                <span>{{v.content}}</span>
            </a>
        </li>
       
    </ul>
    </div>
</template>
<script>
export default {
    props:{
        other:{
            type:Array,
            required:true
        }
    }
}
</script>
<style  scoped>
a{
    text-decoration: none;
}
.every span:first-child{
    display: block;
    font-weight: 400;
    font-size: .24rem;
    line-height: .28rem;
}
.content{
    /* padding: .25rem; */
    display: flex;
    margin-bottom: .4rem;
   
    

}

.every{
    display: inline-block;
   flex:1;
   text-align: center;
}
.every span:last-child{
    display: block;
    color: #999;
    height: .17rem;
    font-size: .12rem;
    letter-spacing: .01rem;
}
</style>