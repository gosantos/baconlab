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
  	$scope.title = 'update';
  	
  	$scope.nodes = NodeService.query();	

  	$scope.removeNode = function(nodeId){
  		NodeService.delete({ id: nodeId }, function(){
  			$scope.nodes = NodeService.query();	
  		});
  	};

});
