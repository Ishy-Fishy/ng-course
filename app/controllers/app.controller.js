'use strict';

angular.module('myApp')
  .controller('AppCtrl', AppController);

function AppController($scope, TodoService) {

  $scope.data = { };

  $scope.keyword = "";

  $scope.addItem = TodoService.AddItem;
}
