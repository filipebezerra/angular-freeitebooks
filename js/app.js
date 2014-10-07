'use strict';

var freeEbooksApp = angular.module('freeEbooksApp', [
		'freeEbooksControllers'
	]);


freeEbooksApp.directive('homeSection', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/home-section.html'
	};
});