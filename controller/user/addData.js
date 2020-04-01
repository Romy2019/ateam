const express = require('express');
const addUser = require('../../models/userTable');
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");

exports.addData = function(req, res) {
        const addData = new addUser.userTable(req.body);
        addData.save(function (err, success) {
            if (err) {
                res.status(402).json({message:'data not saved'})
            } else {
                res.status(200).json({Message:"Successfully inserted data",Name:success.userName,
                Email:success.userEmail,
                Age:success.userAge,
                DOB:success.userDob, Photo:success.userPhoto})
            }
        });

    };
// exports.getData = function(req, res) {
//     const addData = new addUser.userTable;
//     addData.find(function (err, success) {
//         if (err) {
//             res.status(402).json({message:'data not saved'})
//         } else {
//             res.status(200).json({data:success})
//         }
//     });
//
// };