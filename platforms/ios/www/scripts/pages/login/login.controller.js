'use strict';

angular.module('Webapp')
.controller('loginCtrl', ['$scope', '$ionicLoading', '$location', 'loginService','$rootScope', function($scope, $ionicLoading, $location, loginService, $rootScope){

  $scope.user = {
    username: '',
    password: ''
  }

  $scope.login = function () {

    $ionicLoading.show();

    loginService.login($scope.user).then(function (response) {

      console.log(response)

      var user = {
        name: response.data.name,
        img: response.data.img
      };

      window.localStorage['user'] = JSON.stringify(user);

      $ionicLoading.hide();

      $rootScope.goBack()

    })

  }

}])
