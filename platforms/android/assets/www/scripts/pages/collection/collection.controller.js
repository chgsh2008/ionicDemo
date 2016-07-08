'use strict';

angular.module('Webapp')
.controller('collectionCtrl', ['$scope', '$ionicLoading', '$stateParams', '$location', 'collectionService', '$state', '$rootScope', function($scope, $ionicLoading, $stateParams, $location, collectionService, $state, $rootScope){

  $location.path('/collection/nodes');

  $rootScope.slideHeader = false;
  $rootScope.slideHeaderPrevious = 0;

  $scope.activeClass = function (page) {
    var currentRoute = $location.path().substring(1).slice(11) || 'nodes';
    return page === currentRoute ? 'active' : '';
  };

}])
