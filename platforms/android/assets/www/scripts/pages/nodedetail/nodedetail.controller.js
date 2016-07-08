'use strict';

angular.module('Webapp')
.controller('nodedetailCtrl', ['$scope', 'topicService', '$ionicLoading', '$state', '$stateParams', 'nodedetailService', function($scope, topicService, $ionicLoading, $state, $stateParams, nodedetailService){

  $ionicLoading.show();

  nodedetailService.getNode($stateParams.node_name).then(function(response){

    $scope.topics = response.data;
    $scope.hasTopics = response.data && response.data.length;
    $ionicLoading.hide();

  })

  $scope.reloadPage = function(){

    nodedetailService.getNode($stateParams.node_name).then(function(response){

      $scope.topics = response.data.nodes;
      $scope.hasTopics = response.data && response.data.length;

    })

  }

}])
