var controllers = angular.module("ChatUp.controllers", []);

controllers.controller('ChatController', function($scope, $Messages){
	$scope.messages = $Messages.all;
	$scope.messageToSend = {};
	$scope.messageToSend.text = '';
	$scope.messageToSend.name = "Juanca";

	$scope.sendMessage = function() {
		$Messages.send($scope.messageToSend);
		$scope.messageToSend.text = '';
	};

	$scope.removeMessage = function(message) {
		$Messages.remove(message);
	};
});