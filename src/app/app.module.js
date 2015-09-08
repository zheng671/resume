(function () {
    'use strict';

    var app = angular.module('resume', ['ui.router', 'pascalprecht.translate', 'angular-svg-round-progress']);
    apprun.$inject = ['$rootScope'];
    app.run(apprun);
    
    function apprun($rootScope) {
    }
})();
