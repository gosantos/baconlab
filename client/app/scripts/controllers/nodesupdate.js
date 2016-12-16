'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NodesupdateCtrl
 * @description
 * # NodesupdateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NodesupdateCtrl', function ($scope, $routeParams, ngmqtt, NodeService, PropService) {

    console.log('entering NodesupdateCtrl');
    
    $scope.title = 'update';

    $scope.node   = {};
    $scope.props  = {};

    function _init(){
      $scope.node   = NodeService.get({ id: $routeParams.id }); 
      $scope.props  = PropService.query({ _creator: $routeParams.id });
    }

    ngmqtt.connect('https://cpsiot.cs.uni-kl.de', { port: 9001, protocolVersion: 4 });

    $scope.subscribeAll = function(topic){
      console.log('entering $scope.subscribe');

      ngmqtt.listenConnection("NodesupdateCtrl", function(){
        console.log("entering listenConnection");
        
        ngmqtt.subscribe('/'+$routeParams.id+'/'+topic);
        
        console.log("leaving listenConnection");
      });

      console.log('leaving $scope.subscribe');

    };

    $scope.subscribeAll = function(){
      console.log('entering $scope.subscribeAll');

      ngmqtt.listenConnection("NodesupdateCtrl", function(){
        console.log("entering listenConnection");
        
        ngmqtt.subscribe('/'+$routeParams.id+"/#");
        
        console.log("leaving listenConnection");
      });

      console.log('leaving $scope.subscribeAll');

    };


    $scope.removeProp = function(prop){
      console.log('entering $scope.removeProp');

      prop.$delete();
      
      console.log('leaving $scope.removeProp');
    };


    $scope.submitNode = function(){
      console.log('entering $scope.submitNode');

      angular.forEach($scope.props, function(prop){
        prop.$update();
      });

      $scope.node.$update();

      console.log('leaving $scope.submitNode');
    };

    ngmqtt.listenMessage("NodesupdateCtrl", function(topic, message){
      console.log("entering listenMessage");

      var requestParameters = topic.split("/");
      
      if (requestParameters[1] && requestParameters[2]){
        PropService.get({ _creator: requestParameters[1] , name: requestParameters[2]}, function(prop){
          prop.value = message.toString();
          PropService.update({ id: prop._id }, prop, function(){
            $scope.props = PropService.query({ _creator: $routeParams.id });
          });
        });
      }

      console.log("leaving listenMessage");
    });

    _init();

    console.log('leaving NodesupdateCtrl');
});
