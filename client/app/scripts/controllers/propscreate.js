'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PropcreateCtrl
 * @description
 * # PropcreateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PropscreateCtrl', function ($scope, $routeParams, $window, PropService) {

  	const nodeId = $routeParams.id;

  	$scope.title = 'add';
  	$scope.prop = new PropService();

  	$scope.submitProp = function(){
  		$scope.prop._creator = nodeId;
  		$scope.prop.$save(function(){
  			$location.url(`#/nodes/${nodeId}`);
  		});
  	};
  	
  });
