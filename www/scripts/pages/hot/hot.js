'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('hot', {
        url: '/hot',
        templateUrl: 'scripts/pages/index/index.html',
        controller: 'indexHotCtrl'
      })
  })
