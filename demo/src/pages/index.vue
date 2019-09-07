<template>
    <div>
        <!-- 3.使用 -->
        <router-link-nav></router-link-nav>
        <div class="container">
            <ul>
                <li><router-link  to="/movies">影院热映</router-link></li>
                <li><router-link to="/audios">欧美新碟榜</router-link></li>
                <li><router-link to="/register">注册帐号</router-link></li>
                <li><router-link to="/login">登录豆瓣</router-link></li>
            </ul>
        </div>
        <div class="loading">
            <img src="../../static/img/loading.gif" alt="" v-if="arr.length<=0">
      
        <div  v-else class="list">
            <product v-for="(v,i) in arr" :key="i" :zititle="v.title" :ziimgurl="v.image" :zitext="v.address"></product>
            
        </div>
          </div>
    </div>
</template>
<script>
// 1.引用
import routerLinkNav from '../components/routerLinkNav'
import product from '../components/product'
export default {
    // 2.调用
    components:{
        routerLinkNav,
        product
       
    },
    data() {
        return {
            arr:[]
        }
    },created() {
         this.axios({
            method:"get",
            url:"/shou"
        }).then((ok)=>{
            console.log(ok.data.shouye);
            this.arr=ok.data.shouye;
        })
    },
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.container{
    margin-top:.59rem; 
}
.loading{
    text-align: center;
}
.container>ul {
    overflow: hidden;
    margin: .1rem 0 0;
    padding: .3rem .2rem;
    
}
li a{
   display: block;
    max-width: 100%;
    padding:.12rem 0;
    line-height: .3rem;
    text-align: center;
    background-color: #f6f6f6;
    color: #494949;
    border-radius: .02rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal; 
}
ul li{
    float: left; 
    list-style: none;
    width: 50%;
    padding: .03rem;
    box-sizing: border-box;
    font-size: .15rem;
}
</style>