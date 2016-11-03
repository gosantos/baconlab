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
    'ngRoute',
    'ngmqtt'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/nodes', {
        templateUrl: 'views/nodes.html',
        controller: 'NodesmanagerCtrl',
      })
      .when('/nodes/create/', {
        templateUrl: 'views/node-create.html',
        controller: 'NodescreateCtrl',
      })
      .when('/nodes/update/:id', {
        templateUrl: 'views/node-update.html',
        controller: 'NodesupdateCtrl',
      })
      .when('/nodes/props/create/:id', {
        templateUrl: 'views/prop-create.html',
        controller: 'PropscreateCtrl',
      })
      .when('/mqtt', {
        templateUrl: 'views/mqtt.html',
        controller: 'MqttCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });

  }).run(function($rootScope, $location){
    $rootScope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
