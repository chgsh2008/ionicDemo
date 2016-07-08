'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('user', {
        url: '/user/:member',
        templateUrl: 'scripts/pages/user/user.html',
        controller: 'userCtrl'
      })
      .state('user.topics', {
        url: '/topics',
        templateUrl: 'scripts/pages/user/usertopics.html',
        controller: 'usertopicsCtrl'
      })
      .state('user.replies', {
        url: '/replies',
        templateUrl: 'scripts/pages/user/userreplies.html',
        controller: 'userrepliesCtrl'
      })
  })
