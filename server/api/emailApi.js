var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('./../../myConfig.json');
var email = require('./Email');

/** Sending Mail **/
router.post("/sendMail", function(req, res, next) {
    console.log('In post/sendMail');
    var data = email.sendMail();
    res.end(data);
});

router.post("/upload", function(req, res, next){
    var fileStream;
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldName, file, filename){
        console.log(filename);
        fileStream = fs.createWriteStream(config.uploadFilePath+'/files/'+filename);
        file.pipe(fileStream);
        fileStream.on('close', function(){
            res.redirect('back');
        });
    });
    res.status(201);
});


module.exports = router;
