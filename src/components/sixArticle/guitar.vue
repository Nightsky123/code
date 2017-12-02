<template>
  <div class="guitar">{{articlText}}</div>
</template>

<script>
  export default {
    name:'guitar',
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
        url: 'http://localhost:3000/guitar',
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
  .guitar{
    height: 200px;
    width: 200px;
    background: white;
  }

</style>
