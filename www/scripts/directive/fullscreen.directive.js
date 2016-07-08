'use strict';

angular.module('Webapp')
.directive('fullScreen', ['$window', function($window) {

    return {
        restrict: 'A',

        link: function (scope, elem, attrs) {

            var winHeight = $window.innerHeight;

            var headerHeight = attrs.header ? attrs.header : 0;

            elem.css('height', winHeight - headerHeight + 'px');
        }
    };
}]);
