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
                res.status(200).json({message:'data saved'})

            }
        });

    };
