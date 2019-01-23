<template>
  <div id="app">
    <left></left>
    <router-view/>
  </div>
</template>

<script>
import left from '@/components/common/left'
export default {
  name: 'App',
  components:{
    left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
