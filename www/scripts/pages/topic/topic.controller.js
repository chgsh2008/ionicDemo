'use strict';

angular.module('Webapp')
.controller('topicCtrl', ['$scope', 'topicService', '$ionicLoading', '$stateParams', '$location', '$anchorScroll', '$timeout','$state', function($scope, topicService, $ionicLoading, $stateParams, $location, $anchorScroll, $timeout, $state){

  var count = 1;
  $scope.replies = [];
  $scope.moreDataCanBeLoaded;
  $scope.hasTopics;

  $ionicLoading.show();

  $scope.reply = {
    scrollTo: 1,
    totalItems : 0
  }

  topicService.getTopic($stateParams.id).then(function(response){

    $scope.topics = response.data;
    $scope.hasTopics = response.data && response.data.length;
    $ionicLoading.hide();

  })

  topicService.getReplies($stateParams.id).then(function(response){

    $scope.replies = response.data;

    var i=0,len = response.data.length;
    for(i;i<len;i++){

      if(response.data[i].content_rendered.indexOf("@<a") != -1){
        response.data[i].content_rendered = response.data[i].content_rendered.replace(/\/member\//g,'#/user/');
        response.data[i].content_rendered = response.data[i].content_rendered.replace(/target="_blank"/g,'');
      }

    }

    $ionicLoading.hide();

    if(response.data.length < 10){
      $scope.moreDataCanBeLoaded = false;
    }else{
      $scope.moreDataCanBeLoaded = true;
    }

    if($state.params.scroll === 'true'){
      $timeout( function() {
        $scope.reply.totalItems = response.data.length;
        $scope.$broadcast("items-loaded");
      }, 1000);
    }

  })

  $scope.loadMore = function() {

    topicService.getReplies($stateParams.id, count).then(function(response){

      count = count + 1;
      if(response.data.length == 0){

        $scope.moreDataCanBeLoaded = false;

      }else{

        var i=0,len = response.data.length;
        for(i;i<len;i++){

          if(response.data[i].content_rendered.indexOf("@<a") != -1){
            response.data[i].content_rendered = response.data[i].content_rendered.replace(/\/member\//g,'#/user/');
            response.data[i].content_rendered = response.data[i].content_rendered.replace(/target="_blank"/g,'');
          }

        }

        var i = 0,len = response.data.length;
        for(i;i<len;i++){
          $scope.replies.push(response.data[i]);
        }

      }

      $scope.$broadcast('scroll.infiniteScrollComplete');

    })

  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });

  $scope.reloadPage = function(){
    topicService.getTopic($stateParams.id).then(function(response){

      $scope.topics = response.data;
      $scope.hasTopics = response.data && response.data.length;

    })

    topicService.getReplies($stateParams.id).then(function(response){

      $scope.replies = response.data;

      if(response.data.length < 10){
        $scope.moreDataCanBeLoaded = false;
      }else{
        $scope.moreDataCanBeLoaded = true;
      }

      if($state.params.scroll === 'true'){
        $timeout( function() {
          $scope.reply.totalItems = response.data.length;
          $scope.$broadcast("items-loaded");
        }, 1000);
      }

    })
  }

}])
