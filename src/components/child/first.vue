<template>
  <div class="first">
    <div class="firstImg">
      <img src="../../assets/coding.jpg" />
    </div>
    <div class="personalInfo">
      <h3>{{msg}}</h3>
    </div>
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
    margin: 0 auto;
    img {
     width: 500px;
     border-radius: 100%;
  }
  }

</style>
