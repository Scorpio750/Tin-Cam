'use strict'

/* Controllers */
var tincamApp = angular.module('tincamApp', []);

tincamApp.controller('DropBoxCtrl', function($scope, $http) {
	$scope.sendToDropBox = function() {
		$http({
			method: 'GET',
			url: 'https://www.dropbox.com/1/oauth2/authorize?client_id=mmluyluwbkw0iqn&response_type=code',
			headers: {
				'Authorization': 'Bearer Z4vDR255Iw8AAAAAAAACA5r_OpGmRaDpkaEzjsN2xC-GKDrOUowLLjyEmX-NKXtl'
			},
			redirect_uri: 'https://www.dropbox.com/*'
		}).then(function mySuccess(response) {
			console.log(response.data);
		}, function myError(response) {
			console.log(response.statusText);
		});
	};
});

/* GSAP Functions */
document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementsByTagName('button')[0];
	// button = button[0];
	var dropbox = document.getElementsByClassName('fa-dropbox')[0];
	// dropbox = dropbox[0];
	var body = document.getElementsByTagName('body')[0];
	var lightBlue = "#6DA3E3";
	var primBlue = "#528ED5";
	button.addEventListener("mouseover", function() {
		TweenMax.to(button, .2, {
			backgroundColor: primBlue,
			onStart: changeDropbox
		});

		function changeDropbox() {
			TweenMax.to(dropbox, .2, {
				color: primBlue,
				transform: 'scale(1.1)',
				marginBottom: '.1em'
			});
		}
	});
	button.addEventListener("mouseout", function() {
		TweenMax.to(button, .2, {
			backgroundColor: lightBlue,
			onStart: changeDropbox
		});

		function changeDropbox() {
			TweenMax.to(dropbox, .2, {
				color: lightBlue,
				transform: 'scale(1)',
				marginBottom: '0'
			});
		}
	});
});
