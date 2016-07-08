'use strict';

angular.module('Webapp')
.controller('indexCtrl', ['$scope','indexService', '$ionicLoading','$ionicSideMenuDelegate', '$location', '$ionicPopup', '$state', '$ionicActionSheet', '$ionicScrollDelegate', '$rootScope',  function($scope, indexService, $ionicLoading, $ionicSideMenuDelegate, $location, $ionicPopup, $state, $ionicActionSheet, $ionicScrollDelegate, $rootScope){

  $rootScope.slideHeader = false;
  $rootScope.slideHeaderPrevious = 0;

  $ionicLoading.show();

  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

  indexService.getLatest().then(function(response){

    $scope.topics = response.data;
    $scope.hasTopics = response.data && response.data.length;
    $ionicLoading.hide();

  })

  $scope.doRefresh = function() {
    var array1 = [],array2 = [],diff = [],diffData = [];
    indexService.getLatest()
     .then(function(response) {

        $scope.topics = response.data;
        $scope.$broadcast('scroll.refreshComplete');

     })

  };

  $scope.showMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  var user = JSON.parse(window.localStorage['user'] || '{}');

  function isEmpty(obj){
    for (var name in obj){
      return false;
    }
    return true;
  };

  if(isEmpty(user)){
    $scope.loginImg = 'img/user.png';
    $scope.logHref  = '#/login'
  }else{
    $scope.loginImg = 'http:' + user.img;
    $scope.logHref  = '#/'
  }

  $scope.toUser = function(){
    if(isEmpty(user)){
      $ionicPopup.alert({
         title: '用户未登陆',
         template: '请先登陆'
       });
    }else{
      $state.go('user', {'member': user.name});
    }
  }

  $scope.actionSheet = function() {

    if(isEmpty(user)){
      return false;
    }else{

      // Show the action sheet
     var hideSheet = $ionicActionSheet.show({
       /*buttons: [
         { text: '<b>Share</b> This' },
         { text: 'Move' }
       ],
       titleText: '注销',*/
       destructiveText: '注销',
       cancelText: 'Cancel',
       cancel: function() {
         return true;
       },
       destructiveButtonClicked: function() {
         localStorage.removeItem("user");
         $scope.loginImg = 'img/user.png';
         $scope.logHref  = '#/login'
         hideSheet();
       }

     });

    }

 };

 $scope.toCollection = function(){
    if(isEmpty(user)){
      $ionicPopup.alert({
         title: '用户未登陆',
         template: '请先登陆'
       });
    }else{
      $state.go('collection.nodes');
    }
  }

  $scope.resize = function(){

    $ionicScrollDelegate.resize();

  }

  $scope.tabChangeLeft = function(){

    $location.path('/hot');

  }

  $scope.tabChangeRight = function(){

    $ionicSideMenuDelegate.toggleLeft();

  }

  $scope.reloadPage = function(){

    indexService.getLatest().then(function(response){

      $scope.topics = response.data;
      $scope.hasTopics = response.data && response.data.length;

    })

  }

}])
