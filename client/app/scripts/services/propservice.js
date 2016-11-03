'use strict';

/**
 * @ngdoc service
 * @name clientApp.propservice
 * @description
 * # propservice
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('PropService', function ($http, $resource) {
    return $resource('http://localhost:3000/api/props/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  });
