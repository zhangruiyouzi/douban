<template>
  <div>
    <router-link-nav></router-link-nav>
    <div class="container">
       <div class="top"> 
            <h2 class="htit">最受关注图书｜虚构类</h2>
            <a class="more" href="#">更多</a>
        </div>
          <sliderp :slide="arrone"></sliderp>
         <div class="top"> 
            <h2 class="htit">最受关注图书｜非虚构类</h2>
            <a class="more" href="#">更多</a>
        </div>
         <sliderp :slide="arrtwo"></sliderp>
         <div class="top"> 
            <h2 class="htit">豆瓣纸书</h2>
            <a class="more" href="#">更多</a>
        </div>
        <div class="price">
            <img src="../../static/img/price.jpg" alt="">
            <div class="content-r">
              <span class="zao">造物</span>
              <span class="money">￥68</span>
              <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
            </div>
        </div>
         <sliderp :slide="arrthree"></sliderp>
        <div class="top"> 
            <h2 class="htit">发现好书</h2>
            <a class="more" href="#">更多</a>
        </div>
      <div class="com">
        <ul >
          <mslider :slid="arrc">
            
            
          </mslider>
        </ul>
      </div>
      <div class="footer">
        <h2 class="type">分类浏览</h2>
        <ul>
          <mfoot v-for="(v,i) in arr" :key="i" :mname="v.name"></mfoot>
        </ul>
      </div>
      
      <foot></foot>
    </div>
  </div>
</template>
<script>
import routerLinkNav from "../components/routerLinkNav";
// import movie from "../components/movie";
import mfoot from "../components/mfoot";
import mslider from "../components/mslider";
import foot from "../components/foot";
import sliderp from "../components/sliderp";
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
      arr: [],
      arrc:[],
      arra:[]
    };
  },
  created() {
    
    this.axios({
      method: "get",
      url: "/dian"
    }).then(ok => {
      // console.log(ok.data.movies);
      this.arr = ok.data.movie;
       
    });
    this.axios({
      method: "get",
      url: "/book"
    }).then(ok => {
      console.log(ok.data.books);
      // this.arr = ok.data.movie;
      this.arrc=ok.data.goodBook;
      this.arra= ok.data.books;
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
.price{
 overflow: hidden;
 margin-bottom: .3rem;
}
.price img{
  float: left;
  display: block;
    width: 1.2rem;
    margin-left: .15rem;
}
.content-r{
  float: left;
  font-size: 0;
  width: 1.8rem;
  margin-left:.2rem;
  margin-top: .2rem;
}
.zao{
  font-size: .2rem;
    color: #494949;
    max-width: 100%;
    line-height: .22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.money{
  color: #e76648;
    font-size: .16rem;
    line-height: .22rem;
    margin-left: 1rem;
    
}
.content-r p{
  margin-top: .15rem;
  font-size: .13rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9b9b9b;
}
</style>