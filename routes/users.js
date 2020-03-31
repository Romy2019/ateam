var express = require('express');
var userRouter = express.Router();

var addData = require('../controller/user/addData');

userRouter.post('/', addData.addData);

module.exports = userRouter;
