'use strict';

angular.module('Webapp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('collection', {
        url: '/collection',
        templateUrl: 'scripts/pages/collection/collection.html',
        controller: 'collectionCtrl'
      })
      .state('collection.nodes', {
        url: '/nodes',
        templateUrl: 'scripts/pages/collection/nodes.html',
        controller: 'collectionNodesCtrl'
      })
      .state('collection.topics', {
        url: '/topics',
        templateUrl: 'scripts/pages/collection/topics.html',
        controller: 'collectionTopicsCtrl'
      })
      .state('collection.following', {
        url: '/following',
        templateUrl: 'scripts/pages/collection/following.html',
        controller: 'collectionFollowingCtrl'
      })
  })
