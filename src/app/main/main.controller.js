(function() {
	'use strict';
	
	angular
        .module('resume')
		.controller('mainController', mainController);
		
	mainController.$inject = ['$translate'];
	
	function mainController ($translate) {
		var vm = this;
		vm.frontend = [
			{key: 'HTML', value: 80},
			{key: 'CSS', value: 90},
			{key: 'Bootstrap', value: 90},
			{key: 'JavaScript', value: 80},
			{key: 'jQuery', value: 70},
			{key: 'AngularJs', value: 80},
			{key: 'Knockout', value: 40},
			{key: 'Telerik', value: 60},
			{key: 'gulp', value: 90},
			{key: 'node.js', value: 60},
			{key: 'less', value: 70}
		];
		
		vm.backend = [
			{key: 'C#', value: 80},
			{key: 'ASP.NET', value: 60},
			{key: 'WCF', value: 50},
			{key: 'SQL', value: 80}
		];
		
		vm.software = [
			{key: 'Photoshop', value: 50},
			{key: 'Illustrator', value: 20},
			{key: 'InDesign', value: 30}
		];
		
		vm.switchLanguage = switchLanguage;		
		function switchLanguage(lang){
			vm.lang = lang;
			$translate.use(lang);
		}
	}
})();