<template>
  <div class="second">
    <div class="leftNav">
    <ul class="popup-title">
      <li v-for="(name,index) in tabTittle" :class ='{on:index===tabActive}' @click='tabCheck(index)'>{{name}}</li>
    </ul>
    <!--<ul class="popup-body">-->
      <!--<li v-bind:class="{showElement:tabActive === 0}">0</li>-->
      <!--<li v-bind:class="{showElement:tabActive === 1}">1</li>-->
      <!--<li v-bind:class="{showElement:tabActive === 2}">2</li>-->
      <!--&lt;!&ndash;两种写法&ndash;&gt;-->
      <!--<li :class="{showElement:tabActive === 3}">3</li>-->
      <!--<li :class="{showElement:tabActive === 4}">4</li>-->
      <!--<li :class="{showElement:tabActive === 5}">5</li>-->
    <!--</ul>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'second',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        tabTittle:['11','22','33','44','55','11'],
        tabActive:0
      }
    },
    methods:{
      tabCheck:function(index){
        this.tabActive= index;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .second{
    height: 100%;
  }

  .leftNav{
    height: 100%;
    width: 80%;
    /*margin-top: 20px;*/
    left: 20px;
    display: block;
    margin:0 auto;
  }
  .popup-title{
    padding: 0;
    margin: 0;
  }
  .popup-title>li{
    display: inline-block;
    margin: 0 10px;
    height: 200px;
    float: left;
    width: 18%;
  }
  .popup-body>li{
    width: 100%;
    display: none;
    height:100px;
  }
  .popup-body .showElement{
    display: block;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
