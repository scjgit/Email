var express = require('express');
var config = require('./myConfig.json');
var bodyParser = require('body-parser');

var emailApp = express();

emailApp.use(bodyParser.json());
emailApp.use(bodyParser.urlencoded({ extended: false }));

emailApp.listen(config.port, function(req, res){
	console.log('listening... to port: %s',config.port, config.contextroot);
});

emailApp.use(config.contextroot,express.static(__dirname));

emailApp.use(config.contextroot+'/api', require('./server/api/emailApi'));

emailApp.use(function(req, res){
	if(req.path === "/"){
		res.redirect(config.contextroot);
	}
});