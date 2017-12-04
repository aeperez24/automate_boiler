(function () {
'use strict';
angular.module('MenuApp').controller('MainMenuController',MainMenuController);

MainMenuController.$inject=['$scope','statesService','$rootScope']//funcion para redireccionar si no se esta autenticado
function MainMenuController($scope,statesService,$rootScope)
{
	var contrl=this;
	contrl.showMenu=statesService.getState()!=="/login";
	contrl.stateAux=$rootScope.stateAux;

}
})();
