    var message = [
        "生活就是没事找点乐子，自己哄着自己开心。—— is me",
        "在记忆里，有一些瞬间，经历时没什么特别，回想时，却胜过千言万语。 —— is me",
        "择善友而交，择善书而读，择善言而听，择善行而从。—— is me",
        "生活不乏精彩，只是有时候，我们的眼睛盯着乌云不放。—— is me"
    ];
    var color = ["#99cc66", "#FF9933", "#6699CC", "FF9999"];
    var i = 0;
    var content = document.getElementById("Text");
    var BODY = document.getElementById("Body");

    function styl(id) {
        $("#" + id).mouseover(function () {
            $("#" + id).css({"text-decoration": "underline"});
        });
        $("#" + id).mouseout(function () {
            $("#" + id).css({"text-decoration": "none"});
        });
    }

    function qwe(id) {
        $("#" + id).css({"opacity": "0.3"});
        setTimeout(function () {
            $("#" + id).css({"opacity": "1"}, 200);
        });
    }
    content.innerHTML = "你好，请点击刷新键";
    $("#tip").click(function () {
        content.style.display = "none";
        content.innerHTML = message[i];
        if (i === 0) {
            $("#Body").removeClass("CHANGE3").addClass("CHANGE");
        } else if (i === 1) {
            $("#Body").removeClass("CHANGE").addClass("CHANGE1");
        } else if (i === 2) {
            $("#Body").removeClass("CHANGE1").addClass("CHANGE2");
        } else {
            $("#Body").removeClass("CHANGE2").addClass("CHANGE3");
        }
        $("#Text").fadeIn(1000, function () {
            i += 1;
            if (i > 3) {
                i = 0;
            }
        });
    });
    $("#twi").click(function () {
        window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22I%27ll%20have%20what%20she%27s%20having.%22%20When%20Harry%20Met%20Sally");
    });
    $("#face").click(function () {
        window.open("https://www.facebook.com/");
    });