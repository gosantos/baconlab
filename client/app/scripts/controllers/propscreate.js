'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PropcreateCtrl
 * @description
 * # PropcreateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PropscreateCtrl', function ($scope, $routeParams, $location, PropService) {
  	console.log("entering PropscreateCtrl");
  	$scope.title = 'add';

  	$scope.prop = new PropService();

  	$scope.submitNode = function(){
  		console.log("entering $scope.submitNode");
  		$scope.prop._creator = $routeParams.id;
  		$scope.prop.$save();
      $location.url('http://www.google.com');
  		console.log("leaving $scope.submitNode");
  	};
  	
  	console.log("leaving PropscreateCtrl");
  });
