var City = document.getElementsByClassName('city')[0];
var TodayWeather = document.getElementsByClassName('todayWeather')[0];
var ToWeather = document.getElementsByClassName('toWeather')[0];

var allKind = document.getElementsByClassName("info");
    var dressAdvice = allKind[0];
    var carWash = allKind[1];
    var journey = allKind[2];
    var exercise = allKind[3];
    var purple = allKind[4];
    $(".smallBox").slideUp();
    function checkInfo(){
        var name = $("#name").val();
        for(var i = 0;i<allCity.length;i++){
            if(allCity[i].indexOf(name)>0){
                var flag = true;
            }
        }
        if(flag){
            return true;
        }else{
            return false;
        }}
    $("#check").click(function(){
        $.getJSON("https://v.juhe.cn/weather/index?callback=?",{
            "cityname":$("#name").val(),
            "type":"get",
            "dataType":"jsonp",
            "key":"f9e1650db5b9c15e09b947fe96768587",
            },function(json){
                if(json.error_code){
                    alert("请重新输入你的城市");
                    return;
                }
                $(".time").css({"border":"1px solid black","border-radius":"20px"});
                var allTheInfoToday = json.result.today;
                var sss = json.result.today.date_y.match(/\d/gi);
                var todayDate = sss.join("");
               dressAdvice.innerHTML = allTheInfoToday.dressing_advice;
               carWash.innerHTML = allTheInfoToday.wash_index;
               journey.innerHTML = allTheInfoToday.travel_index;
               exercise.innerHTML = allTheInfoToday.exercise_index;
               purple.innerHTML = allTheInfoToday.uv_index;
              $(".smallBox").slideUp();
              var dateWether = [];
                 var future = json.result.future;
                 for(items in future){
                     dateWether.push(future[items]); 
                 }
                 
                 City.innerHTML = '<p>'+allTheInfoToday.city+'</p><p>'+allTheInfoToday.date_y+'</p>';
                 var ss = '<p>'+dateWether[0].weather+'</p><p>'+dateWether[0].week+'</p><p>'+  dateWether[0].temperature+'</p><p>'+dateWether[0].wind+'</p>';
                TodayWeather.innerHTML = ss;
                var yy = '<p>'+dateWether[1].weather+'</p><p>'+dateWether[1].week+'</p><p>'+  dateWether[1].temperature+'</p><p>'+dateWether[1].wind+'</p>';
                ToWeather.innerHTML = yy;
              $('.smallBox').slideDown('slow');
             

});
});
