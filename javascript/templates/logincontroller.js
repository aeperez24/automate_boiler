(function () {
'use strict';
angular.module('MenuApp').controller('LoginController',LoginController);


LoginController.$inject=["$scope",'userService','$state']
function LoginController(scope,userserivce,state)
{
	var lController=this;
	lController.errorMensaje=null;
	lController.procesar=function()
	{
		var name=scope.name;
		var password=scope.password;

		scope.password="";

		var valid=userserivce.validateUser(name,password);
		if(valid)
		{
			console.log("ok");
			lController.errorMensaje=null;
			state.go('home');
		}
		else
		{
			console.log("invalid user");
			lController.errorMensaje="user is not valid"

		}


	}


}
})();
