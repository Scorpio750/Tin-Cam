'use strict'

/* Controllers */
var tincamApp = angular.module('tincamApp', []);

tincamApp.controller('DropBoxCtrl', function($scope) {
	$scope.sendToDropBox = function() {
		// add http request here Claire =D
	};
});

/* GSAP Functions */
document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementsByTagName('button');
	button = button[0];
	var dropbox = document.getElementsByClassName('fa-dropbox');
	dropbox = dropbox[0];
	var lightBlue =  "#6DA3E3";
	var primBlue = "#528ED5";
	button.addEventListener("mouseover", function() {
		TweenMax.to(button, .2, {
			backgroundColor: primBlue,
			onStart: changeDropbox
		});
		function changeDropbox() {
			TweenMax.to(dropbox, .2, {
				color: primBlue
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
				color: lightBlue
			});
		}
	})
});
