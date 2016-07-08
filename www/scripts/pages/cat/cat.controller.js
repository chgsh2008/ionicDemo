'use strict';

angular.module('Webapp')
.controller('catCtrl', ['$scope', '$ionicLoading', 'catService', '$stateParams', '$location','$ionicScrollDelegate', function($scope, $ionicLoading, catService, $stateParams, $location, $ionicScrollDelegate){

  $scope.names = [
    { "name" : "技术", "taburl": "tech" },
    { "name" : "创意", "taburl": "creative" },
    { "name" : "好玩", "taburl": "play" },
    { "name" : "Apple", "taburl": "apple" },
    { "name" : "酷工作", "taburl": "jobs" },
    { "name" : "交易", "taburl": "deals" },
    { "name" : "城市", "taburl": "city" },
    { "name" : "问与答", "taburl": "qna" },
    { "name" : "最热", "taburl": "hot" },
    { "name" : "全部", "taburl": "all" },
    { "name" : "R2", "taburl": "r2" },
  ]

  var location = $location.hash($stateParams.catname);
  $ionicScrollDelegate.anchorScroll('#' + location);

  $ionicLoading.show();

  catService.getNodeList($stateParams.catname).then(function(response){

    $scope.nodes = response.data;
    $scope.hasTopics = response.data && response.data.length;
    $ionicLoading.hide();

  })

  $scope.activeClass = function (page) {
    var currentRoute = $location.path().substring(1).slice(4) || 'tech';
    return page === currentRoute ? 'scrolltabsactive' : '';
  };

  $scope.tabChangeLeft = function(){

    var url = "";

    angular.forEach($scope.names, function(v, k){

      if(v.taburl == $location.path().substring(1).slice(4)){
        if($scope.names[k+1].taburl === null){
          url = $scope.names[k];
        }else{
          url = $scope.names[k+1];
        }

      }

    })

    $location.path('/cat/' + url.taburl);

  }

  $scope.tabChangeRight = function(){

    var i = 0,len = $scope.names.length;
    for(i;i<len;i++){

      if($scope.names[i].taburl == $location.path().substring(1).slice(4)){

        if(typeof($scope.names[i-1]) === "undefined"){
          return false;
        }else{
          $location.path('/cat/' + $scope.names[i-1].taburl);
        }

      }

    }

  }

  $scope.reloadPage = function(){

    catService.getNodeList($stateParams.catname).then(function(response){

      $scope.nodes = response.data;
      $scope.hasTopics = response.data && response.data.length;

    })

  }

}])
