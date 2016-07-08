'use strict';

angular.module('Webapp')
  .config(function($stateProvider){
    $stateProvider
      .state('topic', {
        url: '/topic/:id?scroll',
        templateUrl: 'scripts/pages/topic/topic.html',
        controller: 'topicCtrl'
      })
  })
