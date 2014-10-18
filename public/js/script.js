var MainCtrl = function ($scope) {
  $scope.posts = [{text: 'post-1'}, {text: 'post-2'}];
};

angular.module('app', []).controller('MainCtrl', ['$scope', MainCtrl]);