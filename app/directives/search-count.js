'use strict';

angular.module('myApp')
    .directive('searchCount', ['TodoService', function (TodoService) {
        return {
            link: function ($scope, elem, attr) {
                $scope.itemData = TodoService.ListItems();
            },
            scope: {
                itemData: '@'
            },
            templateUrl: 'templates/search-count.html'
        }
    }]);