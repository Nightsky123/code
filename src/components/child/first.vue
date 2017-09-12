<template>
  <div class="first">
    <div class="firstImg">
      <img src="../../assets/avatar.jpeg" />
    </div>
    <div class="personalInfo">
      <h3>{{msg}}</h3>
    </div>
    <table class="workPic">
      <tr>
        <td><img src="../../assets/coding.jpg" /></td>
        <td><img src="../../assets/coding.jpg" /></td>
        <td><img src="../../assets/coding.jpg" /></td>
      </tr>
      <tr>
        <td><img src="../../assets/coding.jpg" /></td>
        <td><img src="../../assets/coding.jpg" /></td>
        <td><img src="../../assets/coding.jpg" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'first',
    data () {
      return{
        msg:'我是刘小四,一名普通的前端开发工程师'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
  .first {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    img {
     width: 350px;
     border-radius: 100%;
  }
  }
  .workPic{
    display: inline-table;
    width: 100%;
    td{
      padding: 20px 0 10px 0;
    }
    img{
      width: 250px;
      opacity: 0.7;
      border-radius: 10px;
    }
    img:hover{
      transition: opacity .5s;
      opacity: 1;
    }
  }

</style>
