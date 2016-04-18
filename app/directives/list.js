'use strict';

angular.module('myApp')
    .directive('list', ['TodoService', function (TodoService) {
        return {
            restrict: 'E',
            link: function ($scope, elem, attr) {
                $scope.items = TodoService.ListItems();
                $scope.delItem = TodoService.DelItem;
            },
            scope: {
                items: '='
            },

            templateUrl: 'templates/list.html'
        }
    }]);