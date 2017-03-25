var theScreenHeight = window.screen.height;
var theScreenWidth = window.screen.width;
//需要动态获取屏幕的宽高并控制canvas的大小

var Tips = document.getElementsByClassName('tips')[0];
Tips.innerHTML = 'Yes, it is me';

$("#theFatherBox").css("width", theScreenWidth);
$("#navs").css("width", theScreenWidth);


changeHeightWidth();
//适配不同尺寸屏幕
function changeHeightWidth() {
    var fourDiv = $(".theOneOfFour");
    var canvasSize = document.getElementById("myCanvas");
    fourDiv[0].style.width = theScreenWidth + "px";
    fourDiv[0].style.height = theScreenHeight + "px";
    fourDiv[1].style.width = theScreenWidth + "px";
    fourDiv[1].style.height = theScreenHeight + "px";
    fourDiv[2].style.width = theScreenWidth + "px";
    fourDiv[2].style.height = theScreenHeight + "px";
    fourDiv[3].style.width = theScreenWidth + "px";
    fourDiv[3].style.height = theScreenHeight + "px";
    canvasSize.style.width = theScreenHeight / 2 + "px";
    canvasSize.style.height = theScreenHeight / 3 + "px";
}

drawThePlane();
// canvas画线
function drawThePlane() {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.lineWidth = 6;//线条的宽度
    cxt.strokeStyle = "white";//线条的颜色
    cxt.beginPath();
    cxt.moveTo(1100.5, 4.5);//括号内左边是x轴值，右边是y轴
    cxt.lineTo(4.5, 1100.5);
    cxt.closePath();
    cxt.stroke();

    cxt.beginPath();
    cxt.moveTo(1100.5, 4.5);
    cxt.lineTo(350.5, 1150.5);
    cxt.stroke();

    cxt.beginPath();
    cxt.moveTo(4.5, 1100.5);
    cxt.lineTo(350.5, 1150.5);
    cxt.closePath();
    cxt.stroke();

    cxt.beginPath();
    cxt.moveTo(350.5, 1150.5);
    cxt.lineTo(350.5, 1300.5);
    cxt.lineTo(434.5, 1175.5);
    cxt.stroke();
//
    cxt.beginPath();
    cxt.moveTo(350.5, 1300.5);
    cxt.lineTo(400.5, 1160.5);  //飞机尾
    cxt.lineTo(1100.5, 4.5);  //飞机头
    cxt.stroke();

    cxt.beginPath();
    cxt.moveTo(1100.5, 4.5);
    cxt.lineTo(750.5, 1300.5);
    cxt.lineTo(400.5, 1160.5);
    cxt.stroke();
}

//导航栏文本及事件
theNavsText();
function theNavsText() {
    var Nav = document.getElementsByClassName('nav');
    Nav[0].innerHTML = "HOME";
    Nav[1].innerHTML = "BLOG";
    Nav[2].innerHTML = "CONTACT";
    Nav[3].innerHTML = "RESUME";
    //为导航栏绑定事件
    Nav[0].addEventListener('click', function () {
        window.scrollTo(0, 0);
    });
    Nav[1].addEventListener('click', function () {
        var height = 0;
        var time = null;

        function scrollPosition() {
            if (height !== theScreenHeight) {
                height += (theScreenHeight / 10);
            }
            window.scrollTo(0, height);
            if (height === theScreenHeight) {
                clearInterval(time);
            }
        }

        time = setInterval(scrollPosition, 10);

    });

    Nav[2].addEventListener('click', function () {
        var heightTwo = 2 * theScreenHeight;
        var pageLocation = theScreenHeight;
        var initialPosition = theScreenHeight;
        var time = null;

        function scrollPositionTwo() {
            if (pageLocation !== heightTwo) {
                pageLocation += (heightTwo / 10);
            }
            window.scrollTo(initialPosition, pageLocation);
            if (pageLocation === heightTwo) {
                clearInterval(time);
            }
        }

        time = setInterval(scrollPositionTwo, 10);
    });
    Nav[3].addEventListener('click', function () {
        var heightTwoSec = 2 * theScreenHeight;
        var initialPosition = 2 * theScreenHeight;
        var allTop = 3 * theScreenHeight;
        var time = null;

        function scrollPositionThree() {
            if (heightTwoSec !== allTop) {
                heightTwoSec += (allTop / 10);
            }
            window.scrollTo(initialPosition, heightTwoSec);
            if (heightTwoSec > allTop) {
                clearInterval(time);
            }
        }

        time = setInterval(scrollPositionThree, 10);
    });
}
threeContact();
function threeContact(){
    var threeContactFather = $(".contactWayFather");
    $(".contactWay").hide();
    threeContactFather[0].addEventListener("mouseover", function () {
        $("#myEmail").text("15380925359@163.com");
        $("#myEmail").css({"width": "300px", 'height': "150px"});
        $("#myEmail").slideDown();
        $(".contactWay")[1].style.display = "none";
        $(".contactWay")[2].style.display = "none";
    });
    threeContactFather[1].addEventListener("mouseover", function () {
        $("#myQq").text("1240135065");
        $("#myQq").css({"width": "300px", 'height': "150px"});
        $("#myQq").slideDown();
        $(".contactWay")[0].style.display = "none";
        $(".contactWay")[2].style.display = "none";
    });
    threeContactFather[2].addEventListener("mouseover", function () {
        $("#myWeiXin").text("liu15380925359");
        $("#myWeiXin").css({"width": "300px", 'height': "150px"});
        $("#myWeiXin").slideDown();
        $(".contactWay")[0].style.display = "none";
        $(".contactWay")[1].style.display = "none";
    });
    $(".contactWayFather").bind("mouseout", function () {
        $(".contactWay").hide();
    });
}












