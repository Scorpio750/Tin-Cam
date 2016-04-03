'use strict'

/* Controllers */
var tincamApp = angular.module('tincamApp', []);

tincamApp.controller('DropBoxCtrl', function($scope, $window, $q) {
	$scope.sendToDropBox = function() {
		$window.location.href = 'https://www.dropbox.com/1/oauth2/authorize?client_id=mmluyluwbkw0iqn&response_type=code&redirect_uri=http://localhost:3000/public/index.html';
	};

	// set up promise to handle token sessions
	var promise
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
