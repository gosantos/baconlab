'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:
 * @description
 * # 
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NodesmanagerCtrl', function ($scope, $routeParams, NodeService) {
  	console.log("entering NodesmanagerCtrl");

  	$scope.nodes = NodeService.query();	

  	$scope.removeNode = function(nodeId){
  		console.log("entering $scope.removeNode");

  		NodeService.delete({ id: nodeId }, function(){
  			$scope.nodes = NodeService.query();	
  		});

  		console.log("leaving $scope.removeNode");
  	};
  	
  	console.log("leaving NodesmanagerCtrl");
});
