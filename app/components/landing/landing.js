(function(){


	var landing ={

		templateUrl : 'app/components/landing/landing.html',
		controller:landingController
	}

	function landingController(){
			


	} //controller

	angular
	.module('cakedesigner')
	.component('landingComponent',landing);

})()