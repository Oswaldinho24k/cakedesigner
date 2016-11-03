(function(){
	var footer ={
		templateUrl:'app/components/footer/footer.html', 
		controller:footerController
	}

	function footerController(){

	}

	angular
		.module('cakedesigner')
		.component('footerComponent', footer);
})();