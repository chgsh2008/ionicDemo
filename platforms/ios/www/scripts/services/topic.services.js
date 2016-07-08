'use strict';

angular.module('Webapp')
  .factory('topicService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        topicServiceFactory = {};

    var _getTopic = function(postData){
      return $http.jsonp(serviceBase + 'v2ex.php?callback=JSON_CALLBACK&topic=' + postData).success(function (response) {
        return response
      })
    }

    var _getReplies = function(postData,page){
      return $http.jsonp(serviceBase + 'v2exp.php?callback=JSON_CALLBACK&replies=' + postData + '&page=' + page).success(function (response) {
        return response
      })
    }

    topicServiceFactory.getTopic = _getTopic;
    topicServiceFactory.getReplies = _getReplies;

    return topicServiceFactory;

  }]);
