<template>
  <div>
    <router-link-nav></router-link-nav>

    <div class="container">
      <user></user>
      <div class="section">
        <groupf :sfuprops="arra" :biao="arrd[0].title"></groupf>
        <groupf :sfuprops="arrb" :biao="arrd[1].title"></groupf>
        <groupf :sfuprops="arrc" :biao="arrd[2].title"></groupf>
      </div>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import routerLinkNav from "../components/routerLinkNav";
import user from "../components/user";
import foot from "../components/foot";
import groupf from "../components/groupf";
export default {
  components: {
    routerLinkNav,
    user,
    foot,
    groupf
  },
 
  data() {
    return {
      arra: [],
      arrb: [],
      arrc: [],
      arrd:[]
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/xiaozu"
    }).then(ok => {
      console.log(ok.data);
      this.arra = ok.data.xiaozua;
      this.arrb = ok.data.xiaozub;
      this.arrc = ok.data.xiaozuc;
      this.arrd=ok.data.titles;

      
    });

  }
};
</script>
<style scoped>
.container {
  margin-top: 0.59rem;
}
</style>