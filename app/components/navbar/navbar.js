(function(){

	var navbar ={
		templateUrl:'app/components/navbar/navbar.html',
		controller: navbarController
	}

	function navbarController(){

	}

	angular
		.module('cakedesigner')
		.component('navbarComponent', navbar);
})();