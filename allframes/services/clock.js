 (function(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var h,m,s;
        function now(){
            var d = new Date();
            h = d.getHours();
            m = d.getMinutes();
            s = d.getSeconds();
            h += m/60;
            h = h > 12 ? h - 12 : h;
        }
        // 表盘
        function drawBase(){
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = '#99ccff';
            ctx.arc(250, 250, 200, 0, 360, false);
            ctx.closePath();
            ctx.stroke();
        }
        function drawNumbers(){
            var angle = 0,
                nWidth = 0;
            ctx.save();
            ctx.translate(250, 250);
            ctx.font="19px Arial";
            for(var i = 1; i <= 12; i++){
                if(!(i % 3)){
                    angle = Math.PI / 6 * (i - 3);
                    nWidth = ctx.measureText(i).width;
                    ctx.fillText(i, Math.cos(angle) * 150 - nWidth/2,  Math.sin(angle) * 150 + nWidth/2);
                }
            }
            ctx.restore();
        }
        // 时针刻度
        function drawHourDegree(){
            for(var i = 0; i < 12; i++){
                ctx.save();
                ctx.lineWidth = 5;
                ctx.translate(250, 250);
                ctx.rotate(i * 30 * Math.PI / 180);
                ctx.beginPath();
                ctx.moveTo(0, -190);
                ctx.lineTo(0, -170);
                ctx.strokeStyle = '#333';
                ctx.closePath();
                ctx.stroke();
                ctx.restore();
            }
        }
        // 分针盘
        function drawMinDegree(){
            for(var i = 0; i < 60; i++){
                ctx.save();
                ctx.translate(250, 250);
                ctx.rotate(i * 6 * Math.PI / 180);
                ctx.beginPath();
                ctx.moveTo(0, -190);
                ctx.lineWidth = 5;
                ctx.lineTo(0, -180);
                ctx.strokeStyle = '#999';
                ctx.closePath();
                ctx.stroke();
                ctx.restore();
            }
        }
        // 时针
        function drawHour(){
            ctx.save();
            ctx.translate(250, 250);
            ctx.rotate(h * 30 * Math.PI / 180); // 每小时转过12度
            ctx.beginPath();
            ctx.moveTo(0, -110);
            ctx.lineTo(0, 30);
            ctx.lineWidth = 9;
            ctx.strokeStyle = '#333';
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
        // 分针
        function drawMin(){
            ctx.save();
            ctx.translate(250, 250);
            ctx.rotate(m * 6 * Math.PI / 180);
            ctx.beginPath();
            ctx.moveTo(0, -130);
            ctx.lineWidth = 7;
            ctx.lineTo(0, 25);
            ctx.strokeStyle = 'green';
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
        // 中间圆点
        function drawMiddle(){
            ctx.beginPath();
            ctx.arc(250, 250, 10, 0, 360, false);
            ctx.closePath();
            ctx.fill();
        }
        // 秒钟
        function drawSecond(){
            ctx.save();
            ctx.translate(250, 250);
            ctx.rotate(s * 6 * Math.PI / 180); // 6 每秒转过的角度
            ctx.beginPath();
            ctx.moveTo(0, -150);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'red';
            ctx.lineTo(0, 25);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
        function clock(){
            ctx.clearRect(0, 0, 500, 500);
            now();
            drawBase();
            drawNumbers();
            drawMinDegree();
            drawHourDegree();
            drawHour();
            drawMin();
            drawSecond();
            drawMiddle();
        }
        clock();
        setInterval(function(){
            clock();
        }, 1000);
    }());

