'use strict';

angular.module('Webapp')
.directive('reloadAnimate', ['$ionicGesture', function($ionicGesture) {

    return {
        restrict: 'A',

        link: function (scope, elem, attrs) {

          $ionicGesture.on('tap', reloadAnimate, elem);

          function reloadAnimate(elem){
            angular.element(document.querySelector('.reload-animate')).removeClass("stop");
            angular.element(document.querySelector('.reload-animate-inner')).removeClass("stop");
            scope.reloadPage();
          }

        }
    };
}]);
