var Box = document.getElementById('box');
function createSnow(l, t, s) {
    var newNode = document.createElement("div");
    newNode.style.width = "30px";
    newNode.innerHTML = "*";
    newNode.style.color = "white";
    newNode.style.opacity = Math.random() * 10;
    newNode.style.fontSize = Math.random() * 50 + "1px";
    newNode.style.height = s + "px";
    newNode.style.width = s + "px";
    newNode.style.left = l + "px";
    newNode.style.top = t + "px";
    Box.appendChild(newNode);
    startMove(newNode);
}
var Y = 0;
function star() {
    setInterval(function () {
        var topL = parseInt(Math.random() * 1770);
        var leftL = parseInt(Math.random() * 40);
        var rightL = (Math.random() * 10);
        createSnow(topL, leftL, rightL);
    }, 3500);
}
function startMove(qwe) {
    var Y = qwe.offsetTop;
    var time = null;

    function move() {
        Y++;
        qwe.style.top = Y + "px";
        if (Y > 900) {
            clearInterval(time);
            Box.removeChild(qwe);
        }
    }
    time = setInterval(move, 10);
}