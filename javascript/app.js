(function () {
	// body...
'use strict';
var app=angular.module('MenuApp',['ui.router','UserModule','ngMaterial','StateModule']);
app.run(["$rootScope","$state","statesService","userService",function($rootScope,$state,stateService,userService) 
{

	$rootScope.$on('$stateChangeStart',
        function(state,toState){
        	console.log(toState.url);
        	console.log("execute");
        	$rootScope.stateAux=toState.url;
        	stateService.setState(toState.url);
        	
		 $rootScope.showMenu=(userService.getUser()!=null&&toState.url!="/login");//segunda condicion inecesaria cuando agrege el skip if auntenticated       
        });


}]);


})();
