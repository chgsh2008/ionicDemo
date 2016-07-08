'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('cat', {
        url: '/cat/:catname',
        templateUrl: 'scripts/pages/cat/cat.html',
        controller: 'catCtrl'
      })
  })
