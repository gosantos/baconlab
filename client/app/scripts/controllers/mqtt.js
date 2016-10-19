'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MqttCtrl
 * @description
 * # MqttCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MqttCtrl', function ($scope, ngmqtt) {

	var options = {
		port: 9001,
        protocolVersion: 4
    };
	    
	ngmqtt.connect('https://cpsiot.cs.uni-kl.de', options);

	
	$scope.subscribe = function(topic){
		console.log("[subscribe] entering");
		console.log("[subscribe] topic:" + topic);
		ngmqtt.listenConnection("MqttCtrl", function(){
	        console.log("[subscribe] listenConnection");
	        ngmqtt.subscribe(topic);
	    });
		console.log("[subscribe] leaving");
	};

	ngmqtt.listenMessage("MqttCtrl", function(topic, message){
		console.log("[listenMessage] entering");
		console.log("[listenMessage] topic:" + topic + " message: " + message);
	});

  });