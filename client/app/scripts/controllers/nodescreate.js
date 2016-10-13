'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NodescreateCtrl
 * @description
 * # NodescreateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NodescreateCtrl', function ($scope, NodeService) {
  	$scope.title = 'add';

  	$scope.node = new NodeService();

  	$scope.submitNode = function(){
  		$scope.node.$save();
  	};

  });
