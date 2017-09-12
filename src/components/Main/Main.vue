<template>
  <div class="Main">
    <!--<starFlow></starFlow>-->
    <router-view></router-view>
    <div class="tabClass">
    <ul class="tab">
      <li><router-link to="/first">ABOUT</router-link></li>
      <li><router-link to="/second">PICTURES</router-link></li>
      <li><router-link to="/Hello"></router-link></li>
      <li><router-link to="/starFlow">CONTACT</router-link></li>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @color:#333333;
  .tabClass{
    width:20px;
    transition:width 1s;
    height: 100%;
    position: absolute;
    top: 0;
    background: #FFCCCC;
  }
  @keyframes leftMove {
    from{width:100px;opacity: 0;}
    to{width:200px;opacity: 1;}
  }

  .tabClass:hover {
    width:120px;
  }
  .Main ul{
    top:50%;
    display: none;
    padding:0;
    position: absolute;
    list-style-type: none;
    padding-top: 30px;
    margin:0;
    color: @color;
    li{
      width:120px;
      margin: 10px 0;
      text-align: left;
      a{
        width: 120px;
        padding-left: 10px;
      }
    }
  }
  h1, h2 {
    font-weight: normal;
  }
  a:link{
    color:@color;
  }
  a:focus li{
    color: red;
    background-color: red;
  }
  .tabClass:hover ul{
    display: block;
    animation: leftMove 1.5s;
  }
 a:active{
    color: green;
  }

//  #42b983
</style>
