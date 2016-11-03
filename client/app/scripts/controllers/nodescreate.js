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
    console.log('entering NodescreateCtrl');
  	$scope.title = 'add';

  	$scope.node = new NodeService();

  	$scope.submitNode = function(){
      console.log('entering $scope.submitNode');
  		$scope.node.$save();
      console.log('entering $scope.submitNode'); 
  	};
    
    console.log('leaving NodescreateCtrl');
  });
