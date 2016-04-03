'use strict'

/* Controllers */
var tincamApp = angular.module('tincamApp', []);

tincamApp.controller('DropBoxCtrl', function($scope,$http) {
	$scope.sendToDropBox = function() {
		$http({
			method: 'GET',
			url: 'https://www.dropbox.com/1/oauth2/authorize?client_id=<YOUR-APP-KEY>&response_type=code',
			headers: {'Authorization':'Bearer <TOKEN>'},
			redirect_uri: 'https://www.dropbox.com/*'
		}).then(function mySuccess(response){
			console.log(response.data);
		}, function myError(response){
			console.log(response.statusText);
		});
	};
});
