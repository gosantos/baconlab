'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NodemanagerCtrl
 * @description
 * # NodemanagerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NodemanagerCtrl', function ($scope, $routeParams, NodeService) {
  	$scope.nodes = NodeService.getAll();	

	$scope.node = {
		name: "",
		intefrace: "",
		address: "",
		lastHeartbeat: ""
	}

  	$scope.removeNode = function(nodeId){
  		NodeService.remove(nodeId);
  	}

});
