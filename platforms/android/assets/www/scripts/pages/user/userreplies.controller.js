'use strict';

angular.module('Webapp')
.controller('userrepliesCtrl', ['$scope', '$ionicLoading', '$state', '$stateParams', 'userService', function($scope, $ionicLoading, $state, $stateParams, userService){

  $ionicLoading.show();

  userService.getUserReplies($stateParams.member).then(function(response){

    $scope.replies = response.data;
    $ionicLoading.hide();

  })

}])
