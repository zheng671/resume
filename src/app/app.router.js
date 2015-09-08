(function() {
    'use strict';

    angular
        .module('resume')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('default', {
				abstract: true,
                templateUrl: 'app/layout/layout.html',
                controller: 'mainController as vm'
            })            
            .state('default.index', {
				url:'/',
                templateUrl: 'app/main/main.html'
            });
        $urlRouterProvider.otherwise('/');
    }
})();
