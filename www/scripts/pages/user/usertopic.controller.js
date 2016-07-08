'use strict';

angular.module('Webapp')
.controller('usertopicsCtrl', ['$scope', '$ionicLoading', '$state', '$stateParams', 'userService', function($scope, $ionicLoading, $state, $stateParams, userService){

  $ionicLoading.show();

  userService.getUserTopics($stateParams.member).then(function(response){

    $scope.topics = response.data;
    $ionicLoading.hide();

  })

}])
