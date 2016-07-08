'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('Webapp', ['ionic', 'config', 'ui.router', 'ngAnimate'])

.run(['$ionicPlatform', '$window', '$rootScope', '$ionicPopup', '$location', function($ionicPlatform, $window, $rootScope, $ionicPopup, $location) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });

  $rootScope.goBack = function(){
    $window.history.back();
  }

  //主页面显示退出提示框
  $ionicPlatform.registerBackButtonAction(function (e) {

      e.preventDefault();

      function showConfirm() {
          var confirmPopup = $ionicPopup.confirm({
              title: '<strong>退出应用?</strong>',
              template: '你确定要退出应用吗?',
              okText: '退出',
              cancelText: '取消'
          });

          confirmPopup.then(function (res) {
              if (res) {
                ionic.Platform.exitApp();
              } else {
                return false;
              }
          });
      }

      // Is there a page to go back to?
      if ($location.path() == '/' ) {
          showConfirm();
      } else if ($rootScope.$viewHistory.backView ) {
          //console.log('currentView:', $rootScope.$viewHistory.currentView);
          // Go back in history
          $rootScope.$viewHistory.backView.go() || $rootScope.goBack();
      } else {
          // This is the last page: Show confirmation popup
          showConfirm();
      }

      return false;
  }, 101);

}]);

app
  .config(function($urlRouterProvider){
    $urlRouterProvider
      .otherwise('/');
  })

app
  .constant('$ionicLoadingConfig', {
    template: '<div class="spinner">' +
                '<div class="bounce1"></div>' +
                '<div class="bounce2"></div>' +
                '<div class="bounce3"></div>' +
              '</div><br/>' +
              'Loading...',
    duration: '10000'
  });
