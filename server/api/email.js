var nodemailer = require('nodemailer');
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
		this.getTransporterInstance().sendMail(this.getMailOptions(), function(error, info){
	        if(error){
	            return console.log('Error: ', error);
	        }
	        console.log('Message sent: ' + info.response);
    	});
	}

}

module.exports = new Email();