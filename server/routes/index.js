let express = require('express');
let router = express.Router();
let path = require('path');

let fs = require('fs'); // 引入fs模块
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//将获取静态文件数据单独写成个函数，传入参数及文件名
function readDataAndSend(article){
  let theData;
  fs.readFile(path.join(__dirname,'../static/articleData/'+article+'.txt'),{encoding:'utf-8'}, function (err,bytesRead) {
    if (err) throw err;
    theData = JSON.stringify(bytesRead);
    console.log(theData);
    console.log("readFile success");
  });
  router.post('/'+article, function(req, res, next) {
    console.log(res);
    res.json(theData);
  });
}
//读取键盘文档并将数据通过接口返回
let keyboard = 'keyboard';
readDataAndSend(keyboard);
//读取guitar文档并将数据通过接口返回
let guitar = 'guitar';
readDataAndSend(guitar);
//读取sightseeing文档并将数据通过接口返回
let sightseeing = 'sightseeing';
readDataAndSend(sightseeing);
//读取music文档并将数据通过接口返回
let music = 'music';
readDataAndSend(music);
//读取freephoto并将数据通过接口返回
let freephoto = 'freephoto';
readDataAndSend(freephoto);
//读取me文档并将数据通过接口返回
let me = 'me';
readDataAndSend(me);



// fs.readFile(path.join(__dirname,'../static/articleData/keyboard.txt'),{encoding:'utf-8'}, function (err,bytesRead) {
//   if (err) throw err;
//   keyboard=JSON.stringify(bytesRead);
//   console.log(keyboard);
//   console.log("readFile success");
// });
// router.post('/keyboard', function(req, res, next) {
//   console.log(res);
//   res.json(keyboard);
// });












// fs.readFile('../static/simple.json',{encoding:'utf-8'}, function (err,bytesRead) {
//   if (err) throw err;
//   theSimpleData=JSON.parse(bytesRead);
//   console.log(theSimpleData);
//   console.log("readFile success");
// });


//留言接口,写入成功报success,反之报false
router.post('/allTheMessage', function(req, res, next) {
  console.log(req.body.message);
  //把留言装换成对象
  let visitorMessage = {};
  visitorMessage.name = req.body.visitorname;
  visitorMessage.data = req.body.message;

  //先读再写
  fs.readFile('../static/visitorMessageData/message.json','utf8',function (err, data) {
    if(err) console.log(err);
    let allTheData=JSON.parse(data);
    allTheData.push(visitorMessage);
    let  allTheDataStr = JSON.stringify(allTheData);
    fs.writeFile('../static/visitorMessageData/message.json',allTheDataStr,function(err){
        if(err){
          res.json({result:'false'});
          console.log('写文件操作失败');
        } else {
          res.json({result:'sucess'});
          console.log('写文件操作成功');
        }
      });
  });

  //下面的方式也可以追加字符串，但是没法凑成json格式的，为了凑成json，可以用上面这种

  // fs.writeFile('../static/visitorMessageData/message.json', strMes,{
  //   flag: 'a'
  // },function(err){
  //   if(err){
  //     res.json({result:'false'});
  //     console.log('写文件操作失败');
  //   } else {
  //     res.json({result:'sucess'});
  //     console.log('写文件操作成功');
  //   }
  // });
});

router.post('/readAllTheMessage',function(req, res, next){

  //读文件然后返回即可
  fs.readFile('../static/visitorMessageData/message.json','utf8',function (err, data) {
    let allTheData=JSON.parse(data),
        allTheDataStr = JSON.stringify(allTheData);
    fs.writeFile('../static/visitorMessageData/message.json',allTheDataStr,function(err){
      if(err){
        res.json({result:'false'});
        console.log('写文件操作失败');
      } else {
        // res.json({result:'sucess'});
        console.log('写文件操作成功');
        res.json({result:'success',message:allTheDataStr});
      }
    });
  });

});
//返回echarts图数据
router.post('/diagram', function(req, res, next) {
  res.json({name:['photoshop','webpack','nodejs','HTML/HTML5','CSS/CSS3','JAVASCRIPT/ES6','JQUERY','VUE2.0','D3.js','ECHARTS'],data:[50,60,70,84, 86, 88, 80, 90,70,75]});
});
module.exports = router;
