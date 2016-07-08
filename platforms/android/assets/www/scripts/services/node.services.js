'use strict';

angular.module('Webapp')
  .factory('nodeService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        nodeServiceFactory = {};

    var _getNodes = function(){
      return $http.jsonp(serviceBase + 'v2exNode.php?callback=JSON_CALLBACK').success(function (response) {
        return response
      })
    }

    nodeServiceFactory.getNodes = _getNodes;

    return nodeServiceFactory;

  }]);
