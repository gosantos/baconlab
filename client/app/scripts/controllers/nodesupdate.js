'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NodesupdateCtrl
 * @description
 * # NodesupdateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('NodesupdateCtrl', function ($scope, $routeParams, NodeService) {
  	$scope.title = 'add';

  	$scope.node = NodeService.get({ id: $routeParams.id });	
  	
  	$scope.submitNode = function(){
  		$scope.node.$update();
  	};
  
  });
