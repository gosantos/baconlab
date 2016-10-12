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
  	$scope.nodes = NodeService.getAll();	

  	$scope.removeNode = function(nodeId){
  		NodeService.remove(nodeId);
  	};

});
