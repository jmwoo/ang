angular.module('app', []).controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.posts = [];

	var get = function () {
		$http.get('/posts').then(function (resp) {
			$scope.posts = resp.data;
		});
	};
  	
  	get();
}]);