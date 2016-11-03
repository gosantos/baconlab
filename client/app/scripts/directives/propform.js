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
      templateUrl: '../views/prop-form.html',
      restrict: 'E'
    };
  });
