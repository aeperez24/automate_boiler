/*(function(){

'use strict';
angular.module('UserModule').
.service("userService",UserService)




});
*/
(function () {
	// body...
'use strict';
angular.module('UserModule').service("userService",UserService);

function UserService() {

	var service=this;
	this.user=null;

	

	service.getUser=function()
	{
		return service.user;
	}

	service.validateUser=function(name,password)
	{
		if(name=="andres"&&password=="123")//DUMMIE, CHANGE FOR REST
		{
			var usuario=[]
			usuario.name=name;
			usuario.password=password;
			service.user=name;
			console.log("deberia haber guardado");
			return true;
		}
		else{
			return false;
		}
	}
}
})();