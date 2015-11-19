var nodemailer = require('nodemailer');

function Email(){	
}

Email.prototype = {

	getMailOptions: function(){
		return {
		    from: 'Test <xxxxx@gmail.com>', // sender address
		    to: 'sallapcjoseph@gmail.com', // list of receivers
		    subject: 'Hello', // Subject line
		    text: 'Hello Worl', // plaintext body
		    html: '<b>Hello world</b>', // html body
		    attachments: [
		    	{
		    		path: 'E:/My Workspace/files/Cheat Codes.pdf'
		    	}
		    ]
		};
	},

	getTransporterInstance: function(){
		var transport = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: 'xxxxx', // username
		        pass: 'xxxx' // password
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