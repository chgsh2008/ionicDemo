'use strict';

angular.module('Webapp')

.directive("delayedScroll",['$location', '$ionicScrollDelegate', '$timeout','$window', function($location, $ionicScrollDelegate, $timeout, $window) {

  return {
    restrict : "A",
    link : function(scope, elem, attrs) {

      var monitorChildren = function() {
        return elem.children().length;
      };

      scope.$on("items-loaded", function() {

        scope.$watch(monitorChildren, function(result) {

          if( parseInt(result,10) == parseInt(attrs.totalItems, 10) ) {
            $location.hash(attrs.scrollTo);
            $ionicScrollDelegate.anchorScroll();
            $timeout(function() {
              $window.history.back();
            }, 300);
          }

        });

      });

    }
  }

}])
