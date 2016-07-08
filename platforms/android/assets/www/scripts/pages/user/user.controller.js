'use strict';

angular.module('Webapp')
.controller('userCtrl', ['$scope', '$ionicLoading', '$location', 'userService', '$stateParams', function($scope, $ionicLoading, $location, userService, $stateParams){

  $ionicLoading.show();
  userService.getUserInfo($stateParams.member).then(function (response) {

    $scope.user = response.data;
    $scope.social = {};

    if (response.data.links.length > 0) {

      var i = 0,len = response.data.imgs.length;
      for(i;i<len;i++){

        if(response.data.imgs[i].indexOf("twitter") > -1){
          $scope.social["twitter"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("mobileme") > -1){
          $scope.social["mobileme"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("location") > -1){
          $scope.social["location"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("psn") > -1){
          $scope.social["psn"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("battletag") > -1){
          $scope.social["battletag"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("twitch") > -1){
          $scope.social["twitch"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("dribbble") > -1){
          $scope.social["dribbble"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("github") > -1){
          $scope.social["github"] = response.data.links[i];
        }
        if(response.data.imgs[i].indexOf("btc") > -1){
          $scope.social["btc"] = response.data.links[i];
        }

      }
    }

    $scope.iconClass = function(value){

      if(value === 'twitter'){
        return "ion-social-twitter"
      }else if(value === 'mobileme'){
        return "ion-earth"
      }else if(value === 'location'){
        return "ion-android-pin"
      }else if(value === 'psn'){
        return "ion-playstation"
      }else if(value === 'battletag'){
        return "ion-ios-game-controller-b"
      }else if(value === 'twitch'){
        return "ion-social-twitch"
      }else if(value === 'dribbble'){
        return "ion-social-dribbble"
      }else if(value === 'github'){
        return "ion-social-github"
      }else if(value === 'btc'){
        return "ion-cash"
      }

    }

    $ionicLoading.hide();

  })

}])
