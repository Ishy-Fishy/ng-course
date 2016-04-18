'use strict';

angular.module('myApp')
    .directive('listItem', ['TodoService', function (TodoService) {
        return {
            scope: {
                title: '=',
                description: '=',
            },
            templateUrl: 'templates/list-item.html',
            link: function ($scope) {
                console.log("SCOPE>?", $scope);
                $scope.delItem = TodoService.DelItem;
            }
        }
    }]);
