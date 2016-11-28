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
    
    $scope.node = NodeService.get({ id: $routeParams.id }); 

    ngmqtt.connect('https://cpsiot.cs.uni-kl.de', { port: 9001, protocolVersion: 4 });

    $scope.subscribe = function(topic){
      console.log('entering $scope.subscribe');

      ngmqtt.listenConnection("NodesupdateCtrl", function(){
        console.log("entering listenConnection");
        
        console.log(topic);

        ngmqtt.subscribe("/rasp/" + topic);
        
        console.log("leaving listenConnection");
      });

      console.log('leaving $scope.subscribe');

    };


    $scope.removeProp = function(propId){
      console.log('entering $scope.removeProp');

      PropService.delete({ id: propId }, function(){
        $scope.node = NodeService.get({ id: $routeParams.id });
      });
      
      console.log('leaving $scope.removeProp');
    };


    $scope.submitNode = function(){
      console.log('entering $scope.submitNode');

      $scope.node.$update(function(){
        $scope.node = NodeService.get({ id: $routeParams.id });
      });
      
      console.log('leaving $scope.submitNode');
    };

    ngmqtt.listenMessage("NodesupdateCtrl", function(topic, message){
      console.log("entering listenMessage");

      console.log("entering topic:" + topic + " message: " + message);

      console.log("leaving listenMessage");
    });

    console.log('leaving NodesupdateCtrl');

});


  // var options = {
  //   port: 9001,
  //       protocolVersion: 4
  //   };
  
  // ngmqtt.connect('https://cpsiot.cs.uni-kl.de', options);
  
  // $scope.subscribe = function(topic){
  //   console.log("[subscribe] entering");
  //   console.log("[subscribe] topic:" + topic);
  //   ngmqtt.listenConnection("MqttCtrl", function(){
  //         console.log("[subscribe] listenConnection");
  //         ngmqtt.subscribe(topic);
  //     });
  //   console.log("[subscribe] leaving");
  // };

  // ngmqtt.listenMessage("MqttCtrl", function(topic, message){
  //   console.log("[listenMessage] entering");
  //   console.log("[listenMessage] topic:" + topic + " message: " + message);
  // });
