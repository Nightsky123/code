var theScreenHeight = window.screen.height;
var theScreenWidth = window.screen.width;
//需要动态获取屏幕的宽高并控制canvas的大小
function loadCSS() {
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
        document.write('<link href="../stylesheets/phone.css" rel="stylesheet" type="text/css" media="screen" />');
    }
    else {
        document.write('<link href="../stylesheets/home.css" rel="stylesheet" type="text/css" media="screen" />');
    }
}
loadCSS();

var Tips = document.getElementsByClassName('tips')[0];
$("#hoMessage").text("你好，我是刘小四，一名前端开发工程师");
Tips.innerHTML = '做一个固执的手艺人，精心雕琢代码';

// $("#theFatherBox").css("width", theScreenWidth);
$("#navs").css("width", theScreenWidth);

//图片预加载
var images = new Array;
var imageArr = new Array;
imageLoad();
function imageLoad() {
    imageArr[0] = " ../images/always.jpg";
    imageArr[1] = " ../images/clock.jpg";
    imageArr[2] = "../images/cloud.jpg";
    imageArr[3] = "../images/flower.png";
    imageArr[4] = "../images/ticket.jpg";
    imageArr[5] = "../images/sound.jpg";
    imageArr[6] = "../images/youku.jpg";
    imageArr[7] = "../images/google.jpg";
    imageArr[8] = "../images/post.jpg";
    imageArr[9] = "../images/news.jpg";
    imageArr[10] = "../images/light.jpg";
    preload(imageArr);
}
function preload(imageArr) {
    for (i = 0; i < imageArr.length; i++) {
        images[i] = new Image();
        images[i].src = imageArr[i];
    }
}

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
    // canvasSize.style.width = theScreenHeight / 2 + "px";
    // canvasSize.style.height = theScreenHeight / 3 + "px";
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

    cxt.beginPath();
    cxt.globalAlpha=0.4;
    cxt.lineWidth = 3;//线条的宽度
    cxt.moveTo(500, 1254.5);
    cxt.lineTo(300.5, 1600.5);
    cxt.stroke();
    cxt.beginPath();
    cxt.globalAlpha=0.3;
    cxt.moveTo(200, 1190.5);
    cxt.lineTo(100.5, 1300.5);
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
                height = theScreenHeight;
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
                pageLocation = heightTwo;
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
                heightTwoSec = allTop;
            }
            window.scrollTo(initialPosition, heightTwoSec);
            if (heightTwoSec = allTop) {
                clearInterval(time);
            }
        }

        time = setInterval(scrollPositionThree, 10);
    });
}
threeContact();
//三种方式的事件
function threeContact() {
    var threeContactFather = $(".contactWayFather");
    $(".contactWay").hide();
    threeContactFather[0].addEventListener("mouseover", function () {
        $("#myEmail").text("15380925359@163.com");
        $("#myEmail").slideDown();
        $(".contactWay")[1].style.display = "none";
        $(".contactWay")[2].style.display = "none";
    });
    threeContactFather[1].addEventListener("mouseover", function () {
        $("#myQq").text("1240135065");
        $("#myQq").slideDown();
        $(".contactWay")[0].style.display = "none";
        $(".contactWay")[2].style.display = "none";
    });
    threeContactFather[2].addEventListener("mouseover", function () {
        $("#myWeiXin").text("liu15380925359");
        $("#myWeiXin").slideDown();
        $(".contactWay")[0].style.display = "none";
        $(".contactWay")[1].style.display = "none";
    });
    $(".contactWayFather").bind("mouseout", function () {
        $(".contactWay").hide();
    });
}

//粒子
particlesJS('homeUp', {
    particles: {
        color: '#fff',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: 1,
        size: 4,
        size_random: true,
        nb: 150,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove" (particles)
                nb: 4
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});










