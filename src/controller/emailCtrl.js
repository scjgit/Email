(function(){
	'use strict';
	angular.module("emailModule")
	.controller("emailCntrl",[
		'emailService',
		EmailCntrl
	]);

	function EmailCntrl(emailService){
		this.emailService = emailService;
		this.file;
	}

	EmailCntrl.prototype = {

		sendMail: function(){
			var self = this;
			console.log(this.file);
			self.emailService.sendMail(self.file)
			.then(function(data){
				console.log(data);
			},function(error){
				console.log(error);
			});
		}
	}

})();