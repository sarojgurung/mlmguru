// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'firebase', 'ngCordova', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/options.html',
    controller: 'AppCtrl'
  })

  
  .state('app.mainmenu', {
    url: '/mainmenu',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu.html',
        controller: 'MainMenuCtrl'
      }
    }
  })

    .state('app.submenu', {
      url: '/mainmenu/:mainmenu',
      views: {
        'menuContent': {
          templateUrl: 'templates/submenu.html',
          controller: 'SubMenuCtrl'
        }
      }
    })

      .state('app.content', {
        url: '/mainmenu/:mainmenu/:submenu',
        views: {
          'menuContent': {
            templateUrl: 'templates/content.html',
            controller: 'ContentCtrl'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/mainmenu');
});
