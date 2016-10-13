'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:nodeForm
 * @description
 * # nodeForm
 */
angular.module('clientApp')
  .directive('nodeForm', function () {

    return {
      templateUrl: '../views/node-form.html',
      restrict: 'E'
    };
  });
