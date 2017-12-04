(function()	{

'use strict';

angular.module('MenuApp').config(RoutesConfig);
	




skipIfAuthenticated.$inject=['$q', '$state']
function skipIfAuthenticated($q, $state) {
  var defer = $q.defer();
  if(false) {
    defer.reject(); /* (1) */
  } else {
    defer.resolve(); /* (2) */
  }
  console.log("skip"+$state)
  return defer.promise;
}
 redirectIfNotAuthenticated.$inject=['$q', '$state','$timeout','userService']//funcion para redireccionar si no se esta autenticado
function redirectIfNotAuthenticated($q, $state,$timeout,userService) {
  var defer = $q.defer();
  console.log("estoy aca");
  console.log("usuario es "+userService.getUser());
  if(userService.getUser()!=null) {
    defer.resolve(); /* (3) */
  } else {
  	console.log("deberia redireccionar")
     $timeout(function () {
      $state.go('login'); /* (4) */
    });
    
    defer.reject();
  }
  return defer.promise;
}


	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider',/*'statesService'*/]
	function RoutesConfig($stateProvider,$urlRouterProvider,/*statesService*/)
	{
		//statesService.setStates($state);

		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('login',
			{
				url:'/login',
				templateUrl:'javascript/templates/login.html',
				controller:'LoginController as controller',


				
			}).state('home',
			{

				url:'/home',
				templateUrl:'javascript/templates/home.html',
				controller:'HomeController as controller',
			resolve:{redirectVar:redirectIfNotAuthenticated}//validacion


			}


			)
	}
	
})()


