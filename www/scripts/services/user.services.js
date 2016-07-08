'use strict';

angular.module('Webapp')
  .factory('userService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        userServiceFactory = {};

    var _getUserInfo = function(postData){
      return $http.jsonp(serviceBase + 'v2exUser.php?callback=JSON_CALLBACK&username=' + postData).success(function (response) {
        return response
      })
    }

    var _getUserTopics = function(postData){
      return $http.jsonp(serviceBase + 'v2exusertopic.php?callback=JSON_CALLBACK&user=' + postData).success(function (response) {
        return response
      })
    }

    var _getUserReplies = function(postData){
      return $http.jsonp(serviceBase + 'v2exuserreplies.php?callback=JSON_CALLBACK&user=' + postData).success(function (response) {
        return response
      })
    }

    userServiceFactory.getUserInfo = _getUserInfo;
    userServiceFactory.getUserTopics = _getUserTopics;
    userServiceFactory.getUserReplies = _getUserReplies;

    return userServiceFactory;

  }]);
