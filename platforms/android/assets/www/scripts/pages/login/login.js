'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'scripts/pages/login/login.html',
        controller: 'loginCtrl'
      })
  })
