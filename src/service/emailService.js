(function(){
	'use strict';
	angular.module("emailModule")
	.service('emailService',[
		'$http',
        '$q',
		EmailService
		]);

	function EmailService($http, $q){
		this.$http = $http;
		this.$q = $q;
	}

	EmailService.prototype = {

		sendMail: function(mail){
			var self = this;
			var deferred = self.$q.defer();
			self.$http({
              	method: 'POST',
              	url: '/email/api/sendMail/',
              	headers: { 'Content-Type': 'application/json' },
			  	data: mail
          	}).then(function(result) {
              	deferred.resolve(result.data);
          	});
          	return deferred.promise;
		},

		upload: function(fileName){
			var self = this;
			var deferred = self.$q.defer();
			self.$http({
				method: 'POST',
				url: '/email/api/upload/'+fileName,
				headers: { 'Content-Type': 'application/json' }
			}).then(function(result) {
				deferred.resolve(result.data);
			});
			return deferred.promise;
		}
	}
})();