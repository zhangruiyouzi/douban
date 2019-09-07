<template>
  <div>
    <router-link-nav></router-link-nav>
    <div class="container">
          <div class="top"> 
            <h2 class="htit">影院热映</h2>
            <a class="more" href="#">更多</a>
        </div>
        <sliderp :slide="arrone"></sliderp>
       
       
         <div class="top"> 
            <h2 class="htit">免费在线观影</h2>
            <a class="more" href="#">更多</a>
        </div>
         <sliderp :slide="arrtwo"></sliderp>
         <div class="top"> 
            <h2 class="htit">新片速递</h2>
            <a class="more" href="#">更多</a>
        </div>
         <sliderp :slide="arrthree"></sliderp>
         <div class="top"> 
            <h2 class="htit">发现好电影</h2>
            <a class="more" href="#">更多</a>
        </div>
      <div class="com">
        <ul >
          <mslider :slid="arrc">  </mslider>
        </ul>
      </div>
      <div class="footer">
        <h2 class="type">分类浏览</h2>
        <ul>
          <mfoot v-for="(v,i) in arrb" :key="i" :mname="v.name"></mfoot>
        </ul>
      </div>
      
      <foot></foot>
    </div>
  </div>
</template>
<script>
import routerLinkNav from "../components/routerLinkNav";
import mfoot from "../components/mfoot";
import mslider from "../components/mslider";
import sliderp from "../components/sliderp";
import foot from "../components/foot";
export default {
  components: {
    routerLinkNav,
    mfoot,
    mslider,
    foot,
    sliderp
  },
  data() {
    return {
      arra:[],
      arrb: [],
      arrc:[]
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/dian"
    }).then(ok => {
      console.log(ok.data.movies);
      this.arra= ok.data.movies;
      this.arrb= ok.data.movie;
      this.arrc=ok.data.faxianhaodianying;
    });
  },
  computed: {
        arrone(){
            var demoa=this.arra.filter((v,i)=>{
                if(i<=9){
                    return this.arra[i]
                }
            });
            return demoa;
        },
        arrtwo(){
          var demob=this.arra.filter((v,i)=>{
                if(i>9&&i<=18){
                    return this.arra[i]
                }
            });
            return demob;
        },
         arrthree(){
          var democ=this.arra.filter((v,i)=>{
                if(i>18){
                    return this.arra[i]
                }
            });
            return democ;
        }
    },
};
</script>
<style scoped>
.container {
  margin-top: 0.59rem;
}
.type {
  height: 0.26rem;
  line-height: 0.26rem;
  padding: 0 0.16rem;
  display: inline-block;
  font-size: 0.168rem;
  font-weight: 400;
  color: #111;
}
ul {
  margin: 0.16rem 0.16rem 0 0.16rem;
  overflow: hidden;
  /* width: 100%; */
}

.com {
  box-sizing: content-box;
}
.top{
    height:.26rem;
    line-height: .26rem;
    padding: 0.16rem;
}
.htit{
    font-size: .168rem;
    font-weight: 400;
    color: #111;
    float: left;
}
.more{
    color: #42bd56;
    font-size: .144rem;
    float:right;
    text-decoration: none;
}
</style>