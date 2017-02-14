    var user = document.getElementById("userName");
    var pass = document.getElementById("passWord");
    var log = document.getElementById("POST");
window.onload=function(){
    logIn();
    log.addEventListener("click",function(){
        if(user.value !=="xiaosi"&&pass.value !=="1234"){
             location.href = "http://codepen.io/Nightsky/full/vgQmEZ";
             refresh();
            }else{
            $("#layer").modal("show");
             refresh();
            }
        
    });
    };
    function refresh(){
          user.value = "";
          pass.value = "";
          $("#first").css({"color":"black","opacity":"0.5"});
          $("#second").css({"color":"black","opacity":"0.5"});
      }

    function logIn(){
        $("#userName").bind("focus",function(){
        $("#first").css({"color":"#66afe9"});
        $("#second").css({"color":"black"});
        });
        $("#passWord").bind("focus",function(){
        $("#first").css({"color":"black","opacity":"0.5"});
        $("#second").css({"color":"#66afe9","opacity":"0.5"});
        });
    }
