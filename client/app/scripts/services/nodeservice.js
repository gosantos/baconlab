'use strict';

/**
 * @ngdoc service
 * @name clientApp.nodeService
 * @description
 * # nodeService
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('NodeService', function ($http, $resource) {
    return $resource('http://localhost:3000/nodes/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  });
