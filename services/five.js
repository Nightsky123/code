window.onload = function () {
    new Vue({
        el: ".content",
        data: {
            all: {width: '100%', height: '1000px', background: '', margin: '0 auto'},
            child: {width: '800px', height: "600px", margin: '0 auto'},
            msg: "中国十大名山",
            arr: ["山东泰山", '安徽黄山', '四川峨眉山', '江西庐山', '西藏珠穆朗玛峰'],
            arrNext: ['吉林长白山', '陕西华山', '福建武夷山', '台湾玉山', '山西五台山'],
            dressColor: {background: "#90EE90"},
            position: {float: 'left', padding: '10px', width: '160px'},
            headerColor: {width: '900px', margin: '0 auto', marginTop: '50px', textAlign: 'center'},
            upWidth: {
                float: 'left',
                margin: '0 auto',
                fontSize: '15px',
                height: "900px",
                width: '800px',
                background: '',
                textIndent: '2em',
                lineHeight: '25px',
                padding: '25px',
                textAlign: 'justify'
            },
            infor: ['泰山位于山东省中部，泰安市之北，总面积250平方公里，古称岱山泰山，春秋时改称泰山，被尊为我国五岳之首，有“中华国山”、“天下第一山”的美誉，又称东岳。古以东方为万物交替、初春发生之地，故泰山有“五岳之长”、“五岳独尊”之誉。泰山拥有丰富的自然遗产，于1987年被列入世界自然文化遗产名录，是中国首例自然文化双重遗产项目。景区内自古命名的山峰112座、崖岭98座，岩洞18处、奇石58块、溪谷102条，潭池瀑布56处、山泉64处，共有植物144科，989种，植被覆盖率为79.9%。泰山风景区拥有连续数千年的历史文化遗产。现有古建筑群22处、古遗址97处、历代碑碣819块、历代刻石1800余处，为研究中国古代历史、书法等提供了重要而丰富的实物资料。主要景观包括天贶殿、南天门、碧霞祠、日观峰、经石、黑龙潭等。泰山北部有名刹灵岩寺，创建于东晋。寺内有建于唐朝的辟支塔，千佛殿，宋代彩塑罗汉像以及规模仅次于少林寺的墓塔林，是价值很高的石文化遗产。', '黄山位于安徽省南部，属黄山市管辖。传说是中华祖先——轩辕黄帝修身炼黄山丹而飘然成仙的地方。黄山千峰竞秀，万壑峥嵘。有名可指的就有72山峰，其中“莲花”、“光明顶”、“天都”三大主峰，均在海拔1800米以上，拔地极天，气势磅礴，雄姿灵秀。黄山面积约1200平方公里，精华景区1154平方公里，集“泰山之雄伟、衡山之烟云、庐山之飞瀑、峨眉之秀丽、雁荡之巧石、华山之险峻”于一体，二湖、三瀑、十六泉、二十四溪相映争辉，尤以“奇松、怪石、云海、温泉”四绝称著于世。黄山四季景色各异，日出、晚霞、华彩、佛光和雾淞等时令景观各得其趣，还兼有“天然动物园和天下植物园”的美称，真可谓人间仙境。此外，还有云谷寺、松谷庵、白云溪、翡翠谷等游览景区，令人流连忘返。', '被称为“峨眉天下秀”的峨眉山位于峨眉山市境内，距乐山市30公里，峨眉山高出五岳，秀甲九州，以雄秀壮丽的自然风光和神奇迷人的佛教文化著称于世。主要景观有“双桥清音”等峨眉十景，主峰金顶海拔3079米，有云海、日出、佛光、圣灯“四大奇观”。峨眉山为普贤菩萨的道场，是中国四大佛教名山之一，同时也是一座天然珍稀动植物乐园和地质博物馆。 峨眉春季万物萌动，郁郁葱葱；夏季百花争艳，姹紫嫣红；秋季红叶满山，五彩缤纷；冬季银装素裹，白雪皑皑。唐代诗人李白诗曰：“蜀国多仙山，峨眉邈难匹。”明代诗人周洪谟赞道：“三峨之秀甲天下，何须涉海寻蓬莱。”当代文豪郭沫若题书峨眉山为“天下名山”。古往今来峨眉山就是人们礼佛朝拜、游览观光、科学考察和休闲疗养的胜地。', '庐山，位于江西省九江市南部，中华十大名山之一，宋代文学家苏轼诗作《题西林壁》中，诗句“不识庐山真面目”闻名世界。山体呈椭圆形，典型的地垒式块段山，长约25公里，宽约10公里，绵延的90余座山峰，犹如九叠屏风，屏蔽着江西的北大门，主峰汉阳峰，海拔1474米。庐山自古命名的山峰便有171座。群峰间散布冈岭26座，壑谷20条，岩洞16个，怪石22处。水流在河谷发育裂点，形成许多急流与瀑布，瀑布22处，溪涧18条，湖潭14处。最著名的三叠泉瀑布，落差达155米，以“飞流直下三千尺，疑是银河落九天”之称，名扬天下。庐山以雄、奇、险、秀闻名于世，具有极高的科学价值和旅游观赏价值，素有“匡庐奇秀甲天下”之美誉，与鸡公山、北戴河、莫干山并称“四大避暑胜地”。庐山入选：世界文化遗产，世界地质公园，全国重点文物保护单位，国家重点风景名胜区，国家5A级旅游景区，首批全国文瀑布明风景旅游区示范点。', '珠穆朗玛峰位于西藏定日县正南方，喜马拉雅中段的中尼边境处。珠穆朗玛，藏语意为“圣母”，它是世界最高大的山系喜马拉雅山的主峰，海拔8,844米，为世界第一高峰。这是中国登山运动员于1975年登上该峰后测定的精确数字，这个数字校正了人们长期坚持的八千八百八十二米的说法。为世界第一高峰。早在1721年，清朝政府编绘的《皇舆全览图》，就采用了“朱姆朗马阿林”之名（“阿林”是满语山峰之意），并精确地标出了它的具体位置。珠峰山体呈金字塔状，山上有冰川，最长之冰川达26公里。山峰上部终年为冰雪覆盖，地形陡峭高峻。是世界登山运动瞩目和向往的地方。珠峰的气候恶劣，风和日丽的日子不多。经常是暴同肆虐的天气，狂风夹着积雪和砂石铺天盖地而来。攀登珠峰的时间，一年中有两个季节，一个是5月份，另一个是9月到10月。在这两段时间里，海拔八千多米高处的风速较小，而且很少有雨雪。'],
            classArr: ['tab-pane fade in active', 'tab-pane fade', 'tab-pane fade', 'tab-pane fade', 'tab-pane fade'],
            idArr: ['up0', 'up1', 'up2', 'up3', 'up4'],
            srcLink: ['http://img.mp.itc.cn/upload/20160519/28d25a973d47450594df63310f74addb_th.jpg', 'http://s3.lvjs.com.cn/uploads/pc/place2/2016-01-29/9794bdcc-9e3c-4f00-8771-a9cb86cfb1f0.jpg', 'http://www.people.com.cn/mediafile/pic/GQ/20150706/48/9830275362544980892.jpg', 'http://images.xiangrikui.com/mip/images/20110108/1295147408712.jpg', 'http://img3.fengniao.com/forum/attachpics/687/190/27477852_1024.jpg'],
            pict: {width: '400px', margin: '0 auto'}
        }

    });
};