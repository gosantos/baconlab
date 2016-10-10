'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NodemanagerCtrl',
        controllerAs: 'nodeCtrl'
      })
      .when('/nodes', {
        templateUrl: 'views/nodes.html',
        controller: 'NodemanagerCtrl',
        controllerAs: 'nodeCtrl'
      })
      .when('/node/:id', {
        templateUrl: 'views/node.html',
        controller: 'NodemanagerCtrl',
        controllerAs: 'nodeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
