
//var users = require('../db/users');

var express = require('express');
var router = express.Router();

/** Sending Mail **/
router.post("/sendMail", function(req, res, next) {
    console.log('In post/sendMail');
    /*users.addUser(req.body).then(function(data){
    	res.status(201).json(data);
    });*/

});

module.exports = router;
