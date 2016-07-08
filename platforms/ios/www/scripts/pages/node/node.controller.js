'use strict';

angular.module('Webapp')
.controller('nodeCtrl', ['$scope', '$ionicLoading', '$location','nodeService', '$ionicScrollDelegate',  function($scope, $ionicLoading, $location, nodeService, $ionicScrollDelegate){

  $ionicLoading.show();

  nodeService.getNodes().then(function(response){

    $scope.nodes = response.data.nodes;
    $scope.hasTopics = true;
    $ionicLoading.hide();
    $scope.$broadcast("lists-loaded");

  })

  $scope.resize = function(){

    $ionicScrollDelegate.resize();

  }

  $scope.reloadPage = function(){

    nodeService.getNodes().then(function(response){

      $scope.nodes = response.data.nodes;
      $scope.hasTopics = response.data && response.data.length;
      $scope.$broadcast("lists-loaded");

    })

  }

}])
