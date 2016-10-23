<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Array</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
</head>
<body>
    <div>January(1),February(2),March(3),April(4),May(5),June(6),July(7),Aguest(8),September(9),October(10),November(11),December(12)</div>

    <input type="button" value="删除January(1)" />
    <input type="button" value="删除December(12)" />

    <div>0,1,2,3,4,5,6,7,8,9</div>

    <input type="button" value="复制" />
    <input type="button" value="还原" />

    <div>red,green,blue,white,yellow,black,brown</div>

    <input type="button" value="还原" />
    <input type="button" value="删除前三项" />
    <input type="button" value="删除第二至三项" />
    <input type="button" value="在第二项后插入(orange, purple)" />
    <input type="button" value="替换第二项和第三项" />
 <script type="text/javascript">
    window.onload=function(){
        var oDiv=document.getElementsByTagName("div");
        var oInput=document.getElementsByTagName("input");
        var aTemp=[];
        var i=0;
        var s1=s2=true;
        oInput[0].onclick=function(){
            aTemp=getArray(oDiv[0].innerHTML);
            s1?
            (aTemp.shift(),this.value=this.value.replace("删除","添加"),s1=false):
            (aTemp.unshift("January(1)"),this.value=this.value.replace("添加","删除"),s1=true);
            oDiv[0].innerHTML=aTemp.join();
        };
        oInput[1].onclick=function(){
            aTemp=getArray(oDiv[0].innerHTML);
            s2?
            (aTemp.pop(),this.value=this.value.replace("删除","添加"),s2=false):
            (aTemp.push("December(12)"),this.value=this.value.replace("添加","删除"),s2=true);
            oDiv[0].innerHTML=aTemp.join();
        };
        oInput[2].onclick=function(){
            aTemp=getArray(oDiv[1].innerHTML);
            oDiv[1].innerHTML=aTemp.concat(aTemp).toString().replace(/\s/g,"")
        };
        oInput[3].onclick=function(){
            aTemp=getArray(oDiv[1].innerHTML);
            aTemp.length=10;
            oDiv[1].innerHTML=aTemp.join();
        }
        oInput[4].onclick=function(){
            aTemp=["red","green","blue","white","yellow","black","brown"];
            oDiv.innerHTML=aTemp.join();
        }
        oInput[5].onclick=function(){
            aTemp=getArray(oDiv[2].innerHTML);
            aTemp.splice(0,3);
            oDiv[2].innerHTML=aTemp.join();
        };
        oInput[6].onclick=function(){
            aTemp=getArray(oDiv[2].innerHTML);
            aTemp.splice(1,2);
            oDiv[2].innerHTML=aTemp.join();
        };
        function getArray(str){
        aTemp.length = 0;
        str = str.split(",");
        for (var i in str)aTemp.push(str[i]);
        return aTemp
    };

    }
 </script>
</body>
</html>
