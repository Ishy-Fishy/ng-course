'use strict';

angular.module('myApp')
    .directive('listItem', listItemFunction);

function listItemFunction(){
        return {
            restrict: 'E',
            scope: {
                title: '=',
                description: '=',
            },
            templateUrl: 'templates/list-item.html',
            link: function ($scope) {
                console.log("SCOPE>?", $scope);
            }
        }
    }
