'use strict';

/* Services */

var freeEbooksServices = angular.module('freeEbooksServices', ['ngResource']);

freeEbooksServices.factory('EbookFactory', function($resource) {
    return $resource("http://it-ebooks-api.info/v1/search/:query", {}, {
        query : {
            method : 'GET'
        }
    })
});