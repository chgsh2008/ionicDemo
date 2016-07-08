'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('node', {
        url: '/node',
        templateUrl: 'scripts/pages/node/node.html',
        controller: 'nodeCtrl'
      })
  })
