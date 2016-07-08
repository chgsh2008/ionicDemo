'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'scripts/pages/index/index.html',
        controller: 'indexCtrl'
      })
  })
