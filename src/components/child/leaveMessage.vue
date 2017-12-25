<template>
  <div class="readAllTheMessage">
    <div class="nav">
      <ul class="timeline">
        <li v-model='allList' v-for="listData in allList">
          <!--<time class="cbp_tmtime"><span></span> <span></span></time>-->
          <!--<div class="cbp_tmicon"></div>-->
          <div class="cbp_tmlabel"  data-scroll-reveal="enter right over 1s" data-scroll-reveal-id="2" style="-webkit-transform: translatex(0);transform: translatex(0);opacity: 1;-webkit-transition: -webkit-transform 1s ease-in-out 0s,  opacity 1s ease-in-out 0s;transition: transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;" data-scroll-reveal-initialized="true">
            <!--<h2>{{listData.detail.match(/\S{20}/i)[0]}}</h2>-->
            <!--<p><span class="blogpic">{{listData.detail.match(/\s{4}/g)}}<a href=""><img src="" /></a></span></p>-->
            <h2>{{listData.data}}</h2>
            <p>------来自{{listData.name===""?'无名氏':listData.name}}</p>
            <p><span class="blogpic">{{listData.data.match(/\s{4}/g)}}<a href=""><img src="" /></a></span></p>
            <a class="readmore" @click="textDetail(listData.data)">详情&gt;&gt;</a></div>
        </li>
      </ul>
      <div class="textDetail">
        <div class="textDetailChild">{{whichText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leaveMessage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      whichText:'',
      allList: ''
    }
  },
  mounted(){
    this.readAllTheMessage();
  },
  methods:{
      readAllTheMessage:function(){
          let self = this;

          $.ajax({
            type:'POST',
            url:'http://localhost:3000/readAllTheMessage',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            xhrFields: {
              withCredentials: true
            },
            success:function (data,index) {
              //将获取到的数据绑在data中的allList
              self.allList = JSON.parse(data.message.substr(0,data.message.length));
            }
          })
      },
      textDetail:function(textDetail){
          this.whichText = textDetail;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  h1, h2 {
    font-weight: normal;
  }
  .readAllTheMessage{
    .nav{
      height: 100%;
    }
  }
  .textDetail{
    width: 61%;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    .textDetailChild{
      padding-top: 20px;
      float: right;
      width: 100%;
      height: 100%;
      color:#fff;
      background: -webkit-linear-gradient(left,#000,#555);
    }
  }
  .cbp_tmlabel{
    margin: 0 50px 15px 180px;
    background: #3594cb;
    color: #fff;
    width: 100%;
    padding: 2em;
    position: relative;
    border-radius: 5px;
    height: 150px;
  }
  .timeline:before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5px;
    background: #afdcf8;
    left: 158px;
    margin-left: -10px;
  }
  .timeline{
    height: 100%;
    background: -webkit-linear-gradient(left,#444,#110);
    padding: 0;
    list-style: none;
    width: 40%;
  }
  .timeline > li{
      list-style: none;
      position: relative;
      .cbp_tmtime{
        display: block;
        width: 100px;
        padding-right: 30px;
        position: absolute;
        margin-left: 20px;
      }
    .cbp_tmicon{
      width: 10px;
      height: 10px;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      font-size: 1.4em;
      line-height: 40px;
      -webkit-font-smoothing: antialiased;
      position: absolute;
      color: #fff;
      background: #46a4da;
      border-radius: 50%;
      box-shadow: 0 0 0 3px #afdcf8;
      text-align: center;
      left: 170px;
      top: 15px;
      margin: 0 0 0 -25px;
    }
    }

</style>
