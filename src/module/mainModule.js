(function(){
	'use strict';
	angular.module("emailModule",['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/email',{
			templateUrl: 'src/views/email.html',
			controller: 'emailCntrl',
			controllerAs : 'vmEmailCtrl'
		}).otherwise({
        	redirectTo: '/email'
      	});
	}]);;
})();