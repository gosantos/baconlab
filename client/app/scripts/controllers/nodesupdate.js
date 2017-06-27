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
    
    $scope.title = 'update';
    $scope.node   = NodeService.get({ id: $routeParams.id }); 
    $scope.props  = PropService.query({ _creator: $routeParams.id });

    ngmqtt.connect('ws://127.0.0.1:1884');

    $scope.publish = function(prop){
      const topic = prop.name;
      const message = prop.value;
      ngmqtt.listenConnection("NodesupdateCtrl", function(){
        ngmqtt.publish(`/${$routeParams.id}/${topic}`, message.toString());
      });
    };

    $scope.subscribe = function(topic){
      ngmqtt.listenConnection("NodesupdateCtrl", function(){
        ngmqtt.subscribe(`/${$routeParams.id}/${topic}`);
      });
    };

    $scope.subscribeAll = function(){
      ngmqtt.listenConnection("NodesupdateCtrl", function(){
        ngmqtt.subscribe(`/${$routeParams.id}/#`);
      });
    };

    $scope.removeProp = function(prop){
      prop.$delete(function(){
        $scope.props  = PropService.query({ _creator: $routeParams.id });
      });
    };

    $scope.submitNode = function(){
      angular.forEach($scope.props, function(prop){
        prop.$update();
      });

      $scope.node.$update();
    };

    ngmqtt.listenMessage("NodesupdateCtrl", function(topic, message){
      const [ , _creator, name ] = topic.split('/');

      PropService.query({ _creator: _creator, name: name}, function(props){
        let [ prop ] = props;

        prop.value = message.toString();
        prop.$update(function(){
          $scope.props  = PropService.query({ _creator: $routeParams.id });
        });
      
      });
    
    });

});
