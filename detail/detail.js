(function(){
    
    var detailApp=angular.module("detailApp",["serviceApp"]);
    detailApp.config(["$routeProvider",function($routeProvider){
          $routeProvider.when("/detail/:movieID",{
          	templateUrl:"detail/detail.html",
          	controller:"detailControl"
          })
    }])
    detailApp.controller("detailControl",["$scope","serviceControl","$routeParams",
    	function($scope,$service,$routeParams){
    		$scope.loading=false;
          $service.jsonp("https://api.douban.com/v2/movie/subject/"+$routeParams.movieID,
          	{},function(data){
                    $scope.loading=true;
                    $scope.movie=data;
                    $scope.$apply();
          })
    }])
})()