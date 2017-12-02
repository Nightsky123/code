<template>
  <div class="freephoto">{{articlText}}</div>
</template>

<script>
  export default {
    name:'freephoto',
    data(){
      return {
        articlText:''
      }
    },
    mounted(){

      let self = this;
      //用的jq的ajax请求，接口是后台提供的
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/freephoto',
        headers: {"Content-Type":"application/x-www-form-urlencoded"},
        xhrFields: {
          withCredentials: true
        },
        success: function (data, index) {
          //将获取到的数据绑在data
          self._data.articlText = data;


        }
      });
    }

  }

</script>
<style lang="less">
  .freephoto{
    height: 200px;
    width: 200px;
    background: white;
  }

</style>

