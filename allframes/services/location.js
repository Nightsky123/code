   document.onclick=function(){
        var event=event||window.event;
        alert("横坐标是："+event.clientX+"纵坐标是："+event.clientY);
    }
    window.onload = function ()
    {
        var oBox = document.getElementById("box");
        var timer = null;       
        
        oBox.onclick = function ()
        {           
            var i = 0;  
            clearInterval(timer);
            timer = setInterval(function () {
                oBox.style.display = i++ % 2 ? "none" : "block";
                // i > 3 && (clearInterval(timer));
                if(i>6){
                    clearInterval(timer);
                }
            }, 80)
        }
    };
