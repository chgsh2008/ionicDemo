'use strict';

angular.module('Webapp')
  .factory('collectionService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        collectionServiceFactory = {};

    var _getLists = function(postData){
      return $http.jsonp(serviceBase + 'v2excollection.php?callback=JSON_CALLBACK&collection=' + postData).success(function (response) {
        return response
      })
    }

    collectionServiceFactory.getLists = _getLists;

    return collectionServiceFactory;

  }]);
