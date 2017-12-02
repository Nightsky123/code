let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors'); //引入 cors


let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//bodyParser中间件用于接受页面请求
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let index = require('./routes/index');
let users = require('./routes/users');

//中间件 允许跨域 hash
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCrossDomain);

//history
// const staticFileMiddleware = express.static('public');
// app.use(staticFileMiddleware);
// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));
// app.use(staticFileMiddleware);



app.use('/', index);
app.use('/users', users);


app.use(cors({
  origin:['http://localhost:3000'],//域访问
  methods:['GET','POST'],//请求方式
  // alloweHeaders:['application/x-www-form-urlencoded','form-urlencoded']
  alloweHeaders:['x-requested-with', 'content-type', 'accept', 'origin', 'authorization']//两种请求头
}));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//因为headers没设置，导致前端页面请求不对
app.post('/api/allTheMessage', function(req, res, next) {
 let s= req.body;
  console.log(s);
});
module.exports = app;
