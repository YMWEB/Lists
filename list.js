var myControl = angular.module('myControls',[]);
myControl.controller('Listcontrol',['$scope','$http',function($scope,$http){
	$http.get('stu.json').success(function(data){
	$scope.students = data;
	$scope.stuorder = 'class';
});
}]);

myControl.controller('Detailscontrol',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$http.get('stu.json').success(function(data){
		$scope.students = data;
		$scope.whichItem = $routeParams.itemId;
		
		if($routeParams.itemID > 0){
			$scope.prevItem = Number($routeParams.itemID)-1;
		}else{
			$scope.prevItem = $scope.students.length -1;
		}
		if($routeParams.itemId < $scope.students.length-1){
			$scope.nextItem = Number($routeParams.itemId)+1;
		}else{
			$scope.nextItem = 0;
		}
	})

}])

