//canvas画线
// var c=document.getElementById("myCanvas");
// var cxt=c.getContext("2d");
// cxt.lineWidth = 1;//线条的宽度
// cxt.strokeStyle = "red";//线条的颜色
// cxt.moveTo(10.5,10.5);
// cxt.lineTo(1050.5,590.5);
// cxt.lineTo(950.5,10.5);
// cxt.stroke();
// //要通过js来动态监听屏幕大小改变canvas的宽度值
// cxt.closePath();
var needToTop = null;
var Nav = document.getElementsByClassName('nav');
Nav[0].innerHTML = "HOME";
Nav[1].innerHTML = "BLOG";
Nav[2].innerHTML = "CONTACT";
Nav[3].innerHTML = "RESUME";
var Tips = document.getElementsByClassName('tips')[0];
Tips.innerHTML = 'Yes, it is me';
var Q = document.getElementById('q');
var W = document.getElementById('w');
var s = document.getElementById('qwer');
Nav[0].onclick = function () {
    window.scrollTo(0, 0);
};
Nav[1].addEventListener('click', function () {
    startScroll();
});
function startScroll() {
    var height = 0;
    var time = null;

    function scrollPosition() {
        if (height !== 1344) {
            height += 30;
        }
        window.scrollTo(0, height);
        if (height > 1344) {
            clearInterval(time);
        }
    }

    time = setInterval(scrollPosition, 10);
}

Nav[2].addEventListener('click', function () {
    startScrollTwo();
});
function startScrollTwo() {
    var heightTwo = 1344;
    var time = null;

    function scrollPositionTwo() {
        if (heightTwo !== 2690) {
            heightTwo += 30;
        }
        window.scrollTo(1344, heightTwo);
        if (heightTwo > 2690) {
            clearInterval(time);
        }
    }

    time = setInterval(scrollPositionTwo, 10);
}
Nav[3].addEventListener('click', function () {
    startScrollThree();
});
function startScrollThree() {
    var heightTwo = 2690;
    var time = null;

    function scrollPositionThree() {
        if (heightTwo !== 4032) {
            heightTwo += 30;
        }
        window.scrollTo(2690, heightTwo);
        if (heightTwo > 4032) {
            clearInterval(time);
        }
    }

    time = setInterval(scrollPositionThree, 10);
}
