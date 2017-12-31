<template>
  <div class="first" v-show="show">
    <div class="firstImg">
      <div class="firstImgChild">
        <ul>
          <li v-for="item in headPic"><img v-lazy="item.src" /></li>
        </ul>
      </div>
    </div>
    <div class="personalInfo">
      <h3>{{allWord.showTheWord.myself}}</h3>
    </div>
    <div class="workPic">
      <div class="allThePicContainer">
      <div class="whichTd">
        <a>
          <div class="workPicChild" v-for="item in picList">
            <div><router-link v-bind:to="item.index" ><img v-lazy="item.src" /><div class="imgDesinfo"><div>{{item.des}}</div></div></router-link></div>
          </div>
        </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import keyboard from '../sixArticle/keyboard'
  import guitar from '../sixArticle/guitar'
  import sightseeing from '../sixArticle/sightseeing'
  import music from '../sixArticle/music'
  import freephoto from '../sixArticle/freephoto'
  import me from '../sixArticle/me'

  import global from '../Main/global'
  export default {
    name: 'aboutMe',
    data () {
      return{
          show:true,
          allWord:global.allWord,
          headPic :[
            {src:'static/img/lufei-3.jpeg'},
            {src:'static/img/lufei-2.jpg'},
            {src:'static/img/lufei-1.jpg'}
          ],
          picList: [
            {src:'static/img/keyboard.jpg',des:'我是键盘侠,键盘',index:'/keyboard'},
            {src:'static/img/guitar.jpg',des:'我的吉他,吉他',index:'/guitar'},
            {src:'static/img/sightseeing.jpg',des:'那些山山水水,旅行',index:'/sightseeing'},
            {src:'static/img/music.jpg',des:'我的音乐',index:'/music'},
            {src:'static/img/freephoto.jpg',des:'随手拍',index:'/freephoto'},
            {src:'static/img/me.jpg',des:'我',index:'/me'},
          ]
      }
    },
    mounted(){
      if(!this.$store.state.login){
          this.show = false;
          this.$router.replace('/')
      }else{
        this.show = true;
      }
    },
    methods:{
      firstPageArticle:function(arg){
        let self = this;
        $.ajax({
          type:'POST',
          url:'http://localhost:3000/'+arg,
          headers:{"Content-Type":"application/x-www-form-urlencoded"},
          xhrFields: {
            withCredentials: true
          },
          success:function (data,index) {
              //将获取到的数据绑在data
              self._data[arg] = data;
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @leftTabBackgroundColor:#25adf3;
  @leftTabColor:#fff;
  @keyframes headPicMove{
       0% {top:0;}
       50% {top:-250px;}
       100% {top:-500px;}
  }
  h1, h2 ,h3{
    font-weight: normal;
    color: #333;
  }
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: @leftTabColor;
  }
  .first {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    .firstImgChild{
      width: 33.3%;
      height: 270px;
      overflow: hidden;
      margin: 0 auto;
      ul{
        position: relative;
        animation:headPicMove 10s infinite;
      }
    }
    .personalInfo{
      margin-top:40px;
    }
   .firstImg img{
     width: 250px;
     border-radius: 100%;
     padding-top: 40px;
   }
  }
  .workPic{
    width: 100%;
    margin-top: 100px;
    display: table;
    .allThePicContainer{
      width: 90%;
      margin:0 auto;
    }
    .workPicChild{
      width: 33.3333333333%;
      float: left;
      padding: 10px 0;
      position: relative;
      min-height: 1px;
    }
    .imgDesinfo{
      height: 0;
      position: absolute;
      width: 100%;
      top: 10px;
      overflow: hidden;
      div{
        width: 85%;
        margin: 0 auto;
        background: @leftTabBackgroundColor;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 100;
        opacity: 1;
      }
    }
    .workPicChild:hover .imgDesinfo{
      transition: height .5s ;
      height: 30px;
    }
    .imgChild{
      width: 30%;
      float: left;
    }
    img{
      opacity: 0.5;
      border-radius: 10px;
      width: 85%;
      height: 210.5px;
    }
    img:hover{
      transition: opacity .5s;
      opacity: 1;
    }
  }
</style>
