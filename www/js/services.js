angular.module('starter.services',['ngResource'])

.factory('Session',function($resource){
	return $resource('http://localhost:3000/dishes/:id');
});