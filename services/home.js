var homePageJs = function () {
    var _this = this;

    _this.loadCSS = function () {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        media = "screen";
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
            link.href = '../stylesheets/phone.css';
        }
        else {
            link.href = '../stylesheets/home.css';
        }
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    _this.imageLoad = function () {
        var imageArr = new Array;
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
        homePageJs.preload(imageArr);
    };
    //适配不同尺寸屏幕
    _this.changeHeightWidth = function () {
        var theScreenHeight = window.screen.height;
        var theScreenWidth = window.screen.width;
        var fourDiv = $(".theOneOfFour");

        fourDiv.each(function(){
            $(this)[0].style.width = theScreenWidth + "px";
            $(this)[0].style.height = theScreenHeight + "px";
        });
    };
    _this.preload = function (imageArr) {
        var images = new Array;
        //图片预加载
        for (i = 0; i < imageArr.length; i++) {
            images[i] = new Image();
            images[i].src = imageArr[i];
        }
    };
    // canvas画线
    _this.drawThePlane = function () {
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
        cxt.globalAlpha = 0.4;
        cxt.lineWidth = 3;//线条的宽度
        cxt.moveTo(500, 1254.5);
        cxt.lineTo(300.5, 1600.5);
        cxt.stroke();
        cxt.beginPath();
        cxt.globalAlpha = 0.3;
        cxt.moveTo(200, 1190.5);
        cxt.lineTo(100.5, 1300.5);
        cxt.stroke();

    };
    //导航栏文本及事件
    _this.theNavsText = function () {
        var theScreenHeight = window.screen.height;
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
    };
    //三种方式的事件
    _this.threeContact = function () {
        var threeContactFather = $(".contactWayFather");
        $(".contactWay").hide();
        threeContactFather[0].addEventListener("mouseover", function () {
            $("#myEmail").text("13770655629@163.com");
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
    };
    //最末尾的饼状图
    _this.drawPic = function () {
        var myChart = echarts.init(document.getElementById('circlePic'));
        option = {
            backgroundColor: '#2c343c',
            visualMap: {
                type: 'continuous',
                min: 0,
                max: 100,
                text: ['HIGH', 'Low'],
                realtime: false,
                calculable: true,
                color: ['orangered', 'yellow', 'lightskyblue'],
                x: '300px'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        {value: 90, name: 'Html/Html5'},
                        {value: 90, name: 'Css/Css3'},
                        {value: 90, name: 'Javascript'},
                        {value: 75, name: 'Vue.js'},
                        {value: 85, name: 'Echarts/Highcharts/D3.js'},
                        {value: 60, name: 'Java'}
                    ],
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '30'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);

    };
};

//粒子
particlesJS('effect', {
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

window.onload = function () {
    var youNeedToLoad = new homePageJs();

    var theScreenWidth = window.screen.width;

    //需要动态获取屏幕的宽高并控制canvas的大小
    $("#navs").css("width", theScreenWidth);
    var Tips = document.getElementsByClassName('tips')[0];
    $("#hoMessage").text("你好，我是刘小四，一名前端开发工程师");
    Tips.innerHTML = '做一个固执的手艺人';
    
    $("#theFatherBox").css("width", theScreenWidth);

    youNeedToLoad.loadCSS();
    youNeedToLoad.changeHeightWidth();
    youNeedToLoad.drawThePlane();
    youNeedToLoad.theNavsText();
    youNeedToLoad.threeContact();
    youNeedToLoad.drawPic();

};








