
<template>
  <div id="app">
    <Head  v-if="this.$route.path != '/'" key="1"></Head>
    <router-view />
  </div>
</template>

<script>
import Head from "./layout/head"

export default {
  name: 'App',
  data: function() {
    return {
    }
  },
  components:{
    Head
  },
}
</script>

<style lang="scss">
.head{
  height: 180px;
  margin: 0;
  li{
    list-style: none;
    line-height: 30px;
    float: left;
    width:90px;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
