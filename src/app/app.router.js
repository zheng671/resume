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
            })
            .state('default.working', {
                url:'/working',
                templateUrl: 'app/section/working.html'
            })
            .state('default.education', {
                url:'/education',
                templateUrl: 'app/section/education.html'
            })
            .state('default.skill', {
                url:'/skill',
                templateUrl: 'app/section/skill.html'
            })
            .state('default.project', {
                url:'/project',
                templateUrl: 'app/section/project.html'
            });
        $urlRouterProvider.otherwise('/');
    }
})();
