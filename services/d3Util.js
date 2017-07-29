 var width = 500;
    var height = 500;
    var svg = d3.select("svg");
    var radius = 30;    //圆形半径
    var img_w = 90;
    var img_h = 90;
    svg.attr("x", 300)
        .attr("y", 300)
        .attr("width", 1000)
        .attr("height", 1000);

    var nodes = [{name: "桂林", image: "Lighthouse.jpg",relation:"qwedsd"}, {name: "广州", image: "Lighthouse.jpg",relation:"qwe"},
        {name: "厦门", image: "Lighthouse.jpg",relation:"qwasde"}, {name: "杭州", image: "Lighthouse.jpg",relation:"asd"},
        {name: "上海", image: "Lighthouse.jpg",relation:"qwasde"}, {name: "青岛", image: "Lighthouse.jpg",relation:"qwasde"},
        {name: "天津", image: "Lighthouse.jpg",relation:"qwasde"}, {name: "青岛", image: "Lighthouse.jpg",relation:"fsd"}, {
            name: "青岛",
            image: "Lighthouse.jpg",relation:"qasdwe"
        }];

    var edges = [{source: 0, target: 1,relation:"qwe"}, {source: 0, target: 2,relation:"fasd"},   //试了下，source和target不能换名字的
        {source: 0, target: 3,relation:"sd"}, {source: 0, target: 4,relation:"qwfdsvde"},
        {source: 0, target: 5,relation:"qwecxc"}, {source: 0, target: 6,relation:"qwecxxc"}, {source: 0, target: 7,relation:"qwecxcsd"}, {source: 0, target: 8,relation:"qwedacxs"}];
    /*初始化force*/
    var force = d3.layout.force()
        .nodes(nodes)
        .links(edges)
        .size([1200, 1200])     //作用力的中心区域
        .linkDistance(200)   //连线的长度
        .charge([-1500]);     //负数为排斥 正数为吸引
    /*很关键 启动force*/
    force.start();
    /*添加连线*/
    //(2)根据连线类型引用上面创建的标记
    var path = svg.append("svg:g").selectAll("path")
        .data(edges)
        .enter().append("svg:path")
        .attr("class", function(d) { return "link " + d.type; })
        .attr("dataId",function(d){
            return d.relation;
        })
        .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

    /*颜色随机改变*/
    var color = d3.scale.category20();

    /*添加节点*/
    // 圆形图片节点（人物头像）
    var nodes_img = svg.selectAll("image")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "circleImg")
        .attr("r", radius)
        .attr("fill", function (d, i) {
            
            $(this).attr("dataId",d.relation);
            //创建圆形图片
            var defs = svg.append("defs").attr("id", "imgdefs")

            var catpattern = defs.append("pattern")
                .attr("id", "catpattern" + i)
                .attr("height", 1)
                .attr("width", 1)

            catpattern.append("image")
                .attr("x", -(img_w / 2 - radius))
                .attr("y", -(img_h / 2 - radius))
                .attr("width", img_w)
                .attr("height", img_h)
                .attr("xlink:href", d.image)

            return "url(#catpattern" + i + ")";

        })
        .on("mouseover", function (d, i) {
            var s = $("circle")[i];
            //本想加个渐变的
            // var theCircleR = s.getAttribute('r');
            s.setAttribute("r", 35);
            //显示图片的文字
            $(".good")[i].style.fill = color(i);
            $(".good")[i].style.display = "block";
        })
        .on("mouseout", function (d, i) {
            var s = $("circle")[i];
            s.setAttribute("r", 30);
            //隐去图片的文字
            $(".good")[i].style.display = "none";
        })
        .call(force.drag); //使节点可拖拽

    /*添加描述节点的文字*/
    var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("class", "good")
        .style("fill", "black")
        .attr("dx", -20)               //文字相对node中心的移动
        .attr("dy", 50)
        .text(function (d, i) {         //返回节点的名字
            return d.name;
        })
        .style("fill", "#333")
        .style("display", "none");


    force.on("tick", function () { //对于每一个时间间隔  将之前通过force活着
        //更新连线坐标
//        svg_edges.attr("x1", function (d) {
//            return d.source.x;
//        })
//            .attr("y1", function (d) {
//                return d.source.y;
//            })
//            .attr("x2", function (d) {
//                return d.target.x;
//            })
//            .attr("y2", function (d) {
//                return d.target.y;
//            });

//        打点path格式是：Msource.x,source.yArr00,1target.x,target.y
        path.attr("d", function(d) {
            var dx = d.target.x - d.source.x,//增量
                dy = d.target.y - d.source.y,
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" + d.source.x + ","
                + d.source.y + "A" + dr + ","
                + dr + " 0 0,1 " + d.target.x + ","
                + d.target.y;
        });


        //更新节点坐标
        nodes_img.attr("cx", function (d) {
            return d.x;
        })
            .attr("cy", function (d) {
                return d.y;
            });

        //更新文字坐标
        svg_texts.attr("x", function (d) {
            return d.x;
        })
            .attr("y", function (d) {
                return d.y;
            });
    });
