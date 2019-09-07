<template>
    <div>
        <router-link to="../pages/others">
        <div class="container">
                 <img :src="ziimgurl" alt="">
                <h3>{{zititle}}</h3>
                <p>{{zitext}}</p>
                
        </div>
        <div class="foot">
         <span>展览</span>
         </div>
        </router-link>
    </div>
</template>
<script>
export default {
    components:{

    },
    props:["ziimgurl","zititle","zitext"]
}
</script>
<style  scoped>
a{
    position: relative;
    display: block;
    padding: .25rem .18rem .25rem 0;
    margin-left: .18rem;
    text-decoration: none;
    box-sizing: border-box;
     font-size: 0;
    border-bottom:.001rem solid #ccc;
}
.container{
    overflow: hidden;
    margin-bottom: .1rem;
}
.container img{
    float: right;
    width: 25.6%;
    height:1.04rem;
    margin-left: .25rem;
}
h3{
    margin-top: 0;
    margin-bottom: .06rem;
    line-height: 1.41;
    text-align: justify;
    font-size: .17rem;
    font-weight: 500;
    color: #494949;
}
p{
    line-height: 1.5;
    text-align: justify;
    color: #aaa;
    font-size: .12rem;
    overflow: hidden;
}

span{
    font-size: .12rem;
    color: #ccc;

}
</style>