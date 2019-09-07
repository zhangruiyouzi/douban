<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
    max-width: 41.2rem;
    margin: 0 auto;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    font-size: 26.67vw;
    /* font-size: 62.25%; */
}

</style>
