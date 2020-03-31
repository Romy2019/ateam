const con = require("./connection/connection");
const middleware = ("./middleware/");
//middleware

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const data = require('./routes/users');
const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/',data)
module.exports = app;

