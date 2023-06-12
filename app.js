var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const USER = require("./models/user");

const mongoose = require("mongoose");

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;


// const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
const url = 'mongodb://root:123456@mongodb:27017/docker-db?authSource=admin'
console.log(url);
console.log('inside db connection request');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'))
  .catch(e => console.log(e));

  // Seed data into MongoDB
async function seedData() {
  try {
    const count = await USER.countDocuments();
    if (count === 0) {
      const users = [
        { name: 'John Doe', gender: 'Male', age: 30, city: 'San Fransisco' },
        { name: 'John Smith', gender: 'Male', age: 35, city: 'New York' },
        { name: 'Mary Jane', gender: 'Female', age: 25, city: 'Cincinnati' },
        { name: 'Henry', gender: 'Male', age: 29, city: 'San Fransisco' },
        { name: 'James', gender: 'Male', age: 50, city: 'San Fransisco' },
      ];
      await USER.insertMany(users);
    }
    else {
      console.log('Data already present!!');
    }
  } catch (err) {
    console.error('Cannot seed data right now!', err);
  }
}

seedData();

var app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
