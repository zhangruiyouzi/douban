<template>
  <div class="contain">
    <div class="slider" v-for="(v,i) in slide" :key="i">
      <img :src="v.images.large" alt />
      <!-- <img src="../../static/img/2.png" alt /> -->
      <br />
      <span class="title">{{v.title}}</span>
      <!-- <span class="title">无问西东</span> -->
      <br>
      <div class="rate">
      <el-rate v-model="arrstar[i]" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
   data() {
      return {
        arrstar:[3,2.6,5,4.1,3.4,1.6,4.9,4.4,3.8,2]
      }
    },
  props: {
    slide: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.contain {
  display: flex;
  padding-left: 0.2rem;
  overflow: auto;
}
.slider {
  font-size: 0;
  /* text-align: center */
  margin-right: 0.1rem;
}
img {
  width: 1.4rem;
  height: 2rem;
}
.title {
  display: block;
  font-size: 0.14rem;
  height: 0.6srem;
  line-height: 0.2rem;  
  text-align: center;
  margin-top: .2rem;
}

</style>