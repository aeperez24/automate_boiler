/*(function(){

'use strict';
angular.module('UserModule').
.service("userService",UserService)




});
*/
(function () {
	// body...
'use strict';
angular.module('StateModule').service("statesService",StatesService);

function StatesService() {
	var service=this;
	service.state=[]
	service.setState=function(states)
	{
		service.state=states;
	}
	service.getState=function()
	{
		return service.state;
	}


}
})();