'use strict';

angular.module('Webapp')
  .factory('indexService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        indexServiceFactory = {};

    var _getLatest = function(){
      return $http.jsonp(serviceBase + 'v2ex.php?callback=JSON_CALLBACK&latest=true').success(function (response) {
        return response
      })
    }

    var _getHot = function(){
      return $http.jsonp(serviceBase + 'v2ex.php?callback=JSON_CALLBACK&hot=true').success(function (response) {
        return response
      })
    }

    indexServiceFactory.getLatest = _getLatest;
    indexServiceFactory.getHot    = _getHot;

    return indexServiceFactory;

  }]);
