angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})

.controller('MainMenuCtrl', function($scope, $firebaseObject, $cordovaProgress) {
// .controller('MainMenuCtrl', function($scope, $firebaseObject) {
  //$cordovaProgress.showSimple(true);
  $scope.mainMenu = [];
  firebase.database().ref().once('value').then(function(snapshot) {
    $scope.mainMenuData = snapshot.val();
    angular.forEach($scope.mainMenuData, function(value, key) {
      heading = key.substring(1, key.length);
      $scope.mainMenu.push({'title': key, 'heading': heading});
    });
    $scope.$apply();
    //$cordovaProgress.hide();
  });

})

.controller('SubMenuCtrl', function($scope, $stateParams, $firebaseObject, $cordovaProgress) {
  //$cordovaProgress.showSimple(true);
  $scope.pageTitle = $stateParams.mainmenu.substring(1, $stateParams.mainmenu.length);
  $scope.subMenu = [];
  firebase.database().ref().once('value').then(function(snapshot) {
    $scope.subMenuData = snapshot.val()[$stateParams.mainmenu];
    angular.forEach($scope.subMenuData, function(value, key) {
      heading = key.substring(1, key.length);
      $scope.subMenu.push({'title': key, 'heading': heading, 'parent': $stateParams.mainmenu});
    });
    $scope.$apply();
    //$cordovaProgress.hide();
  });
})

.controller('ContentCtrl', function($scope, $stateParams, $firebaseObject, $compile, $cordovaProgress) {
  //$cordovaProgress.showSimple(true);
  $scope.pageTitle = $stateParams.submenu.substring(1, $stateParams.submenu.length);
  // var ref = firebase.database().ref();
  // download the data into a local object
  // $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  firebase.database().ref().once('value').then(function(snapshot) {
    $scope.pageContent = snapshot.val()[$stateParams.mainmenu][$stateParams.submenu];
    
    $scope.$apply();
    //$cordovaProgress.hide();
  });

});
