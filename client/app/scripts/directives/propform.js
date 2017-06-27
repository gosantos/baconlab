'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:propform
 * @description
 * # propform
 */
angular.module('clientApp')
  .directive('propForm', function () {
    return {
        transclude: true,
        templateUrl: '../views/prop-form.html',
	    restrict: 'E'
    };
  });
