var myApp = angular.module('myApp', ['ngRoute','myControls']);

myApp.config(['$routeProvider',function(
	$routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl:'list.html',
		controller:'Listcontrol'
	}).
	when('/details/:itemId',{
		templateUrl:'details.html',
		controller:'Detailscontrol'
	}).
	otherwise({
		redirectTo:'/list'
	});
}])

