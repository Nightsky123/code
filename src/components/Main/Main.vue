<template>
  <div class="Main">
    <div id = 'headnav' v-show="headShow" class="bg">
      <div class="list">
        <input type="text" name="title" v-model:value="password" v-on:keyup.enter='check(password)' placeholder="请输入密码">
        <button type="button" @click="check(password)">确定</button>
      </div>
      <div class="bg-wall">
        <ul>
          <li><span>其实，我来自火星</span></li>
          <li><span>其实，我来自火星</span></li>
          <li><span>其实，我来自火星</span></li>
          <li><span>其实，我来自火星</span></li>
        </ul>
      </div>
      <div class="side-wall">
        <ul class="perspective">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <div class="tabClass" v-show="tabShow">
    <ul class="tab">
      <li><router-link to="/aboutMe"  @click.native="changeColor($event)">{{allWord.showTheWord.tab1}}</router-link></li>
      <li><router-link to="/myTrial"   @click.native="changeColor($event)">{{allWord.showTheWord.tab2}}</router-link></li>
      <li><router-link to="/leaveMessage"   @click.native="changeColor($event)">{{allWord.showTheWord.tab4}}</router-link></li>
      <li><router-link to="/contactMe"   @click.native="changeColor($event)">{{allWord.showTheWord.tab5}}</router-link></li>
      <li><router-link to="/" @click.native="changeColor($event)">{{allWord.showTheWord.tab6}}</router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
  import global from '../Main/global'
  import contactMe from './contactMe'
  import aboutMe from '../child/aboutMe'
  import second from '../child/second'
  import Hello from '../child/leaveMessage'
  import myTrial from '../child/myTrial'

  import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'Main',
    components:{
//      starFlow
    },
    data:()=> {
      return {
        allWord:global.allWord,
        msg: 'Welcome to Your Vue.js App',
        show: true,
        headShow:true,
        password: '', //密码
        loginOrNot:'',
        tabShow:false

      }
    },
    computed: {
      ...mapState([
        'login'
      ])
    },
    methods:{
      ...mapMutations([
        'checkPassword'
      ]),
      check(password) {
        this.checkPassword({
          password:password
        });
        //状态是true则可登陆
        if(this.$store.state.login){
          this.loginOrNot = true;
          //隐藏登录页
          this.headShow = false;
          //登陆后显示tab导航
          this.tabShow = true;
          //页面至我的页面
          this.$router.replace('/aboutMe')
        }else{
          this.loginOrNot = false;
          this.headShow = true;
        }
      },
      selectVal: function(ele) {
        /*中英文切换*/
        this.allWord.selected = ele.target.selectedOptions[0].value;
        this.allWord.selected === '简体中文'?this.allWord.showTheWord = this.allWord.Cn:this.allWord.showTheWord = this.allWord.En;
      },
      //隐藏首页
      changeColor:function($event){
          if($event.target.text ==='锁屏'){
            this.headShow = true;
            this.tabShow = false;
            this.password = '';
          }else{
            this.headShow = false;
          }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @leftTabColor:#fff;
  @leftTabBackgroundColor:#25adf3;
  @color:#333333;
  .Main{
    height: 100%;
    overflow: auto;
  }
   .list{
     margin: 0 auto;
     width: 100%;
     position: absolute;
     top:calc(100vh - 30px);

     input{
       width: 350px;
       height: 35px;
       border-radius: 5px;
       border: 0;
       outline: none;
     }
     button{
       width: 50px;
       height: 35px;
       border-radius: 5px;
       border: 0;
       background: #fff;
       margin: -13px;
       line-height: 35px;
     }
   }
  .bg {
    height: 100vh;
    overflow: hidden;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 4fr 1fr;
    .bg-wall {
      /*background: linear-gradient(to right, #525252, #CACCCB);*/
      background: #99cccc;
    }
    .side-wall {
      background: #99cccc;
      /*background: radial-gradient(at 0% 50%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0) 90%) left no-repeat, linear-gradient(to right, #CACCCB, #BFC1C0);*/
      perspective: 1000px;
      z-index: 20;
    }
    div[class$="-wall"] {
      display: inherit;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .perspective {
    transform: rotateY(-75deg) scaleX(4);
    transform-origin: left;
    mix-blend-mode: color-burn;
    z-index: 10;
  }
  .bg li {
    width: 100%;
    height: 50px;
    position: relative;
    transform-origin: right;
    transform: scaleX(0);
    animation: paint .9s .3s linear both;
    will-change: transform;
  }

  .bg li:nth-child(1) {
    background: #121619;
  }
  .bg li:nth-child(2) {
    background: #F8EB4A;
    animation-delay: .4s;
  }
  .bg li:nth-child(3) {
    background: #E52588;
    animation-delay: .5s;
  }
  .bg li:nth-child(4) {
    background: #1D9ED7;
    animation-delay: .6s;
  }

  .bg-wall ul {
    align-items: flex-end;
  }
  .bg-wall li span:after {
    content: '';
    position: absolute;
    left: 1px;
    top: 0;
    background: inherit;
    height: 100%;
    width: 50px;
    transform: translateX(-100%);
    clip-path: polygon(100% 0, 100% 100%, 98% 100%, 60% 50%, 98% 0);
  }
  .bg-wall li:nth-child(1) {
    width: 50%;
    z-index: 5;
    animation-delay: 1.2s;
  }
  .bg-wall li:nth-child(2) {
    width: calc(50% + 3em);
    z-index: 4;
    animation-delay: 1.3s;
  }
  .bg-wall li:nth-child(3) {
    width: calc(50% + 6em);
    z-index: 3;
    animation-delay: 1.4s;
  }
  .bg-wall li:nth-child(4) {
    width: calc(50% + 3em);
    z-index: 2;
    animation-delay: 1.5s;
  }


  .bg-wall span {
    line-height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background: inherit;
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  .bg-wall li:before {
    content: '';
    top: 0;
    right: 0;
    position: absolute;
    width: 102%;
    height: 100%;
    transform-origin: right bottom;
    background: rgba(0,0,0,.4);
    filter: blur(8px);
    transform: rotate(-2.5deg);
    z-index: 1;
  }


  @keyframes paint {
    to {
      transform: none;
    }
  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  a,
  a:visited,
  a:focus,
  a:active,
  a:link {
    outline: 0;
  }

  a {
    transition: .2s ease-in-out;
  }

  h1, h2, h3, h4 {
    margin: .3em 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  select{
    position: absolute;
    margin: 10px 20px;
    border-radius: 5px;
    height: 28px;
    right: 20px;
    border: 1px solid #99cccc;
    z-index: 28;
  }
  .tabClass{
    width:20px;
    transition:width 1s;
    height: 100%;
    position: absolute;
    top: 0;
    bottom:0;
    background: @leftTabBackgroundColor;
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
  .Main .tab{
    display: block;
    top:40%;
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
      background: transparent !important;
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
      background: @leftTabColor;
      padding:8px 0 8px 0;
      font-size: 20px;
    }
  }

  h1, h2 {
    font-weight: normal;
  }
  a:link{
    color:@leftTabColor;
  }

  a:active{
    color: @leftTabColor;
  }


</style>
