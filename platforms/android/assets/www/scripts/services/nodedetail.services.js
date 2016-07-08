'use strict';

angular.module('Webapp')
  .factory('nodedetailService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        nodedetailServiceFactory = {};

    var _getNode = function(postData){
      return $http.jsonp(serviceBase + 'v2exnodedetail.php?callback=JSON_CALLBACK&node_name=' + postData).success(function (response) {
        return response
      })
    }

    nodedetailServiceFactory.getNode = _getNode;

    return nodedetailServiceFactory;

  }]);
