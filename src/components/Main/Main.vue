<template>
  <div class="Main">
    <!--<starFlow></starFlow>-->
    <router-view></router-view>
    <div class="tabClass">
    <ul class="tab">
      <li><router-link to="/first"  @click.native="changeColor($event)">ABOUT</router-link></li>
      <li><router-link to="/second"  @click.native="changeColor($event)">PICTURES</router-link></li>
      <li><router-link to="/Hello"   @click.native="changeColor($event)"></router-link></li>
      <li><router-link to="/starFlow"   @click.native="changeColor($event)">CONTACT</router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
  import starFlow from '../Main/starFlow'
  import first from '../child/first'
  import second from '../child/second'
  import Hello from '../child/Hello'

  export default {
    name: 'Main',
    components:{
      starFlow
    },
    data:()=> {
      return {
        msg: 'Welcome to Your Vue.js App',
        show: true
      }
    },
    methods:{
//      changeColor:function(event){
//        event.target.parentElement.className = 'active';
//      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @color:#333333;

  .tabClass{
    width:20px;
    transition:width 1s;
    height: auto;
    position: absolute;
    top: 0;
    bottom:-1px;
    background: #FFCCCC;
  }
  @keyframes leftMove {
    from{width:100px;opacity: 0;}
    to{width:200px;opacity: 1;}
  }

  .tabClass:hover{
    width:120px;
  }
  .tabClass:hover ul li{
    width:120px;
    a{
      width:120px;
    }
  }
  .Main ul{
    display: block;
    top:50%;
    width:0;
    padding:0;
    position: absolute;
    list-style-type: none;
    padding-top: 30px;
    margin:0;
    color: @color;
    li{
      transition:width 1s;
      width:0;
      margin: 10px 0;
      text-align: left;
      border-bottom: 1px solid #FF99CC;
      a{
        text-decoration: none;
        transition:width 1s;
        display: inline-block;
        width: 0;
        overflow: hidden;
        padding-left: 20px;
      }
    }
    .active{
      background: #FFCC99;
      padding:8px 0 8px 0;
      font-size: 20px;
    }
  }

  h1, h2 {
    font-weight: normal;
  }
  a:link{
    color:@color;
  }


 a:active{
    color: green;
  }

//  #42b983
</style>
