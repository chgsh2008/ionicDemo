'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('nodedetail', {
        url: '/nodedetail/:node_name',
        templateUrl: 'scripts/pages/nodedetail/nodedetail.html',
        controller: 'nodedetailCtrl'
      })
  })
