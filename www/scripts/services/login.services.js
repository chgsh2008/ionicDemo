'use strict';

angular.module('Webapp')
  .factory('loginService', ['$http', function ($http) {

    var serviceBase = 'http://www.bellyang.com/api/',
        loginServiceFactory = {};

    var _login = function(postData){
      return $http({
        method: 'POST',
        url: serviceBase + 'v2exLogin.php',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        },
        data: {username: postData.username, password: postData.password}
      }).success(function (response) {
        return response
      });
    }

    loginServiceFactory.login = _login;

    return loginServiceFactory;

  }]);
