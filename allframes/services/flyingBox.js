   var theBox = document.getElementById("fly");
      var mouseX = 0;
      var mouseY = 0;
      var ss = 0;

       $(document).click(function(event) {
           var event = event || window.event;
          mouseX = event.clientX;
          mouseY = event.clientY;
          var x = theBox.offsetLeft;
          var y = theBox.offsetTop;
         
          if(ss===1){
            
            clearInterval();
          }
         setInterval(function(){
            getLocation(mouseX,mouseY);  
          },10);

          function getLocation(q,w){
          
          if(x!==mouseX||y!==mouseY){
          if(x<mouseX){
            x+=0.5;
            theBox.style.left = x+"px";
            if(y<mouseY){
                y+=0.5;
                theBox.style.top =y+"px";
            }else{
                y-=0.5;
                theBox.style.top =y+"px";
            }
          }else{
            x-=0.5;
            theBox.style.left = x+"px";
            if(y<mouseY){
                y+=0.5;
                theBox.style.top =y+"px";
            }else{
                y-=0.5;
                theBox.style.top =y+"px";
            }
          }
      }else if(x===mouseX&&y===mouseY){
         ss = 1;
      }
      
  }
        });

