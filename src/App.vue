<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style lang="less">
 html,body{
    margin:0;
    padding: 0;
    height:100%;
    width:100%;
    /*background-color: #99cccc;*/
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  /*background: -webkit-linear-gradient(top,#99cccc,#78BBA9);*/
  height: 100%;

}
</style>
