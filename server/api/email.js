var nodemailer = require('nodemailer');
var Q = require('q');
var config = require('./../../myConfig.json');

function Email(){	
}

Email.prototype = {

	getMailOptions: function(){
		return {
		    from: '<one-friend@gmail.com>', // sender address
		    to: 'sallapcjoseph@gmail.com', // list of receivers
		    subject: 'Hello', // Subject line
		    text: 'Hello World', // plaintext body
		    html: '<b>Hello World</b>', // html body
		    attachments: [
		    	{
		    		path: config.uploadFilePath+'/files/*'
		    	}
		    ]
		};
	},

	getTransporterInstance: function(){
		var transport = nodemailer.createTransport({
		    service: config.email.service, //email service like gmail
		    auth: {
		        user: config.email.username, // username
		        pass: config.email.password // password
		    }
		});
		return transport;
	},

	sendMail: function(){
		var deferred = Q.defer();
		this.getTransporterInstance().sendMail(this.getMailOptions(), function(error, info){
	        if(error){
	        	console.log('Error: ', error);
	        	deferred.reject(error);
	        	return;
	        }
	        console.log('Message sent: ' + info.response);
	        deferred.resolve(info.response);
    	});
		return deferred.promise;
	}

}

module.exports = new Email();