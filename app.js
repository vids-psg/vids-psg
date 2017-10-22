var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

// for parsing json body data
app.use(bodyParser.json());
// for parsing urlencoded body data
app.use(bodyParser.urlencoded({ extended: false }));
// static host of public folder contents for root
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);

module.exports = app;