'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:nodeForm
 * @description
 * # nodeForm
 */
angular.module('clientApp')
  .directive('nodeForm', function (NodeService, $routeParams) {

    return {
      templateUrl: '../views/node-form.html',
      scope: { 
      	node: NodeService.get($routeParams.id) 
      },
      restrict: 'E'
    };
  });
