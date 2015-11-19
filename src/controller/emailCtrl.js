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
			self.emailService.sendMail()
			.then(function(data){
				console.log(data);
			},function(error){
				console.log(error);
			});
		}
	}

})();