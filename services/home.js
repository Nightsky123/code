
// canvas画线
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.lineWidth = 6;//线条的宽度
cxt.strokeStyle = "white";//线条的颜色
cxt.beginPath();
cxt.moveTo(1100.5,4.5);
cxt.lineTo(4.5,1100.5);
cxt.closePath();
cxt.stroke();

cxt.beginPath();
cxt.moveTo(1100.5,4.5);
cxt.lineTo(350.5,1150.5);
cxt.stroke();

cxt.beginPath();
cxt.moveTo(4.5,1100.5);
cxt.lineTo(350.5,1150.5);
cxt.closePath();
cxt.stroke();

cxt.beginPath();
cxt.moveTo(350.5,1150.5);
cxt.lineTo(350.5,1300.5);
cxt.lineTo(434.5,1175.5);
cxt.stroke();
//
cxt.beginPath();
cxt.moveTo(350.5,1300.5);
cxt.lineTo(400.5,1160.5);  //飞机尾
cxt.lineTo(1100.5,4.5);  //飞机头
cxt.stroke();

cxt.beginPath();
cxt.moveTo(1100.5,4.5);
cxt.lineTo(750.5,1300.5);
cxt.lineTo(400.5,1160.5);
cxt.stroke();

var needToTop = null;
var Nav = document.getElementsByClassName('nav');
Nav[0].innerHTML = "HOME";
Nav[1].innerHTML = "BLOG";
Nav[2].innerHTML = "CONTACT";
Nav[3].innerHTML = "RESUME";

var screenHeightOne = document.getElementById("q");
var screenHeightTwo = document.getElementById("w");
var screenHeightThree = document.getElementById("e");
var screenHeightFour = document.getElementById("r");
var theScreenHeight = window.screen.height;
screenHeightOne.style.height = theScreenHeight+"px";
screenHeightTwo.style.height = theScreenHeight+"px";
screenHeightThree.style.height = theScreenHeight+"px";
screenHeightFour.style.height = theScreenHeight+"px";
var Tips = document.getElementsByClassName('tips')[0];
Tips.innerHTML = 'Yes, it is me';
Nav[0].addEventListener('click', function () {
    console.log(Nav[0].scrollHeight);
    window.scrollTo(0, 0);
});
Nav[1].addEventListener('click', function () {
    var height = 0;
    var time = null;
    function scrollPosition() {
        if (height !== theScreenHeight) {
            height += 30;
        }
        window.scrollTo(0, height);
        if (height === theScreenHeight) {
            clearInterval(time);
        }
    }
    time = setInterval(scrollPosition, 10);

});

Nav[2].addEventListener('click', function () {
    var heightTwo = 2*theScreenHeight;
    var pageLocation = theScreenHeight;
    var initialPosition = theScreenHeight;
    var time = null;
    function scrollPositionTwo() {
        if (pageLocation !== heightTwo) {
            pageLocation += 30;
        }
        window.scrollTo(initialPosition,pageLocation);
        if (pageLocation === heightTwo) {
            clearInterval(time);
        }
    }
    time = setInterval(scrollPositionTwo, 10);
});
Nav[3].addEventListener('click', function () {
    var heightTwo = 2*theScreenHeight;
    var initialPosition = 2*theScreenHeight;
    var time = null;
    function scrollPositionThree() {
        if (heightTwo !== 3*theScreenHeight) {
            heightTwo += 30;
        }
        window.scrollTo(initialPosition, heightTwo);
        if (heightTwo === 3*theScreenHeight) {
            clearInterval(time);
        }
    }
    time = setInterval(scrollPositionThree, 10);
});

