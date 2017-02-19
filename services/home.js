        
        var needToTop = null;
        var homePicture = document.getElementById("head");
        var Nav = document.getElementsByClassName('nav');
        Nav[0].innerHTML = "HOME";
        Nav[1].innerHTML = "BLOG";
        Nav[2].innerHTML = "CONTACT";
        Nav[3].innerHTML = "RESUME";
        var Tips = document.getElementsByClassName('tips')[0];
        homePicture.src = "../images/home.jpg";
        Tips.innerHTML = 'Yes, it is me';
        var Q = document.getElementById('q');
        // Q.style.backgroundImage= 'url(http://dl.bizhi.sogou.com/images/2012/04/19/218120.jpg)';
        var W = document.getElementById('w');
       
        var s = document.getElementById('qwer');
        Nav[0].onclick=function(){

           window.scrollTo(0,0);
        };
        // debugger;
      
       
        Nav[1].addEventListener('click',function(){
            startScroll();
        });
          function startScroll(){
            var height = 0;
            var time = null;
            function scrollPosition(){
            if(height!==1344){
                height+=30;
            }
            window.scrollTo(0,height);
            if(height>1344){
            clearInterval(time);
           }
        }
        time = setInterval(scrollPosition,10);
        }
          
          Nav[2].addEventListener('click',function(){
            startScrollTwo();
        });
          function startScrollTwo(){
             var heightTwo = 1344;
            var time = null;
            function scrollPositionTwo(){
            if(heightTwo!==2690){
                heightTwo+=30;
            }
            window.scrollTo(1344,heightTwo);
            if(heightTwo>2690){
            clearInterval(time);
           }
        }
        time = setInterval(scrollPositionTwo,10);
          }
       Nav[3].addEventListener('click',function(){
            startScrollThree();
        });
          function startScrollThree(){
             var heightTwo = 2690;
            var time = null;
            function scrollPositionThree(){
            if(heightTwo!==4032){
                heightTwo+=30;
            }
            window.scrollTo(2690,heightTwo);
            if(heightTwo>4032){
            clearInterval(time);
           }
        }
        time = setInterval(scrollPositionThree,10);
          }
           // console.log(clientX,clientY);
           // alert('嘿嘿,这个正在做，别急');
     
