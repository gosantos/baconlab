'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NodesupdateCtrl
 * @description
 * # NodesupdateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NodesupdateCtrl', function ($scope, $routeParams, NodeService, PropService) {
    console.log('entering NodesupdateCtrl');
  	
    $scope.title = 'update';
  	
  	$scope.node = NodeService.get({ id: $routeParams.id });	

    $scope.removeProp = function(propId){
      console.log('entering $scope.removeProp');

      PropService.delete({ id: propId }, function(){
        $scope.node = NodeService.get({ id: $routeParams.id });
      });
      
      console.log('leaving $scope.removeProp');
    };


  	$scope.submitNode = function(){
    	console.log('entering $scope.submitNode');

  		$scope.node.$update(function(){
        $scope.node = NodeService.get({ id: $routeParams.id });
      });
      
    	console.log('leaving $scope.submitNode');
  	};
    
    console.log('leaving NodesupdateCtrl');
});
