<template>
  <div>
    <div class="header-bar">
      <span class="close" @click="fun()">关闭</span>
      <input type="search" />
    </div>
    <div class="all">
      <other :other="arrone"></other>
      <other :other="arrtwo"></other>
      <other :other="arrthree"></other>
      <other :other="arrfour"></other>
    </div>
    <div class="footer">
      <ul>   
                <li><router-link to="/register">注册帐号</router-link></li>
                <li><router-link to="/login">登录豆瓣</router-link></li>
                <li><router-link  to="/movies">使用桌面版</router-link></li>
                <li><router-link to="/audios">使用豆瓣APP</router-link></li>
            </ul>
    </div>
  </div>
</template>
<script>
import other from "../components/other";
export default {
  components: {
    other
  },
  methods: {
        fun(){
            // 回退到上一个历史记录
            this.$router.go(-1);
        }
    },
  data() {
    return {
      arra: []
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/qita"
    }).then(ok => {
      console.log(ok.data.other);
      this.arra = ok.data.other;
      //   this.arrc=ok.data.goodBook;
    });
  },
  computed: {
    arrone() {
      var demoa = this.arra.filter((v, i) => {
        if (i <3) {
          return this.arra[i];
        }
      });
      return demoa;
    },
    arrtwo() {
      var demob = this.arra.filter((v, i) => {
        if (i >=3 && i <= 5) {
          return this.arra[i];
        }
      });
      return demob;
    },
    arrthree() {
      var democ = this.arra.filter((v, i) => {
        if (i > 5 && i <= 8) {
          return this.arra[i];
        }
      });
      return democ;
    },
    arrfour() {
      var demod = this.arra.filter((v, i) => {
        if (i > 8) {
          return this.arra[i];
        }
      });
      return demod;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.all {
  margin-top: 1rem;
}
.header-bar {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  font-size: 0;
  height: 0.48rem;
  padding: 0 0.18rem;
}
.close {
  color: #42bd56;
  font-size: 0.16rem;
  position: absolute;
  top: 0.18rem;
}
.header-bar > input {
  border: 0;
  background: url(../../static/img/search.png) no-repeat 50% #f3f3f3;
  background-size: 0.173rem;
  border-radius: 0.03rem;
  width: 3rem;
  height: 0.35rem;
  font-size: 0.14rem;
  position: absolute;
  top: 0.12rem;
  left: 0.6rem;
}
ul li{
    float: left; 
    list-style: none;
    width: 50%;
    padding: .03rem;
    box-sizing: border-box;
    font-size: .15rem;
}
li a{
   display: block;
    max-width: 100%;
    padding:.12rem 0;
    line-height: .3rem;
    text-align: center;
    color: #42bd56;
    border-radius: .02rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal; 
}
</style>