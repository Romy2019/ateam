var express = require('express');
var userRouter = express.Router();

var addData = require('../controller/user/addData');

userRouter.post('/', addData.addData);
// userRouter.get('/data', addData.getData);

module.exports = userRouter;
