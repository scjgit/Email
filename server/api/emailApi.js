var express = require('express');
var router = express.Router();
var config = require('./../../myConfig.json');
var fs = require('fs');
var nodemailer = require('nodemailer');

/** Sending Mail **/
router.post("/sendMail", function(req, res, next) {
    console.log('In post/sendMail');
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
    sendMail();
    res.status(201);
});

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Mandrill',
    auth: {
        user: 'goingon26@gmail.com',
        pass: 'going4misc'
    }
});

var mailOptions = {
    from: 'Test <sallapcjoseph@gmail.com>', // sender address
    to: 'schackojoseph@expedia.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

var sendMail = function(){
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log('Error: ', error);
        }
        console.log('Message sent: ' + info.response);

    });
}

module.exports = router;
