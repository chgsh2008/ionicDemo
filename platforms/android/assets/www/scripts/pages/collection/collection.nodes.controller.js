'use strict';

angular.module('Webapp')
.controller('collectionNodesCtrl', ['$scope', '$ionicLoading','$stateParams', '$location', 'collectionService',  function($scope, $ionicLoading, $stateParams, $location, collectionService){

  $scope.activeClass = function (page) {
    var currentRoute = $location.path().substring(1).slice(11) || 'nodes';
    return page === currentRoute ? 'active' : '';
  };

  $ionicLoading.show();

  collectionService.getLists('nodes').then(function(response){

    $scope.topics = response.data;
    $scope.hasTopics = response.data && response.data.length;
    $ionicLoading.hide();

  })

  $scope.tabChangeLeft = function(){

    $location.path('/collection/topics');

  }

  $scope.reloadPage = function(){

    collectionService.getLists('nodes').then(function(response){

      $scope.nodes = response.data;
      $scope.hasTopics = response.data && response.data.length;

    })

  }

}])
