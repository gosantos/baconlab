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
    var resource = $resource('http://localhost:3000/nodes/:id');

    return {
      getAll: function () {
        return resource.query();
      },
      save: function(node){
        return resource.save(node);
      },
      get: function(id){
        return resource.get({id: id});
      },
      remove: function(id){
        return resource.remove({id: id});
      }

    };
  });
