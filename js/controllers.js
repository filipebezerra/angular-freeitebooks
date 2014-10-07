'use strict';

/* Controllers */

var freeEbooksControllers = angular.module('freeEbooksControllers', ['freeEbooksServices']);

freeEbooksControllers.controller('NavLinksController', function(){
	this.navSelected = 1;

	this.selectNav = function(navLink) {
		this.navSelected = navLink;
	};

	this.isSelectedNav = function(navLink) {
		return this.navSelected === navLink;
	};
});

freeEbooksControllers.controller('BookQueryController', function($scope, EbookQuery){
	EbookQuery.get(function(data){

	});
});