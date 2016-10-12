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
      })
      .when('/nodes', {
        templateUrl: 'views/nodes.html',
        controller: 'NodesmanagerCtrl',
        controllerAs: 'nodesCtrl'
      })
      .when('/nodes/create/', {
        templateUrl: 'views/node-create.html',
        controller: 'NodesupdateCtrl',
        controllerAs: 'nodeCreateCtrl'
      })
      .when('/nodes/update/:id', {
        templateUrl: 'views/node-update.html',
        controller: 'NodesupdateCtrl',
        controllerAs: 'nodeUpdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
