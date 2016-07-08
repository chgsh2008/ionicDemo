'use strict';

angular.module('Webapp')
  .factory('catService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        catServiceFactory = {};

    var _getNodeList = function(postData){
      return $http.jsonp(serviceBase + 'v2excats.php?callback=JSON_CALLBACK&tab=' + postData).success(function (response) {
        return response
      })
    }

    catServiceFactory.getNodeList = _getNodeList;

    return catServiceFactory;

  }]);
