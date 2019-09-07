<template>
  <div>
    <router-link-nav></router-link-nav>

    <div class="container">
      <banner></banner>
      <user></user>
    </div>
    <div>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <audios></audios>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import routerLinkNav from "../components/routerLinkNav";
import foot from "../components/foot";
import audios from "../components/audios";
import user from "../components/user";
import banner from "../components/banner";
export default {
  components: {
    routerLinkNav,
    foot,
    user,
    banner,
    audios
  }
};
</script>
<style scoped>
.container {
  margin-top: 0.59rem;
}
</style>